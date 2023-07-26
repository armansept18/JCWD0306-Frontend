const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="">Home</a>
        <a href="#band">Band</a>
        <a href="#tour">Tour</a>
        <a href="">Contact</a>
        <a href="">
          More
          <i className="fa fa-caret-down"> </i>
        </a>
      </div>

      <a href="" id="search">
        <i className="fa fa-search"></i>
      </a>
    </nav>
  );
};

export default Navbar;
