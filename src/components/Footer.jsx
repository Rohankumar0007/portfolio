import React from "react";

function Footer() {
  const borderColor =
    typeof Footer.borderColor === "string" ? Footer.borderColor : "gray";

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem 0",
        background: "none",
        borderTop: `1px solid ${borderColor}`,
        color: "#fff",
        fontSize: "14px",
        position: "relative",
        gap: "15px",
      }}>
      <div style={{ marginBottom: "0.5rem" }}>
        <a
          href="https://www.linkedin.com/in/rohan-kumar-2b4b5230a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
          aria-label="LinkedIn">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            style={{
              width: 20,
              height: 20,
              marginRight: 6,
              verticalAlign: "middle",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png";
            }}
          />
          LinkedIn
        </a>
        <a
          href="https://github.com/Rohankumar0007"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
          aria-label="GitHub">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            style={{
              width: 20,
              height: 20,
              marginRight: 6,
              verticalAlign: "middle",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
            }}
          />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/rohan_yadav__01_/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            margin: "0 10px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
          aria-label="Instagram">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            style={{
              width: 20,
              height: 20,
              marginRight: 6,
              verticalAlign: "middle",
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";
            }}
          />
          Instagram
        </a>
      </div>
      © {new Date().getFullYear()} Rohan Kumar. All rights reserved.
    </footer>
  );
}

export default Footer;
