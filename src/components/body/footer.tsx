import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterSection id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          {/* <img src={logo.toString()} alt="Logo" className="footer-logo" /> */}
          {/* <p className="footer-tagline">Your ultimate streaming destination</p> */}
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h4>Browse</h4>
            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">Series</a>
            <a href="#">Collections</a>
          </div>
          <div className="link-column">
            <h4>Help</h4>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Support</a>
          </div>
          <div className="link-column">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 jeachrisostome. All rights reserved.</p>
      </div>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #000;
  border-top: 1px solid #1f2937;
  padding: 48px 24px 24px;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 40px;
  }

  .footer-brand {
    max-width: 280px;

    .footer-logo {
      width: 120px;
      height: auto;
      object-fit: contain;
      margin-bottom: 12px;
    }

    .footer-tagline {
      color: #9ca3af;
      font-size: 14px;
      margin: 0;
      line-height: 1.5;
    }
  }

  .footer-links {
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
  }

  .link-column {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    a {
      color: #9ca3af;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }
  }

  .footer-social {
    display: flex;
    gap: 12px;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #374151;
    color: #9ca3af;
    text-decoration: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      border-color: #dc2626;
      color: #fff;
      background: rgba(220, 38, 38, 0.1);
    }
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 32px auto 0;
    padding-top: 24px;
    
    text-align: center;

    p {
      color: #6b7280;
      font-size: 13px;
      margin: 0;
    }
  }
`;
