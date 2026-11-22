import { useEffect, useRef, useState } from 'react';

export default function VideoCard({ video, index = 0, compact = false }) {
  const player = useRef(null);
  const [orientation, setOrientation] = useState(index % 2 ? 'landscape' : 'portrait');
  const [ratio, setRatio] = useState(null);
  useEffect(() => {
    const element = player.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {});
      else element.pause();
    }, { threshold: .15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const detectFormat = event => {
    const { videoWidth, videoHeight } = event.currentTarget;
    if (!videoWidth || !videoHeight) return;
    const shape = videoWidth / videoHeight;
    setRatio(`${videoWidth} / ${videoHeight}`);
    setOrientation(shape > 1.2 ? 'landscape' : shape < .85 ? 'portrait' : 'square');
  };
  return <article className={`video-card ${orientation} ${compact ? 'compact' : ''}`}>
    <div className="device-shell"><div className="device-camera"/><video ref={player} src={video.src} autoPlay muted loop playsInline preload="metadata" onLoadedMetadata={detectFormat} style={ratio ? { '--video-ratio': ratio } : undefined} aria-label={`${video.title} de Joaquín Córdoba`}/></div>
    <div className="video-caption"><span>{video.number} / SELECCIÓN</span><b>{video.title}</b><small>Edición de video · Joaquín Córdoba</small></div>
    <span className="video-sticker" aria-hidden="true">✳</span>
  </article>;
}
