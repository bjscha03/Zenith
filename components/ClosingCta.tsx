import React from 'react';
import { Link } from 'react-router-dom';

type ClosingCtaAction = {
  label: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  external?: boolean;
};

type ClosingCtaProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary: ClosingCtaAction;
  secondary?: ClosingCtaAction;
};

const Action: React.FC<{ action: ClosingCtaAction; secondary?: boolean }> = ({ action, secondary = false }) => {
  const className = secondary
    ? 'closing-cta-secondary group'
    : 'closing-cta-primary group';
  const content = (
    <>
      <span>{action.label}</span>
      <svg aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </>
  );

  if (action.to) return <Link to={action.to} className={className}>{content}</Link>;
  if (action.href) return <a href={action.href} target={action.external ? '_blank' : undefined} rel={action.external ? 'noopener noreferrer' : undefined} className={className}>{content}</a>;
  return <button type="button" onClick={action.onClick} className={className}>{content}</button>;
};

const ClosingCta: React.FC<ClosingCtaProps> = ({ id, eyebrow = 'Next step', title, description, primary, secondary }) => (
  <section id={id} className="closing-cta">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="py-14 md:py-16 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-12 items-center">
        <div className="max-w-3xl">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.32em] mb-3 block">{eyebrow}</span>
          <h2 className="text-3xl md:text-[2.65rem] leading-[1.08] font-bold text-zenith-navy tracking-tight">{title}</h2>
          {description && <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">{description}</p>}
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:justify-end lg:min-w-[18rem]">
          <Action action={primary} />
          {secondary && <Action action={secondary} secondary />}
        </div>
      </div>
    </div>
  </section>
);

export default ClosingCta;
