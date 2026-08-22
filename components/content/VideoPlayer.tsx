import React from 'react';
import { imageUrl } from '../../lib/contentApi';
import type { ContentAsset } from '../../types/content';

const youtubeId = (url: string) => /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{6,})/.exec(url)?.[1];
const vimeoId = (url: string) => /vimeo\.com\/(?:video\/)?(\d+)/.exec(url)?.[1];

const VideoPlayer: React.FC<{ video?: ContentAsset; poster?: ContentAsset; externalUrl?: string; title: string }> = ({ video, poster, externalUrl, title }) => {
  if (video?.url) return <video controls playsInline preload="metadata" poster={imageUrl(poster?.url, 1280, 720)} className="w-full aspect-video bg-black rounded-2xl shadow-xl"><source src={video.url} type={video.mimeType || 'video/mp4'} />Your browser does not support embedded video.</video>;
  if (externalUrl) {
    const yt = youtubeId(externalUrl);
    if (yt) return <iframe loading="lazy" className="w-full aspect-video rounded-2xl shadow-xl" src={`https://www.youtube-nocookie.com/embed/${yt}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />;
    const vm = vimeoId(externalUrl);
    if (vm) return <iframe loading="lazy" className="w-full aspect-video rounded-2xl shadow-xl" src={`https://player.vimeo.com/video/${vm}`} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />;
    return <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-zenith-blue text-white rounded font-bold">Watch video</a>;
  }
  return null;
};

export default VideoPlayer;

