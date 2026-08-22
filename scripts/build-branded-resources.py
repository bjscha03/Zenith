from __future__ import annotations

import html
import io
import os
import sys
from contextlib import contextmanager
from pathlib import Path
from typing import Iterable

from PIL import Image, ImageEnhance, ImageFilter
from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "scripts" / "pdf-assets"
PUBLIC = ROOT / "public" / "brochures"
OUTPUT = ROOT.parent / "output" / "resource-pdfs"
TMP = ROOT.parent / "tmp" / "branded-resources"

PAGE_W, PAGE_H = letter
NAVY = HexColor("#0F172A")
INK = HexColor("#132541")
ZENITH_BLUE = HexColor("#16365D")
BRIGHT = HexColor("#3B82F6")
SLATE = HexColor("#475569")
MUTED = HexColor("#64748B")
LIGHT = HexColor("#E2E8F0")
MIST = HexColor("#F3F7FC")
PALE = HexColor("#EAF2FB")
GREEN = HexColor("#15803D")
STREET_ADDRESS = "5004 Bee Creek Rd, Suite 620"
CITY_ADDRESS = "Spicewood, TX 78669"
FULL_ADDRESS = f"{STREET_ADDRESS}  |  {CITY_ADDRESS}"


def register_fonts() -> None:
    candidates = {
        "ZenithSans": [
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ],
        "ZenithSans-Bold": [
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        ],
        "ZenithSans-Italic": [
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Italic.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf",
        ],
    }
    for name, options in candidates.items():
        for option in options:
            if Path(option).exists():
                pdfmetrics.registerFont(TTFont(name, option))
                break


def prepare_images() -> dict[str, ImageReader]:
    TMP.mkdir(parents=True, exist_ok=True)
    mountain = Image.open(ASSETS / "zenith-mountain.webp").convert("RGB")
    mountain = ImageEnhance.Contrast(mountain).enhance(1.06)
    mountain = ImageEnhance.Color(mountain).enhance(0.88)

    logo = Image.open(ASSETS / "zenith-logo.webp").convert("RGBA")
    alpha = logo.getchannel("A").point(lambda value: min(255, int(value * 4.5)))
    white_logo = Image.new("RGBA", logo.size, (255, 255, 255, 0))
    white_logo.putalpha(alpha)

    cover = mountain.resize((1275, 1650), Image.Resampling.LANCZOS)
    cover = cover.crop((0, 0, 1275, 1650))
    navy_overlay = Image.new("RGB", cover.size, (9, 23, 43))
    cover = Image.blend(cover, navy_overlay, 0.62)
    cover = Image.blend(cover, Image.new("RGB", cover.size, (4, 12, 26)), 0.27)
    cover_logo = white_logo.copy()
    cover_logo.thumbnail((367, 121), Image.Resampling.LANCZOS)
    cover.paste(cover_logo, (100, 71), cover_logo)
    cover_path = TMP / "cover.jpg"
    cover.save(cover_path, quality=92, optimize=True)

    header_source = mountain.resize((1275, 985), Image.Resampling.LANCZOS)
    header = header_source.crop((0, 178, 1275, 368))
    header = ImageEnhance.Color(header).enhance(0.42)
    header = Image.blend(header, Image.new("RGB", header.size, (247, 250, 253)), 0.76)
    header_path = TMP / "whitepaper-header.jpg"
    header.save(header_path, quality=90, optimize=True)

    watermark = mountain.resize((900, 650), Image.Resampling.LANCZOS)
    watermark = ImageEnhance.Color(watermark).enhance(0.25)
    watermark = ImageEnhance.Contrast(watermark).enhance(0.7)
    watermark = watermark.filter(ImageFilter.GaussianBlur(0.25)).convert("RGBA")
    watermark.putalpha(22)
    watermark_path = TMP / "mountain-watermark.png"
    watermark.save(watermark_path)

    navy_logo_path = TMP / "logo-navy.png"
    logo.save(navy_logo_path)

    return {
        "cover": ImageReader(str(cover_path)),
        "header": ImageReader(str(header_path)),
        "watermark": ImageReader(str(watermark_path)),
        "logo_navy": ImageReader(str(navy_logo_path)),
    }


BODY = ParagraphStyle(
    "Body",
    fontName="ZenithSans",
    fontSize=9.4,
    leading=13.8,
    textColor=SLATE,
    alignment=TA_LEFT,
    spaceAfter=0,
)
LEDE = ParagraphStyle(
    "Lede",
    fontName="ZenithSans",
    fontSize=11.4,
    leading=16.2,
    textColor=SLATE,
    alignment=TA_LEFT,
)
SECTION = ParagraphStyle(
    "Section",
    fontName="ZenithSans-Bold",
    fontSize=13.4,
    leading=16.3,
    textColor=INK,
    alignment=TA_LEFT,
)
CALLOUT = ParagraphStyle(
    "Callout",
    fontName="ZenithSans-Bold",
    fontSize=12.2,
    leading=17.2,
    textColor=INK,
    alignment=TA_LEFT,
)
SMALL = ParagraphStyle(
    "Small",
    fontName="ZenithSans",
    fontSize=8.1,
    leading=11.2,
    textColor=MUTED,
    alignment=TA_LEFT,
)


def para(c: canvas.Canvas, text: str, style: ParagraphStyle, x: float, y: float, width: float) -> float:
    p = Paragraph(html.escape(text), style)
    _, height = p.wrap(width, PAGE_H)
    p.drawOn(c, x, y - height)
    return y - height


def bullets(c: canvas.Canvas, items: Iterable[str], x: float, y: float, width: float, gap: float = 8) -> float:
    for item in items:
        c.setFillColor(BRIGHT)
        c.circle(x + 3.3, y - 6.2, 2.2, fill=1, stroke=0)
        y = para(c, item, BODY, x + 13, y, width - 13) - gap
    return y


def section(c: canvas.Canvas, heading: str, body: str, x: float, y: float, width: float) -> float:
    y = para(c, heading, SECTION, x, y, width) - 7
    return para(c, body, BODY, x, y, width) - 17


def bullet_section(c: canvas.Canvas, heading: str, items: Iterable[str], x: float, y: float, width: float) -> float:
    y = para(c, heading, SECTION, x, y, width) - 8
    return bullets(c, items, x, y, width, 7) - 10


def body_paragraphs(c: canvas.Canvas, items: Iterable[str], x: float, y: float, width: float) -> float:
    for item in items:
        y = para(c, item, BODY, x, y, width) - 10
    return y - 4


def bullet_list(c: canvas.Canvas, items: Iterable[str], x: float, y: float, width: float) -> float:
    return bullets(c, items, x, y, width, 7) - 10


def callout(c: canvas.Canvas, text: str, x: float, y: float, width: float) -> float:
    p = Paragraph(html.escape(text), CALLOUT)
    _, text_h = p.wrap(width - 26, PAGE_H)
    block_h = text_h + 18
    c.setFillColor(BRIGHT)
    c.rect(x, y - block_h, 3, block_h, fill=1, stroke=0)
    p.drawOn(c, x + 16, y - 9 - text_h)
    return y - block_h - 16


