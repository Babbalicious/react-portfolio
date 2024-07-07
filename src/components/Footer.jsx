import "./footer.css";

export const Footer = () => {
  return (
    <footer className="bg-primary-subtle text-dark">
      <div className="container-fluid">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/linkedin.webp"
            alt="Linked In profile"
            className="img-fluid footer-img"
          />
        </a>
        <a
          href="https://github.com/Babbalicious"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/github-icon.png"
            alt="GitHub profile"
            className="img-fluid footer-img"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
        </a>
        <a
          href="https://x.com/Babbalicious1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/x-icon.webp"
            alt="X profile"
            className="img-fluid footer-img"
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
          />
        </a>
        <h3>Thanks for visiting!</h3>
        <br />
      </div>
    </footer>
  );
};
