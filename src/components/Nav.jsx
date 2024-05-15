import imgSrc from '../images/logo3.jpg';

const Nav = () => (
  <nav>
    <ul className="nav flex flex-row justify-between ">
    <img src={imgSrc} alt="" role="presentation" width={100}/>
      <li>
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav-link" href="/about">
          About us
        </a>
      </li>
      <li>
        <a className="nav-link" href="/blog">
          Shop
        </a>
      </li>
      <li>
        <a className="nav-link" href="/blog">
          Contact us
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;