def compare_rows(c: canvas.Canvas, rows: list[tuple[str, str]], x: float, y: float, width: float) -> float:
    left_w = width * 0.46
    right_w = width - left_w
    c.setFont("ZenithSans-Bold", 8.2)
    c.setFillColor(MUTED)
    c.drawString(x, y, "TRADITIONAL")
    c.drawString(x + left_w + 14, y, "STRATEGIC / CAPTIVE")
    y -= 12
    c.setStrokeColor(LIGHT)
    c.line(x, y, x + width, y)
    y -= 12
    for left, right in rows:
        left_p = Paragraph(html.escape(left), SMALL)
        right_p = Paragraph(html.escape(right), SMALL)
        _, lh = left_p.wrap(left_w - 8, 100)
        _, rh = right_p.wrap(right_w - 20, 100)
        row_h = max(lh, rh) + 10
        left_p.drawOn(c, x, y - lh)
        right_p.drawOn(c, x + left_w + 14, y - rh)
        c.setStrokeColor(HexColor("#CBD5E1"))
        c.line(x + left_w + 6, y + 3, x + left_w + 6, y - row_h + 4)
        y -= row_h
        c.setStrokeColor(LIGHT)
        c.line(x, y + 3, x + width, y + 3)
    return y - 10


def steps(c: canvas.Canvas, items: list[tuple[str, str]], x: float, y: float, width: float) -> float:
    for index, (title, detail) in enumerate(items, start=1):
        c.setFillColor(ZENITH_BLUE)
        c.circle(x + 14, y - 13, 13, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("ZenithSans-Bold", 8.5)
        c.drawCentredString(x + 14, y - 16, f"{index:02d}")
        c.setFillColor(INK)
        c.setFont("ZenithSans-Bold", 10.2)
        c.drawString(x + 38, y - 8, title)
        y = para(c, detail, SMALL, x + 38, y - 15, width - 38) - 12
    return y


def layers(c: canvas.Canvas, labels: list[tuple[str, str]], x: float, y: float, width: float) -> float:
    for index, (label, detail) in enumerate(labels):
        c.setFillColor(BRIGHT)
        c.setFont("ZenithSans-Bold", 8.2)
        c.drawString(x, y - 8, f"0{index + 1}")
        c.setFillColor(INK)
        c.setFont("ZenithSans-Bold", 10.4)
        c.drawString(x + 30, y - 8, label)
        y = para(c, detail, SMALL, x + 30, y - 15, width - 30) - 10
        c.setStrokeColor(LIGHT)
        c.line(x + 30, y + 5, x + width, y + 5)
    return y - 8


def checklist(c: canvas.Canvas, items: list[str], x: float, y: float, width: float) -> float:
    for item in items:
        c.setStrokeColor(BRIGHT)
        c.setLineWidth(1.2)
        c.roundRect(x, y - 12, 11, 11, 2, fill=0, stroke=1)
        y = para(c, item, BODY, x + 20, y, width - 20) - 7
    return y


def draw_cover(c: canvas.Canvas, images: dict[str, ImageReader], spec: dict) -> None:
    c.drawImage(images["cover"], 0, 0, width=PAGE_W, height=PAGE_H, mask="auto")
    c.setFillColor(BRIGHT)
    c.rect(48, PAGE_H - 176, 64, 4, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("ZenithSans-Bold", 9)
    c.drawString(48, PAGE_H - 151, spec["series"].upper())

    title_style = ParagraphStyle(
        "CoverTitle",
        fontName="ZenithSans-Bold",
        fontSize=32,
        leading=35.5,
        textColor=white,
    )
    title_p = Paragraph(html.escape(spec["title"]), title_style)
    _, title_h = title_p.wrap(PAGE_W - 96, 240)
    title_p.drawOn(c, 48, PAGE_H - 236 - title_h)
    subtitle_style = ParagraphStyle(
        "CoverSubtitle",
        fontName="ZenithSans",
        fontSize=13,
        leading=18,
        textColor=Color(1, 1, 1, alpha=0.86),
    )
    subtitle_p = Paragraph(html.escape(spec["subtitle"]), subtitle_style)
    _, sub_h = subtitle_p.wrap(PAGE_W - 120, 120)
    subtitle_p.drawOn(c, 48, PAGE_H - 260 - title_h - sub_h)
    c.setFillColor(Color(1, 1, 1, alpha=0.78))
    c.setFont("ZenithSans-Bold", 8)
    c.drawString(48, 52, "ZENITH RISK STRATEGIES")
    c.setFont("ZenithSans", 8)
    c.drawRightString(PAGE_W - 48, 52, "ZENITHRISKSTRATEGIES.COM")
    c.setFont("ZenithSans", 7.4)
    c.setFillColor(Color(1, 1, 1, alpha=0.82))
    c.drawString(48, 37, STREET_ADDRESS)
    c.drawString(48, 25, CITY_ADDRESS)


def draw_page_header(c: canvas.Canvas, images: dict[str, ImageReader], spec: dict, page_spec: dict) -> float:
    c.setFillColor(white)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.drawImage(images["watermark"], PAGE_W - 310, 0, width=310, height=225, mask="auto")
    c.drawImage(images["logo_navy"], PAGE_W - 157, PAGE_H - 52, width=109, height=36, preserveAspectRatio=True, mask="auto")
    c.setFillColor(BRIGHT)
    c.rect(48, PAGE_H - 62, 56, 2.5, fill=1, stroke=0)
    c.setFont("ZenithSans-Bold", 7.5)
    c.setFillColor(MUTED)
    c.drawString(48, PAGE_H - 42, page_spec["label"].upper())

    title_style = ParagraphStyle(
        "PageTitle",
        fontName="ZenithSans-Bold",
        fontSize=23.5,
        leading=27,
        textColor=INK,
    )
    p = Paragraph(html.escape(page_spec["title"]), title_style)
    _, h = p.wrap(PAGE_W - 96, 90)
    p.drawOn(c, 48, PAGE_H - 92 - h)
    lede_y = PAGE_H - 106 - h
    lede_bottom = para(c, page_spec["lede"], LEDE, 48, lede_y, PAGE_W - 96)
    separator_y = min(PAGE_H - 184, lede_bottom - 12)
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.8)
    c.line(48, separator_y, PAGE_W - 48, separator_y)
    return separator_y - 26


def draw_modules(c: canvas.Canvas, modules: list[dict], x: float, y: float, width: float) -> float:
    for module in modules:
        kind = module["kind"]
        if kind == "text":
            y = section(c, module["heading"], module["body"], x, y, width)
        elif kind == "heading":
            y = para(c, module["text"], SECTION, x, y, width) - 10
        elif kind == "paragraphs":
            y = body_paragraphs(c, module["items"], x, y, width)
        elif kind == "bullets":
            y = bullet_section(c, module["heading"], module["items"], x, y, width)
        elif kind == "bullet_list":
            y = bullet_list(c, module["items"], x, y, width)
        elif kind == "callout":
            y = callout(c, module["text"], x, y, width)
        elif kind == "compare":
            y = compare_rows(c, module["rows"], x, y, width)
        elif kind == "steps":
            y = steps(c, module["items"], x, y, width)
        elif kind == "layers":
            y = layers(c, module["items"], x, y, width)
        elif kind == "checklist":
            y = checklist(c, module["items"], x, y, width)
        else:
            raise ValueError(f"Unknown module kind: {kind}")
    return y


def draw_content_page(c: canvas.Canvas, images: dict[str, ImageReader], spec: dict, page_spec: dict, page_number: int, total_pages: int) -> None:
    top_y = draw_page_header(c, images, spec, page_spec)
    col_gap = 30
    col_w = (PAGE_W - 96 - col_gap) / 2
    draw_modules(c, page_spec["left"], 48, top_y, col_w)
    draw_modules(c, page_spec["right"], 48 + col_w + col_gap, top_y, col_w)

    c.setStrokeColor(LIGHT)
    c.line(48, 38, PAGE_W - 48, 38)
    c.setFont("ZenithSans-Bold", 7.2)
    c.setFillColor(MUTED)
    c.drawString(48, 24, "ZENITH RISK STRATEGIES  |  " + spec["short_title"].upper())
    c.drawRightString(PAGE_W - 48, 24, f"{page_number:02d} / {total_pages:02d}")


@contextmanager
def scaled_module_styles(scale: float):
    styles = (BODY, LEDE, SECTION, CALLOUT, SMALL)
    snapshot = [(style, style.fontSize, style.leading) for style in styles]
    try:
        for style in styles:
            style.fontSize *= scale
            style.leading *= scale
        yield
    finally:
        for style, font_size, leading in snapshot:
            style.fontSize = font_size
            style.leading = leading


def draw_interior_shell(c: canvas.Canvas, images: dict[str, ImageReader], spec: dict, page_number: int, total_pages: int) -> None:
    c.setFillColor(white)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(NAVY)
    c.rect(0, 0, 12, PAGE_H, fill=1, stroke=0)
    c.setFillColor(BRIGHT)
    c.rect(12, PAGE_H - 7, PAGE_W - 12, 7, fill=1, stroke=0)
    c.drawImage(images["logo_navy"], PAGE_W - 156, PAGE_H - 51, width=108, height=35, preserveAspectRatio=True, mask="auto")

    c.setFillColor(NAVY)
    c.rect(12, 0, PAGE_W - 12, 36, fill=1, stroke=0)
    c.setFont("ZenithSans-Bold", 6.8)
    c.setFillColor(Color(1, 1, 1, alpha=0.76))
    c.drawString(48, 14, "ZENITH RISK STRATEGIES  |  " + spec["short_title"].upper())
    c.drawRightString(PAGE_W - 48, 14, f"{page_number:02d} / {total_pages:02d}")


def draw_section_block(
    c: canvas.Canvas,
    page_spec: dict,
    y_top: float,
    y_bottom: float,
    *,
    compact: bool,
) -> float:
    label_y = y_top - 9
    c.setFillColor(BRIGHT)
    c.rect(48, label_y - 4, 28, 2.5, fill=1, stroke=0)
    c.setFont("ZenithSans-Bold", 7.2 if compact else 7.8)
    c.setFillColor(MUTED)
    c.drawString(84, label_y - 6, page_spec["label"].upper())

    title_style = ParagraphStyle(
        "CompactPageTitle" if compact else "SinglePageTitle",
        fontName="ZenithSans-Bold",
        fontSize=18.2 if compact else 24.5,
        leading=20.7 if compact else 27.5,
        textColor=INK,
    )
    title_p = Paragraph(html.escape(page_spec["title"]), title_style)
    _, title_h = title_p.wrap(PAGE_W - 96, 92 if compact else 130)
    title_top = label_y - 24
    title_p.drawOn(c, 48, title_top - title_h)

    lede_style = ParagraphStyle(
        "CompactLede" if compact else "SingleLede",
        fontName="ZenithSans",
        fontSize=8.8 if compact else 11.3,
        leading=12.1 if compact else 15.6,
        textColor=SLATE,
    )
    lede_p = Paragraph(html.escape(page_spec["lede"]), lede_style)
    _, lede_h = lede_p.wrap(PAGE_W - 96, 74 if compact else 100)
    lede_top = title_top - title_h - 7
    lede_p.drawOn(c, 48, lede_top - lede_h)

    separator_y = lede_top - lede_h - 11
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.8)
    c.line(48, separator_y, PAGE_W - 48, separator_y)

    col_gap = 28
    col_w = (PAGE_W - 96 - col_gap) / 2
    content_y = separator_y - 17
    scale = 0.86 if compact else 1.18
    with scaled_module_styles(scale):
        left_y = draw_modules(c, page_spec["left"], 48, content_y, col_w)
        right_y = draw_modules(c, page_spec["right"], 48 + col_w + col_gap, content_y, col_w)
    lowest = min(left_y, right_y)
    if lowest < y_bottom + 6:
        raise ValueError(f"Content overflow on '{page_spec['title']}': {lowest:.1f} < {y_bottom + 6:.1f}")
    return lowest


