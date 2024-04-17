import Logo from "./Logo";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Logo />

        <NavItem />
      </nav>
    </header>
  );
};

export default Header;
