import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Servicios from './pages/Servicios.jsx';
import Trabajos from './pages/Trabajos.jsx';
import Contacto from './pages/Contacto.jsx';

const phone = '5493814170824';
function Header() {
  return <header className="nav"><Link className="brand" to="/"><span className="brand-mark">JC</span><span>JOAQUÍN CÓRDOBA<small>VIDEO EDITOR</small></span></Link><nav><NavLink to="/" end>Inicio</NavLink><NavLink to="/servicios">Servicios</NavLink><NavLink to="/trabajos">Trabajos</NavLink><NavLink to="/contacto">Contacto</NavLink><a className="nav-cta" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Hablemos <span>↗</span></a></nav></header>;
}
function Footer() {
  return <footer><Link className="brand" to="/"><span className="brand-mark">JC</span><span>JOAQUÍN CÓRDOBA<small>VIDEO EDITOR</small></span></Link><span>HECHO PARA VOLVER A SENTIRLO <i>✳</i></span><Link to="/">VOLVER AL INICIO ↑</Link></footer>;
}
export default function App() {
  return <BrowserRouter><Header/><main className="page"><Routes><Route path="/" element={<Inicio/>}/><Route path="/servicios" element={<Servicios/>}/><Route path="/trabajos" element={<Trabajos/>}/><Route path="/contacto" element={<Contacto/>}/></Routes></main><Footer/><a className="whatsapp-float" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp">◔</a></BrowserRouter>;
}