def draw_application_panel(c: canvas.Canvas, spec: dict) -> None:
    x, y, width, height = 12, 36, PAGE_W - 12, 250
    c.setFillColor(NAVY)
    c.rect(x, y, width, height, fill=1, stroke=0)
    c.setFillColor(BRIGHT)
    c.rect(x, y + height - 5, width, 5, fill=1, stroke=0)
    c.setFont("ZenithSans-Bold", 7.4)
    c.setFillColor(HexColor("#60A5FA"))
    c.drawString(x + 48, y + height - 47, "PUT THE FRAMEWORK TO WORK")
    panel_style = ParagraphStyle(
        "ApplicationPanel",
        fontName="ZenithSans-Bold",
        fontSize=18.2,
        leading=22.6,
        textColor=white,
    )
    panel = Paragraph(
        "Use this guide to structure a focused conversation with Zenith's underwriting and strategy team.",
        panel_style,
    )
    _, panel_h = panel.wrap(width - 180, 100)
    panel.drawOn(c, x + 48, y + height - 68 - panel_h)
    c.setFont("ZenithSans-Bold", 8.2)
    c.setFillColor(Color(1, 1, 1, alpha=0.72))
    c.drawString(x + 48, y + 52, "UNDERWRITE  ·  ALIGN  ·  EXECUTE")
    c.setFillColor(white)
    c.drawRightString(x + width - 48, y + 52, "ZENITHRISKSTRATEGIES.COM")


