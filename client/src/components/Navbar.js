// 3. Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Women's World Cup Most Searched players</h1>
      <div className="secondLine">
        <h2>By Google Trends</h2>
      </div>
    </nav>
  );
};

export default Navbar;
