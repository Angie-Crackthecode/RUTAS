import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <section>
          <h3>Datos de la empresa</h3>
          <p>Nombre: Mi Empresa</p>
          <p>Dirección: Calle Las Violetas 123</p>
          <p>Teléfono: (+51) 994 567 758</p>
          <p>Email: contacto@miempresa.com</p>
        </section>

        <section>
          <h4>Ubicación</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Jr.+Santa+Clorinda+276,+Perú&output=embed"
              width="100%"
              height="200"
              style={{
                border: 0,
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la empresa"
            ></iframe>
          </div>

          <article>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </article>
        </section>
      </div>
    </footer>
  );
}