def draw_condensed_content_page(
    c: canvas.Canvas,
    images: dict[str, ImageReader],
    spec: dict,
    page_specs: list[dict],
    page_number: int,
    total_pages: int,
) -> None:
    draw_interior_shell(c, images, spec, page_number, total_pages)
    if len(page_specs) == 2:
        split_y = 405
        c.setStrokeColor(HexColor("#CBD5E1"))
        c.setLineWidth(1)
        c.line(48, split_y, PAGE_W - 48, split_y)
        draw_section_block(c, page_specs[0], 748, split_y - 14, compact=True)
        draw_section_block(c, page_specs[1], split_y - 10, 38, compact=True)
        return

    lowest = draw_section_block(c, page_specs[0], 748, 186, compact=False)
    if lowest > 220:
        draw_application_panel(c, spec)


def draw_whitepaper_shell(
    c: canvas.Canvas,
    images: dict[str, ImageReader],
    spec: dict,
    page_spec: dict,
    page_number: int,
    total_pages: int,
) -> None:
    c.setFillColor(white)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.drawImage(images["header"], 0, PAGE_H - 88, width=PAGE_W, height=88, mask="auto")
    c.setFillColor(BRIGHT)
    c.rect(0, PAGE_H - 4, PAGE_W, 4, fill=1, stroke=0)
    c.drawImage(images["logo_navy"], 48, PAGE_H - 62, width=124, height=39, preserveAspectRatio=True, mask="auto")
    c.setFillColor(MUTED)
    c.setFont("ZenithSans-Bold", 7)
    c.drawRightString(PAGE_W - 48, PAGE_H - 39, spec["series"].upper())
    c.setFont("ZenithSans", 6.6)
    c.drawRightString(PAGE_W - 48, PAGE_H - 54, page_spec["label"].upper())
    c.setStrokeColor(HexColor("#B9CCE2"))
    c.setLineWidth(0.8)
    c.line(48, PAGE_H - 88, PAGE_W - 48, PAGE_H - 88)

    c.setStrokeColor(LIGHT)
    c.line(48, 42, PAGE_W - 48, 42)
    c.setFillColor(MUTED)
    c.setFont("ZenithSans-Bold", 6.8)
    c.drawString(48, 25, "ZENITH RISK STRATEGIES")
    c.setFont("ZenithSans", 6.4)
    c.drawCentredString(PAGE_W / 2, 25, FULL_ADDRESS)
    c.setFont("ZenithSans-Bold", 6.8)
    c.drawRightString(PAGE_W - 48, 25, f"{page_number:02d} / {total_pages:02d}")


def draw_whitepaper_content_page(
    c: canvas.Canvas,
    images: dict[str, ImageReader],
    spec: dict,
    page_spec: dict,
    page_number: int,
    total_pages: int,
) -> None:
    draw_whitepaper_shell(c, images, spec, page_spec, page_number, total_pages)
    x, width = 64, PAGE_W - 128
    title_style = ParagraphStyle(
        "WhitepaperTitle",
        fontName="ZenithSans-Bold",
        fontSize=24,
        leading=27.2,
        textColor=INK,
    )
    title_p = Paragraph(html.escape(page_spec["title"]), title_style)
    _, title_h = title_p.wrap(width, 112)
    title_top = PAGE_H - 119
    title_p.drawOn(c, x, title_top - title_h)

    lede_style = ParagraphStyle(
        "WhitepaperLede",
        fontName="ZenithSans",
        fontSize=10.8,
        leading=15,
        textColor=SLATE,
    )
    lede_text = page_spec.get("lede", "")
    if lede_text:
        lede_p = Paragraph(html.escape(lede_text), lede_style)
        _, lede_h = lede_p.wrap(width, 80)
        lede_top = title_top - title_h - 10
        lede_p.drawOn(c, x, lede_top - lede_h)
        separator_y = lede_top - lede_h - 14
    else:
        separator_y = title_top - title_h - 14
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.8)
    c.line(x, separator_y, x + width, separator_y)
    y = separator_y - 20

    with scaled_module_styles(page_spec.get("scale", 1.15)):
        y = draw_modules(c, page_spec["left"], x, y, width)
        if page_spec["left"] and page_spec["right"]:
            y -= 6
        y = draw_modules(c, page_spec["right"], x, y, width)

    if y < 54:
        raise ValueError(f"White-paper content overflow on '{page_spec['title']}': {y:.1f}")


def make_pdf(images: dict[str, ImageReader], spec: dict, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(output_path), pagesize=letter, pageCompression=1)
    c.setTitle(spec["title"])
    c.setAuthor("Zenith Risk Strategies")
    c.setSubject(spec["subtitle"])
    total_pages = 1 + len(spec["pages"])
    draw_cover(c, images, spec)
    c.showPage()
    for index, page_spec in enumerate(spec["pages"], start=2):
        draw_whitepaper_content_page(c, images, spec, page_spec, index, total_pages)
        c.showPage()
    c.save()


def text(heading: str, body: str) -> dict:
    return {"kind": "text", "heading": heading, "body": body}


def heading(value: str) -> dict:
    return {"kind": "heading", "text": value}


def bullet(heading: str, *items: str) -> dict:
    return {"kind": "bullets", "heading": heading, "items": list(items)}


def paragraphs(*items: str) -> dict:
    return {"kind": "paragraphs", "items": list(items)}


def list_items(*items: str) -> dict:
    return {"kind": "bullet_list", "items": list(items)}


def quote(value: str) -> dict:
    return {"kind": "callout", "text": value}


def compare(*rows: tuple[str, str]) -> dict:
    return {"kind": "compare", "rows": list(rows)}


def step(*items: tuple[str, str]) -> dict:
    return {"kind": "steps", "items": list(items)}


def layer(*items: tuple[str, str]) -> dict:
    return {"kind": "layers", "items": list(items)}


def checks(*items: str) -> dict:
    return {"kind": "checklist", "items": list(items)}


