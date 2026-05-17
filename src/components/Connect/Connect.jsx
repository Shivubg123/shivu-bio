import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Connect.css';

export const Connect = ({ connections, groomName }) => {
  return (
    <section className="connect-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="tagline">Connect with us through various channels</p>

        <div className="connect-buttons">
          {connections.instagram && (
            <a href={connections.instagram} target="_blank" rel="noopener noreferrer" className="btn instagram-btn">
              <FaInstagram /> Instagram
            </a>
          )}

          {connections.whatsapp && (
            <a href={`https://wa.me/${connections.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn whatsapp-btn">
              <FaWhatsapp /> WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
