import React, { useState } from "react";
import "./App.css";
import { Flame, Activity, Wind, KeyRound, DoorOpen, Network, Phone, Mail, X } from "lucide-react";

function App() {
  const [modal, setModal] = useState(null);
  const servicii = [
    { icon: Flame, title: "Centrala de Incendiu" },
    { icon: Activity, title: "Senzori de securitate" },
    { icon: Wind, title: "Detectori de gaz, fum, CO" },
    { icon: KeyRound, title: "Interfoane si Control Acces" },
    { icon: DoorOpen, title: "Porti Automate si Bariere" },
    { icon: Network, title: "Infrastructura Comunicatii", sub: "centrale telefonice, routere, WiFi, cablare" },
  ];
  return (
    <div className="bpg-app">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-bpg">BPG</span>
            <div className="logo-text">
              <div className="logo-main">Building Protection Group</div>
              <div className="logo-sub">Securitate profesionala</div>
            </div>
          </div>
          <div className="header-dot"></div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1><span className="blue">BPG</span> – Solutii complete<br/><span className="light">de securitate & comunicatii.</span></h1>
          <a href="#contact" className="btn-blue">Solicita oferta</a>
        </div>
      </section>

      <section className="servicii">
        <div className="container">
          <div className="section-head">
            <h2>Ce oferim</h2>
            <p>Instalare completa – echipamente certificate cu aplicatiile producatorilor + toata cablarea.</p>
          </div>
          <div className="grid">
            {servicii.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="card">
                  <div className="card-icon"><Icon size={20}/></div>
                  <h3>{s.title}</h3>
                  {s.sub && <span className="card-sub">{s.sub}</span>}
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-head">
            <h2>Contact</h2>
            
          </div>
          <div className="contact-grid">
            <a href="tel:0726711116" className="contact-card dark">
              <div className="contact-top"><div className="contact-icon dark"><Phone size={20}/></div><span className="badge">Suna acum</span></div>
              <div className="contact-bottom"><div className="label">Telefon</div><div className="value"></div></div>
            </a>
            <a href="mailto:pavelconstantintiti@yahoo.com" className="contact-card light">
              <div className="contact-top"><div className="contact-icon light"><Mail size={20}/></div><span className="badge light">Email</span></div>
              <div className="contact-bottom"><div className="label">Email</div><div className="value small"></div></div>
            </a>
          </div>
          <p className="program">Program L-S 08-20. Ofertare dupa evaluare la locatie. Toata Romania.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo"><span className="blue">BPG</span> Building Protection Group</div>
            <div className="footer-links">
              <button onClick={() => setModal("privacy")}>Confidentialitate</button>
              <button onClick={() => setModal("terms")}>Termeni</button>
              <button onClick={() => setModal("cookies")}>Cookies</button>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 BPG Building Protection Group. Toate drepturile rezervate.</div>
            <div className="footer-gdpr">Site de prezentare, fara preturi afisate. Datele de contact sunt folosite doar pentru ofertare. <a href="mailto:pavelconstantintiti@yahoo.com">email</a></div>
          </div>
        </div>
      </footer>

      {modal && (
        <div className="modal-bg" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>{modal === "privacy" ? "Confidentialitate" : modal === "terms" ? "Termeni" : "Cookies"}</h3>
              <button onClick={() => setModal(null)} className="modal-close"><X size={16}/></button>
            </div>
            <div className="modal-body">
              {modal === "privacy" && <p>Operator: BPG - Nu colectam date prin formular.</p>}
              {modal === "terms" && <p>Site de prezentare. Oferte personalizate dupa evaluarea locatiei.</p>}
              {modal === "cookies" && <p>Folosim doar cookie-uri strict necesare.</p>}
            </div>
            <button onClick={() => setModal(null)} className="btn-dark full">Am inteles</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
