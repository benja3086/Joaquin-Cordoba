import { Link } from "react-router-dom";
export default function Servicios() {
  return (
    <div className="scrapbook inner-page services-page">
      <section className="inner-cover">
        <div className="section-kicker">SERVICIOS — EDICIÓN AUDIOVISUAL</div>
        <h1>
          LE DAMOS
          <br />
          <em>FORMA.</em>
        </h1>
        <p>
          Desde una fiesta de quince hasta un casamiento o un negocio: cada
          situacion merece un video a su medida.
        </p>
        <div className="services-paper">
          <span className="tape" />
          <small>LO QUE PUEDO HACER</small>
          <ul>
            <li>Highlight cinematográfico</li>
            <li>Reels y clips para redes</li>
            <li>Edición con música y color</li>
          </ul>
          <span className="paper-scribble">
            hecho
            <br />
            para volver
          </span>
        </div>
        <div className="steps">
          <article>
            <b>01</b>
            <h2>Me contás</h2>
            <p>Tu idea, tu video y los momentos que querés guardar.</p>
          </article>
          <article>
            <b>02</b>
            <h2>Lo editamos</h2>
            <p>Armo el relato con ritmo, música y atención a cada detalle.</p>
          </article>
          <article>
            <b>03</b>
            <h2>Lo compartís</h2>
            <p>Recibís un video listo para disfrutar y compartir.</p>
          </article>
        </div>
        <Link className="paper-button" to="/contacto">
          CONSULTAR POR MIS VIDEOS ↗
        </Link>
      </section>
    </div>
  );
}
