import "./Footer.css";

function FooterComponent(props) {
  const {
    title,
    titleClass,
    socialMedia,
    socialMediaClass,
    copyright,
    copyrightClass,
  } = props;

  return (
    <footer className="footer">
      <h2 className={titleClass}>{title}</h2>
      <div className={socialMediaClass}>{socialMedia}</div>
      <p className={copyrightClass}>{copyright}</p>
    </footer>
  );
}

export default FooterComponent;
