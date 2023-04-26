import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="list-link">
        <li><a href="">Default</a></li>
        <li><a href="">Minimal</a></li>
        <li><a href="">Retro</a></li>
      </ul>

      <ul className="list-link">
        <li><a href="">HU</a></li>
        <li><a href="">EN</a></li>
      </ul>
    </div>
  );
};

export default Header;