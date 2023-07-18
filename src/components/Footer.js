import React from "react";
import "./Footer.css";

// Social link component
const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  </li>
);

// Footer link component
const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

// Array of social links
const socialLinks = [
  { href: "https://twitter.com", iconClass: "bi bi-twitter" },
  { href: "https://discord.com", iconClass: "bi bi-discord" },
  { href: "https://www.instagram.com/definfts/", iconClass: "bi bi-instagram" },
  { href: "https://facebook.com", iconClass: "bi bi-facebook" },
  { href: "https://youtube.com", iconClass: "bi bi-youtube" },
];

// Array of footer links
const footerLinks = [
  { href: "/", text: "Blog" },
  { href: "/", text: "Privacy" },
  { href: "/", text: "Terms of use" },
  { href: "/", text: "Sign In" },
  { href: "/", text: "Sign Up" },
];

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="join-us">
            <h1>
              JOIN US VIA
              <br />
              <span>DISCORD</span>
            </h1>
            <p className="subtitle">Invest and manage all your NFTs at one place.</p>
            <div className="cta">
              <a href="https://discord.gg/3Qq9VJ6Z" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>
          </div>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} iconClass={link.iconClass} />
            ))}
          </ul>

          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.href} text={link.text} />
            ))}
          </ul>

          <p className="copy">© 2023 Nerko. All rights reserved.</p>
          <p className="credit">Coded with 💜 by <a href="https://github.com/s-shemmee" target="_blank" rel="noopener noreferrer">@s-shemmee</a></p>
        </div>
      </div>
    </section>
  );
}