DOCUMENTS = [
    {
        "filename": "strategy-brochure.pdf",
        "series": "Zenith Strategy Series",
        "title": "Optimizing Risk to Peak Performance",
        "short_title": "Strategy Brochure",
        "subtitle": "A practical overview of Zenith's integrated underwriting, clinical, and captive strategy model.",
        "pages": [
            {
                "label": "01 | The strategic shift",
                "title": "Move from buying insurance to engineering risk",
                "lede": "Zenith helps brokers and employers replace transactional renewals with a coordinated, multi-year risk strategy.",
                "left": [
                    text("The problem with the annual cycle", "Traditional models often separate underwriting, clinical decisions, vendor performance, and renewal strategy. That fragmentation makes it difficult to see what is driving cost or to act early."),
                    bullet("What changes", "One integrated view of plan risk", "Clear ownership across partners", "Earlier intervention and better visibility", "A renewal process built around performance"),
                ],
                "right": [
                    quote("The objective is not simply to transfer risk. It is to understand it, influence it, and finance it with discipline."),
                    text("The Zenith approach", "Our model combines predictive underwriting, clinical stewardship, transparent economics, and execution support. Each discipline informs the others, creating a more accountable operating system for healthcare risk."),
                ],
            },
            {
                "label": "02 | Integrated capabilities",
                "title": "Four capabilities work as one operating model",
                "lede": "The value is created through coordination, not through isolated products.",
                "left": [
                    bullet("Predictive underwriting", "Risk segmentation beyond lagging claims", "Clear pricing logic and renewal rationale", "Multi-year planning scenarios"),
                    bullet("Clinical stewardship", "High-cost claimant visibility", "Care-pathway and vendor coordination", "Intervention summaries for decision-makers"),
                ],
                "right": [
                    bullet("Captive integration", "Feasibility and structure review", "Alignment of retained, pooled, and transferred risk", "Surplus and volatility considerations"),
                    bullet("Strategic execution", "TPA, carrier, broker, and vendor coordination", "Implementation roadmaps", "Ongoing performance reviews"),
                ],
            },
            {
                "label": "03 | Roadmap",
                "title": "A disciplined path from concept to performance",
                "lede": "Every engagement begins with fit and moves toward measurable operating discipline.",
                "left": [
                    step(("Feasibility", "Assess risk profile, funding structure, data quality, and strategic fit."), ("Partner coordination", "Align the broker, TPA, carrier, clinical partners, and program stakeholders."), ("Program launch", "Translate the approved structure into a practical implementation plan.")),
                ],
                "right": [
                    step(("Renewal strategy", "Review experience, interventions, vendor performance, and alternative structures."), ("Ongoing management", "Maintain governance, visibility, and accountability throughout the plan year.")),
                    quote("Renewal becomes a planning process, not a last-minute negotiation."),
                ],
            },
            {
                "label": "04 | Decision lens",
                "title": "The right structure starts with the right questions",
                "lede": "Use these questions to frame the next conversation with Zenith.",
                "left": [
                    checks("Do we have reliable census, claims, and renewal information?", "Which risks should be retained, pooled, or transferred?", "Where are clinical or vendor decisions affecting claim outcomes?", "Are incentives aligned across every program partner?"),
                ],
                "right": [
                    checks("What would a three-to-five-year strategy need to accomplish?", "How should success be measured during the plan year?", "Which decisions must be made before the next renewal cycle?"),
                    quote("Start the assessment at zenithriskstrategies.com/contact"),
                ],
            },
        ],
    },
    {
        "filename": "captive-vs-traditional-stoploss.pdf",
        "series": "Zenith Employer Guide",
        "title": "Captive vs. Traditional Stop-Loss",
        "short_title": "Captive vs. Traditional Stop-Loss",
        "subtitle": "A clear framework for employers and advisors evaluating control, volatility, transparency, and long-term strategy.",
        "pages": [
            {
                "label": "01 | Framing the choice",
                "title": "Both models protect risk - but they allocate value differently",
                "lede": "Traditional stop-loss purchases protection from a carrier. A captive adds a shared risk layer that can align members around performance.",
                "left": [
                    text("Traditional stop-loss", "The employer pays premium for specific and aggregate protection. The carrier prices the risk, administers the contract, and retains the underwriting result."),
                    bullet("Typical characteristics", "Straightforward annual placement", "Carrier-controlled pricing and margin", "Limited participation in underwriting performance", "Renewal often centered on one-year results"),
                ],
                "right": [
                    text("Captive structure", "The employer retains predictable risk, participates in a pooled captive layer, and transfers catastrophic exposure through stop-loss or reinsurance."),
                    bullet("Typical characteristics", "Shared risk governance", "Potential participation in underwriting results", "Greater need for data and program discipline", "Stronger multi-year orientation"),
                ],
            },
            {
                "label": "02 | Risk layers",
                "title": "A captive reallocates risk; it does not eliminate it",
                "lede": "The structure separates predictable claims from pooled volatility and catastrophic exposure.",
                "left": [
                    layer(("Employer retained risk", "Predictable claims funded by the employer"), ("Captive layer", "Shared risk financed by participating members"), ("Stop-loss / reinsurance", "Catastrophic exposure transferred above the program layer")),
                ],
                "right": [
                    text("Why the layers matter", "Each layer has a different job. The retained layer rewards day-to-day plan discipline. The captive layer smooths volatility across members. The final layer protects against severe claims beyond the program's tolerance."),
                    quote("Captives are about optimizing risk financing, not avoiding insurance."),
                ],
            },
            {
                "label": "03 | Side-by-side",
                "title": "Compare the operating model, not just the premium",
                "lede": "A complete evaluation considers control, incentives, volatility, governance, and the time horizon.",
                "left": [
                    compare(("Carrier retains the underwriting result", "Members may participate in favorable experience"), ("Annual pricing emphasis", "Multi-year performance emphasis"), ("Carrier-led contract structure", "Shared governance and program rules"), ("Simpler administration", "Greater coordination and reporting needs"), ("Protection purchased as expense", "Risk financing treated as a managed asset")),
                ],
                "right": [
                    text("Good captive candidates", "The strongest candidates are willing to share information, adopt a longer planning horizon, participate in governance, and actively manage the clinical and operational factors that influence claims."),
                    bullet("Signals of fit", "Stable or understandable population", "Leadership commitment to transparency", "Comfort with structured risk participation", "Broker and partner alignment"),
                ],
            },
            {
                "label": "04 | Evaluation",
                "title": "Use a disciplined review before choosing a structure",
                "lede": "The right answer depends on the employer's risk tolerance, data, operating model, and objectives.",
                "left": [
                    checks("Review current and renewal pricing", "Analyze large and aggregate claims", "Model retained, pooled, and transferred layers", "Assess collateral and cash-flow requirements"),
                ],
                "right": [
                    checks("Evaluate governance and exit terms", "Understand reporting and partner responsibilities", "Test multi-year scenarios", "Document the decision and implementation timeline"),
                    quote("Zenith can help translate the structure into an actionable employer and broker decision."),
                ],
            },
        ],
    },
    {
        "filename": "mechanics-of-apollo-lf-captive-program.pdf",
        "series": "Apollo Program Guide",
        "title": "Mechanics of Apollo Level-Funded Captive Program",
        "short_title": "Apollo Level-Funded Captive Program",
        "subtitle": "Benefits of a Group Medical Captive",
        "pages": [
            {
                "label": "01 | Benefits and Plan Design",
                "title": "Benefits of a Group Medical Captive",
                "lede": "",
                "scale": 1.06,
                "left": [
                    list_items(
                        "Greater control over program design",
                        "Potential for underwriting profit return to captive participants",
                        "Improved transparency and alignment of incentives among stakeholders",
                        "Access to claims data and utilization insights for better decision-making",
                        "Spreads risk across multiple employers for added stability",
                        "Participation in a shared reinsurance pool with like-minded employers",
                        "Opportunity to capture investment income on reserves",
                        "Ability to implement and reward effective cost containment strategies",
                    ),
                    text(
                        "How a Level-Funded Health Plan Works",
                        "Employers pay ONE fixed monthly amount covering three components:",
                    ),
                    list_items(
                        "Claims Fund: Pays for employee medical claims up to a set threshold (called the specific deductible and aggregate maximum liability)",
                        "Stop-Loss Insurance: Protects the employer from high-cost claims and total liability on the group",
                        "Administrative Fees: Covers plan administration costs",
                    ),
                    paragraphs(
                        "If claims are lower than expected, the employer may receive a refund of unused claims fund dollars.",
                        "If claims exceed the set threshold, stop-loss insurance kicks in.",
                        "Provides predictable monthly costs with the potential for savings compared to fully insured plans.",
                        "Offers access to claims data and greater transparency for informed decision-making.",
                    ),
                ],
                "right": [],
            },
            {
                "label": "02 | Monthly Funding and Premium Flow",
                "title": "Distribution of Monthly Premium",
                "lede": "",
                "scale": 1.02,
                "left": [
                    bullet(
                        "Claims Fund - Typically 60-70% of monthly employer payment",
                        "Used to pay medical claims below the stop-loss deductible",
                        "Any surplus at year-end may be refunded to the employer",
                    ),
                    bullet(
                        "Stop-Loss Premium - Typically 20-25% of the monthly payment",
                        "Provides financial protection for high-cost or aggregate claims",
                        "May be partially ceded to a captive for risk-sharing and profitability",
                    ),
                    bullet(
                        "Administrative Fees - Typically 5-15% of the monthly payment",
                        "Covers TPA, PBM, network access, technology, compliance, and reporting",
                        "Generally transparent and fixed in level-funded plans",
                    ),
                    text(
                        "Visual Workflow Overview",
                        "Employer Group -> TPA -> Stop-Loss Carrier -> Captive Insurer",
                    ),
                    list_items(
                        "Captive Insurer -> Collateral (posted by Zenith)",
                        "Captive Insurer -> Claims Reimbursement Flow",
                    ),
                    text(
                        "Employer Group Pays Premium",
                        "The employer group contributes a monthly premium for stop-loss coverage, that is a part of their level-funded health plan invoice from the TPA.",
                    ),
                    paragraphs("The premium is based on the employees and the dependents enrolled."),
                    text(
                        "TPA Remits Premium",
                        "The Third-Party Administrator (TPA) receives the employer's payment and remits the full stop-loss premium to the issuing or fronting carrier. The TPA does not underwrite or retain any stop-loss risk.",
                    ),
                    paragraphs("The TPA ONLY keeps their admin fee and creates a separate account for the claims bucket to pay for claims as they come in."),
                ],
                "right": [],
            },
            {
                "label": "03 | Carrier, Captive, and Claims",
                "title": "Stop-Loss Carrier Allocates Premium",
                "lede": "",
                "scale": 1.08,
                "left": [
                    paragraphs(
                        "The stop-loss carrier retains fronting and administrative fees (commonly 10-25%), possibly includes broker commissions, and cedes the remaining premium to the captive through a reinsurance agreement.",
                    ),
                    text(
                        "Captive Receives Net Premium",
                        "The captive insurer assumes a portion of the stop-loss risk, typically the specific and/or aggregate layer, and collects underwriting profit. It also can earn investment income on unused reserves.",
                    ),
                    paragraphs(
                        "The captive does have operating expenses that are typically in the 10-15% range. These include audit, legal, banking, licensing, compliance, and management.",
                        "The captive also will purchase reinsurance above their risk layer for larger catastrophic risk.",
                    ),
                    text(
                        "Captive Posts Collateral",
                        "To secure its obligation to the stop-loss carrier, the captive posts collateral. Collateral levels are determined by actuarial projections and contract terms. Zenith is posting this collateral requirement on behalf of the employer groups.",
                    ),
                    text(
                        "Claims Reimbursement Process",
                        "If a claim exceeds the group's stop-loss deductible or weekly aggregate accommodation, the TPA submits it to the stop-loss carrier.",
                    ),
                    paragraphs(
                        "The carrier issues payment to the TPA.",
                        "Then seeks reimbursement from the captive if the claim falls within the reinsured layer owned by the captive.",
                        "Once the contract term is up. The captive, employer group, and the stop loss carrier all 'settle-up'.",
                    ),
                ],
                "right": [],
            },
            {
                "label": "04 | Claims and Reconciliation",
                "title": "Sample Claim Payment Flow",
                "lede": "",
                "scale": 0.94,
                "left": [
                    paragraphs("Total Claim: $400,000"),
                    text(
                        "Employer Responsibility",
                        "Employer has a $25,000 specific deductible. Pays the first $25,000 of the claim.",
                    ),
                    text(
                        "Captive Responsibility",
                        "Captive reinsurer assumes the next $200,000 of the claim. Pays from its ceded stop-loss premium reserves.",
                    ),
                    text(
                        "Stop-Loss Carrier Responsibility",
                        "Fronting carrier covers the remaining $175,000. Carrier may seek reimbursement from the captive for the ceded layer.",
                    ),
                    bullet(
                        "Reimbursement Flow",
                        "TPA submits claim to stop-loss carrier.",
                        "Carrier reimburses TPA or employer for amounts above deductible.",
                        "Captive reimburses carrier for its assumed portion of the risk.",
                    ),
                    heading("Distribution of Surplus After Plan Year"),
                    bullet(
                        "Claims Fund Surplus Distribution",
                        "100% of Unused dollars in the employer's claims fund are returned at the end of the contract year.",
                        "Subject to terms such as run-out period, and reconciliation timing. (12/15 or 12/18 + 3 months)",
                        "Enhances employer value, encourages better health plan engagement and outcomes.",
                    ),
                    bullet(
                        "Captive Surplus Distribution",
                        "At the end of the contract term, underwriting profits retained by the captive WILL be distributed to participating groups.",
                        "Distribution is based on contribution to premium, claims performance, and participation terms outlined in the captive participation agreement. (SAPA)",
                        "Surplus will be split as 25% employer groups, 25% retain for future risk mitigation, 50% Zenith",
                    ),
                ],
                "right": [],
            },
        ],
    },
    {
        "filename": "reimagining-health-insurance.pdf",
        "series": "Zenith Insight Series",
        "title": "Reimagining Health Insurance",
        "short_title": "Reimagining Health Insurance",
        "subtitle": "A Modern Approach to Financing Employer Healthcare Risk",
        "pages": [
            {
                "label": "01 | Executive Summary",
                "title": "Executive Summary",
                "lede": "",
                "scale": 0.86,
                "left": [
                    paragraphs(
                        "Employers are not buying insurance they are financing risk. Most are simply doing it inefficiently.",
                        "Fully insured plans force employers to prepay for volatility, absorb hidden margins, and operate without control. Traditional self-funding improves efficiency but introduces exposure that many are not structured to manage.",
                        "A new model has emerged one built on structured risk, aligned incentives, and operational control.",
                        "This paper outlines how leading employers are redesigning healthcare financing using captives, modern stop loss strategies, and integrated cost containment.",
                    ),
                    text(
                        "The Problem with Fully Insured",
                        "Fully insured plans are engineered for carrier stability not employer optimization.",
                    ),
                    bullet(
                        "Every premium includes:",
                        "Profit margins",
                        "Risk loads",
                        "Trend assumptions",
                    ),
                    paragraphs(
                        "Employers pay regardless of actual performance. The result is predictable: rising costs with no control.",
                    ),
                    text(
                        "The Shift to Self-Funding",
                        "Self-funding introduces transparency, control, and efficiency. But it also introduces volatility. A single catastrophic claim can materially impact financial performance. Employers are left choosing between inefficiency and uncertainty.",
                    ),
                    text("The Missing Middle", "The future is not binary."),
                    bullet(
                        "Modern employers are adopting structured risk strategies that:",
                        "Retain predictable risk",
                        "Transfer catastrophic exposure",
                        "Participate in underwriting outcomes",
                    ),
                    quote("Healthcare becomes a financial strategy not just a benefit."),
                ],
                "right": [],
            },
            {
                "label": "02 | Strategy and Conclusion",
                "title": "Stop Loss Evolution",
                "lede": "",
                "scale": 0.90,
                "left": [
                    paragraphs(
                        "Stop loss is no longer just protection, it is a financial instrument. Traditional pricing models are backward-looking and conservative.",
                        "Modern models integrate real-time data and operational performance.",
                    ),
                    text("The Power of Captives", "Captives allow employers to take control."),
                    bullet(
                        "They introduce:",
                        "Risk pooling",
                        "Profit participation",
                        "Reduced carrier dependency",
                    ),
                    paragraphs("This is how mid-market employers access institutional-level strategy."),
                    text(
                        "Cost Containment as a Lever",
                        "Cost is not just a function of risk it is a function of behavior. When employers control access, navigation, and care pathways, they directly influence claims. This, changes underwriting entirely.",
                    ),
                    text(
                        "Catastrophic Claim Reality",
                        "A few of these types of claims drive the majority of cost. Without structure, they destabilize plans. With the right strategy, their impact can be contained and redistributed.",
                    ),
                    text(
                        "The Role of the Modern MGU",
                        "The MGU is no longer a middle layer. It is the architect of risk. The integration of underwriting, clinical insight, and cost strategy is what defines next-generation performance.",
                    ),
                    text(
                        "Conclusion",
                        "The old model is broken. The future belongs to employers who treat healthcare as a controllable financial system - not a fixed expense.",
                    ),
                    quote("Those who adapt will outperform. Those who don't will continue to absorb unnecessary cost."),
                ],
                "right": [],
            },
        ],
    },
    {
        "filename": "stop-loss-captives.pdf",
        "series": "Zenith Insight Series",
        "title": "Medical Stop Loss Captives",
        "short_title": "Medical Stop Loss Captives",
        "subtitle": "Structure, Strategy, and Market Evolution",
        "pages": [
            {
                "label": "01 | Executive Summary",
                "title": "Executive Summary",
                "lede": "",
                "scale": 0.92,
                "left": [
                    paragraphs(
                        "Medical stop loss captives are no longer niche they are becoming the preferred strategy for sophisticated employers. Employers are demanding control, participation, and alignment not just protection.",
                        "Captives deliver all three.",
                        "This paper outlines how captives work, why they outperform traditional models, and where the market is going.",
                    ),
                    text(
                        "The Limitations of Traditional Stop Loss",
                        "Traditional stop loss is protective not strategic. Carriers price conservatively, retain profits, and limit transparency. Employers take operational responsibility without financial upside.",
                    ),
                    quote("This misalignment creates inefficiency."),
                    text(
                        "What Is a Medical Stop Loss Captive",
                        "A captive is a risk-sharing structure where employers:",
                    ),
                    list_items(
                        "Retain a layer of risk",
                        "Pool exposure",
                        "Access reinsurance",
                        "Participate in underwriting outcomes",
                    ),
                    paragraphs("Employers move from premium payers to risk participants."),
                    heading("Core Structure"),
                    list_items(
                        "Layer 1: Employer Retention (e.g., $0-$100K)",
                        "Layer 2: Captive Layer (e.g., $100K-$300K pooled)",
                        "Layer 3: Carrier/Reinsurance (catastrophic protection)",
                    ),
                    paragraphs("Surplus remains within the captive and returns to the participants."),
                ],
                "right": [],
            },
            {
                "label": "02 | Performance and Market Evolution",
                "title": "Why Captives Outperform",
                "lede": "",
                "scale": 0.92,
                "left": [
                    list_items(
                        "Risk pooling reduces volatility",
                        "Employers participate in underwriting profit",
                        "Reduced carrier margin",
                        "Aligned incentives across stakeholders",
                    ),
                    text(
                        "Underwriting Evolution",
                        "Captive underwriting is forward-looking and dynamic. It incorporates population health, engagement, and cost containment. Underwriting is no longer just predicting risk it is shaping it.",
                    ),
                    text("Cost Containment Multiplier", "Cost containment amplifies captive performance."),
                    quote("Lower claims -> improved loss ratios -> surplus generation -> lower net cost."),
                    paragraphs("This creates compounding financial benefit."),
                    bullet(
                        "Market Trends",
                        "Mid-market adoption accelerating",
                        "MGU platforms expanding",
                        "Clinical integration increasing",
                        "Data-driven underwriting emerging",
                    ),
                    text(
                        "Zenith Perspective",
                        "Most captives are structured correctly but a few are optimized. Zenith focuses on underwriting precision, clinical integration, and execution. Captives are not a product; they are a platform.",
                    ),
                    text(
                        "Conclusion",
                        "Captives represent a shift from passive buying to active risk management. Employers gain control, reduce costs, and align incentives. Those who adopt early will outperform.",
                    ),
                ],
                "right": [],
            },
        ],
    },
    {
        "filename": "cost-containment-stop-loss.pdf",
        "series": "Zenith Insight Series",
        "title": "Cost Containment and Stop-Loss Pricing",
        "short_title": "Cost Containment and Stop-Loss Pricing",
        "subtitle": "How operational decisions influence claim severity, volatility, underwriting confidence, and renewal strategy.",
        "pages": [
            {
                "label": "01 | The underwriting signal",
                "title": "Claims history is important, but it does not explain the entire risk profile",
                "lede": "Access, navigation, vendor performance, and intervention can change how risk develops during the plan year.",
                "left": [
                    text("The backward-looking model", "Traditional underwriting begins with prior claims, demographics, and trend. Those inputs matter, but they can miss the employer's ability to influence future utilization and severity."),
                    bullet("Questions history alone cannot answer", "Which care pathways are actively managed?", "How quickly are high-risk cases identified?", "Are vendors accountable for measurable actions?"),
                ],
                "right": [
                    text("The operating view", "A more complete assessment connects experience data with the plan's clinical and operational capabilities. The objective is not to assume savings; it is to understand whether the employer can execute a credible strategy."),
                    quote("Better underwriting confidence begins with better evidence of operating discipline."),
                ],
            },
            {
                "label": "02 | Practical levers",
                "title": "Cost containment works through coordinated decisions, not isolated programs",
                "lede": "The most relevant levers depend on the population, plan design, provider access, and existing vendor environment.",
                "left": [
                    bullet("Clinical and access levers", "Care navigation", "Centers of excellence", "Direct primary care", "High-cost claimant intervention"),
                ],
                "right": [
                    bullet("Financial and vendor levers", "Pharmacy contract review", "Network and reference-pricing strategy", "Transparent fee analysis", "Performance reporting and governance"),
                    quote("A program should be evaluated on evidence, member experience, and repeatable execution - not a headline savings estimate."),
                ],
            },
            {
                "label": "03 | Renewal strategy",
                "title": "Translate operational performance into an underwriting narrative",
                "lede": "A renewal submission is stronger when it explains what happened, what changed, and how future risk will be managed.",
                "left": [
                    step(("Measure", "Document claims, interventions, recoveries, and vendor actions."), ("Explain", "Connect the results to specific clinical or operational decisions."), ("Validate", "Separate repeatable improvements from one-time variance.")),
                ],
                "right": [
                    step(("Model", "Test how the updated risk profile affects retention and protection options."), ("Present", "Give underwriters a clear, evidence-based account of the plan's operating discipline.")),
                    quote("Zenith integrates underwriting and strategy so renewal decisions are grounded in both risk and execution."),
                ],
            },
        ],
    },
    {
        "filename": "2025-risk-trend-report.pdf",
        "series": "Zenith Risk Trend Report",
        "title": "2025 Healthcare Risk Trends",
        "short_title": "2025 Healthcare Risk Trends",
        "subtitle": "Five planning themes for employers and advisors navigating high-cost claims, specialty therapies, volatility, and renewal pressure.",
        "pages": [
            {
                "label": "01 | Executive view",
                "title": "The central 2025 theme is concentration of risk",
                "lede": "A small number of severe or complex claims can shape an entire plan year, making early visibility and coordinated response increasingly important.",
                "left": [
                    bullet("Five planning themes", "High-cost claim concentration", "Specialty pharmacy and advanced therapies", "Greater need for clinical coordination", "Volatility-sensitive stop-loss strategy", "Demand for transparent renewal logic"),
                ],
                "right": [
                    text("How to use this report", "These themes are a strategic planning framework, not an actuarial forecast. Employers should evaluate them against their own population, claims, contracts, and risk tolerance."),
                    quote("The priority is not predicting every severe claim. It is building a system that responds intelligently when risk emerges."),
                ],
            },
            {
                "label": "02 | Severity and pharmacy",
                "title": "Claim severity and specialty therapies require contract-level attention",
                "lede": "The financial impact of a complex case depends on clinical pathways, pharmacy terms, provider access, and stop-loss contract language.",
                "left": [
                    bullet("Review high-cost claim readiness", "Notification and case-management workflows", "Centers of excellence and specialty networks", "Specific-deductible and laser provisions", "Run-out and reimbursement procedures"),
                ],
                "right": [
                    bullet("Review pharmacy readiness", "Contract definitions and rebate treatment", "Specialty-drug sourcing", "Utilization and clinical review", "Gene and cell therapy provisions"),
                    quote("The most expensive claim is also an operational event. Clinical and financial teams need one response plan."),
                ],
            },
            {
                "label": "03 | Volatility and renewal",
                "title": "Renewal strategy must separate signal from short-term noise",
                "lede": "One difficult year can produce reactive decisions. A multi-year lens helps distinguish structural risk from temporary variance.",
                "left": [
                    bullet("Questions for the experience review", "Which claims are ongoing?", "Which costs were one-time?", "What interventions changed future exposure?", "How did vendors perform?"),
                ],
                "right": [
                    bullet("Questions for the financing review", "Is the specific deductible still appropriate?", "Would a pooled or captive layer improve alignment?", "How should collateral and cash flow be modeled?", "What evidence supports the renewal narrative?"),
                ],
            },
            {
                "label": "04 | Action agenda",
                "title": "Turn the trends into a focused planning agenda",
                "lede": "A practical 2025 response connects information, clinical action, contract review, and financing decisions.",
                "left": [
                    step(("Improve visibility", "Create a timely view of high-cost claims, pharmacy exposure, and vendor actions."), ("Clarify ownership", "Assign decision-makers for clinical escalation, contracting, and reimbursement."), ("Review contracts", "Test stop-loss, pharmacy, TPA, and network terms against actual operating needs.")),
                ],
                "right": [
                    step(("Model alternatives", "Compare retention, pooling, and captive structures using realistic scenarios."), ("Build the renewal story", "Present the plan's risks, actions, and forward strategy with evidence.")),
                    quote("Use the report as a conversation starter with Zenith's underwriting and strategy team."),
                ],
            },
        ],
    },
    {
        "filename": "submission-checklist.pdf",
        "series": "Zenith Broker Reference",
        "title": "Stop-Loss Submission Checklist",
        "short_title": "Stop-Loss Submission Checklist",
        "subtitle": "A concise preparation guide for a clean, complete Zenith underwriting submission.",
        "pages": [
            {
                "label": "01 | Required information",
                "title": "Complete data helps the underwriting team move faster",
                "lede": "Use this checklist before submitting a group. The specific request may vary by case and funding structure.",
                "left": [
                    checks("Current census in Excel format", "Current pricing and renewal information", "Large-claim reports, including cases over 50 percent of the specific deductible", "Aggregate claim reports"),
                ],
                "right": [
                    checks("Current plan designs and Summary of Benefits and Coverage", "Enrollment and funding details", "Requested effective date and proposal structure", "Broker and employer contact information"),
                    quote("Do not include passwords in email. Use the approved secure delivery method for protected health information."),
                ],
            },
            {
                "label": "02 | Submission quality",
                "title": "A clean submission explains the group, not just the files",
                "lede": "Add a short narrative so the underwriting team understands the employer's goals, current issues, and timing.",
                "left": [
                    bullet("Helpful context", "Current funding arrangement", "Reason for marketing", "Known large or ongoing claims", "Clinical or cost-containment initiatives", "Captive or level-funded interest"),
                ],
                "right": [
                    checks("Confirm dates and file periods are labeled", "Remove duplicate or obsolete versions", "Check census totals against enrollment", "Name files clearly", "Identify any information still pending"),
                    quote("Download the Zenith RFP template from the For Brokers page at zenithriskstrategies.com."),
                ],
            },
        ],
    },
]


def main() -> None:
    register_fonts()
    images = prepare_images()
    PUBLIC.mkdir(parents=True, exist_ok=True)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    requested = set(sys.argv[1:])
    available = {spec["filename"] for spec in DOCUMENTS}
    unknown = requested - available
    if unknown:
        raise ValueError(f"Unknown resource PDF(s): {', '.join(sorted(unknown))}")
    selected = [spec for spec in DOCUMENTS if not requested or spec["filename"] in requested]
    for spec in selected:
        public_path = PUBLIC / spec["filename"]
        output_path = OUTPUT / spec["filename"]
        make_pdf(images, spec, public_path)
        output_path.write_bytes(public_path.read_bytes())
        print(f"built {spec['filename']} ({public_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
