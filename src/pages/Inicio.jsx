import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import { videos } from "../data/videos.js";
export default function Inicio() {
  return (
    <div className="scrapbook home-page">
      <section className="cover-board">
        <div className="cover-top">
          <span>PORTFOLIO PERSONAL · TUCUMÁN, ARGENTINA</span>
          <span>EDICIÓN — 2026</span>
        </div>
        <div className="cover-title">
          <span className="tiny-label">EDITOR DE VIDEO</span>
          <h1>
            JOAQUÍN
            <br />
            <em>CÓRDOBA</em>
          </h1>
          <p>
            Momentos reales,
            <br />
            editados para volver a sentirlos.
          </p>
        </div>
        <div className="cover-paper note-card">
          <span className="tape" />
          <small>HOLA, SOY</small>
          <strong>Joaquín</strong>
          <p>
            Editor de video.
            <br />
            Cuento historias con ritmo,
            <br />
            emoción y detalle.
          </p>
          <Link to="/servicios">
            CONOCEME <b>↗</b>
          </Link>
        </div>
        {videos[4] && (
          <div className="cover-feature">
            <VideoCard video={videos[4]} index={0} compact />
            <span className="cutout-label">
              UNA HISTORIA
              <br />
              EN MOVIMIENTO
            </span>
          </div>
        )}
        <span className="cover-deco deco-camera">◉</span>
        <span className="cover-deco deco-star">✳</span>
        <span className="cover-deco deco-clap">
          ▰<br />▱
        </span>
        <div className="cover-bottom">
          <span>DESLIZÁ / EXPLORÁ</span>
          <Link to="/trabajos">
            VER TODOS LOS VIDEOS <b>↓</b>
          </Link>
        </div>
      </section>
      <section className="selected-board">
        <div className="section-heading">
          <span>01 — TRABAJOS SELECCIONADOS</span>
          <h2>
            Una pequeña
            <br />
            <em>muestra.</em>
          </h2>
          <Link to="/trabajos">IR AL PORTFOLIO ↗</Link>
        </div>
        <div className="selected-videos">
          {videos.slice(1, 4).map((video, i) => (
            <VideoCard key={video.number} video={video} index={i} />
          ))}
        </div>
      </section>
      <section className="home-outro">
        <div className="paper-strip">
          <span>¿TENÉS UN VIDEO?</span>
          <strong>Hagamos que dure para siempre.</strong>
          <Link to="/contacto">HABLEMOS ↗</Link>
        </div>
      </section>
    </div>
  );
}
