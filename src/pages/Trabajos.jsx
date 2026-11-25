import VideoCard from "../components/VideoCard.jsx";
import { videos } from "../data/videos.js";
export default function Trabajos() {
  return (
    <div className="scrapbook work-page">
      <section className="work-cover">
        <div className="section-kicker">PORTFOLIO · EDITOR DE VIDEO</div>
        <h1>
          MIS
          <br />
          <span>TRABAJOS</span>
        </h1>
        <p>
          Cada video tiene su propio ritmo.
          
        </p>
        <div className="paper-corner">
          MONTAJE
          <br />
          SONIDO
          <br />
          COLOR
          <br />✳
        </div>
        <span className="grid-stamp">JC / 2026</span>
      </section>
      <section className="gallery-board">
        <div className="gallery-note">
          <span className="tape" />
          <b>ARCHIVO VISUAL</b>
          <p>
            Una mezcla de momentos, estilos y pequeñas historias. 
          </p>
        </div>
        <div className="video-gallery">
          {videos.map((video, i) => (
            <VideoCard key={video.number} video={video} index={i} />
          ))}
        </div>
        <div className="gallery-end">
          FIN DE LA SELECCIÓN <span>✳</span> ¿TENÉS UN PROYECTO?{" "}
          <a href="/contacto">HABLEMOS ↗</a>
        </div>
      </section>
    </div>
  );
}
