import React from "react";

function Header({ cartCount, onOpenCart }) {
  return (
    <nav className="navbar">
      {/* Brand bisa dipencet */}
      <button
        className="brand futuristic"
        onClick={() => window.location.reload()}
      >
        ⚡ <span>Axeir</span>
      </button>

      <button className="cart-btn" onClick={onOpenCart}>
        🛒 <span className="badge">{cartCount}</span>
      </button>
    </nav>
  );
}

export default Header;
