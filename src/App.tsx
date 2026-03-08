import './index.css'
import { Box } from "lucide-react";
function App() {
  return (
    <main className="page">
      <div className="tech-bg" />
      <div className="grid-overlay" />

      <section className="content">
        <header className="hero">
         
    <img
      src="/logo-dualforge.svg"
      alt="Logo Dual Forge 3D"
      className="logo-image"
    />
 

         

         

          <p className="subtitle">
            IMPRESSÃO 3D • MODELAGEM • PROJETOS PERSONALIZADOS
          </p>
        </header>

        <section className="links">
          <a
            className="link-card"
            href="https://instagram.com/dualforge3d"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-left">
              <div className="icon-image-wrap">
  <img
    src="/instagram-dualforge.png"
    alt="Instagram"
    className="icon-image"
  />
</div>
              <div>
                <h2>Instagram</h2>
                <p>@dualforge3d</p>
              </div>
            </div>
            <span className="arrow">›</span>
          </a>

          <a
            className="link-card"
            href="https://wa.me/555496892765"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-left">
            <div className="icon-image-wrap">
  <img
    src="/whatssap-dualforge.png"
    alt="WhatsApp"
    className="icon-image"
  />
</div>
              <div>
                <div>
  <h2>Orçamentos e pedidos</h2>
  <p>+55 54 9689-2765</p>
</div>
              </div>
            </div>
            <span className="arrow">›</span>
          </a>

          <a
            className="link-card"
            href="https://wa.me/555496892765?text=Olá%20quero%20um%20projeto%203D"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link-left">
              <div className="icon-box budget">
  <Box size={26} />
</div>
              <div>
                <h2>Projetos 3D personalizados</h2>
                <p>Peça o seu agora</p>
              </div>
            </div>
            <span className="arrow">›</span>
          </a>
        </section>

        <footer className="footer">
          <strong>DUAL FORGE <span>3D</span></strong>
          <small>QUALIDADE • PRECISÃO • CRIATIVIDADE</small>
        </footer>
      </section>
    </main>
  )
}

export default App