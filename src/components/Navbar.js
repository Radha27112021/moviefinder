import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://img.freepik.com/free-vector/cinema-concept_1284-12713.jpg?w=826&t=st=1717604973~exp=1717605573~hmac=97b7fea39230e56946cf3d4274911f49a20c97dbe53a6c624226777b7ed6d2fc" alt="FilmFinder Logo" />
        <h2>FilmFinder</h2>
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="#explore" className="nav-link">Explore</a>
        <a href="/Blogs" className="nav-link">Blogs</a>
      </div>
    </nav>
  );
}

export default Navbar;
