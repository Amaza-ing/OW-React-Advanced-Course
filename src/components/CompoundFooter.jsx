import "./Footer.css";

function CompoundFooter({ children, ...props }) {
  return (
    <footer {...props}>
      {children}
    </footer>
  );
}

const Title = ({ children, ...props }) => (
  <h2 {...props}>{children}</h2>
);

const SocialMedia = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

const Copyright = ({ children, ...props }) => (
  <p {...props}>{children}</p>
);

CompoundFooter.Title = Title;
CompoundFooter.SocialMedia = SocialMedia;
CompoundFooter.Copyright = Copyright;

export default CompoundFooter;
