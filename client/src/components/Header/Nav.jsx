import "../../../css/nav.css";

import { Link } from "react-router";
import { useState } from "react";
import MobileNav from "./mobile-nav/MobileNav";
import DesktopNav from "./desktop-nav/DesktopNav";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            FitZone
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen && <span className="navbar-toggler-icon"></span>}
          </button>

          {isOpen && <MobileNav close={() => setIsOpen(!isOpen)} />}

          {!isOpen && <DesktopNav />}
        </div>
      </nav>
    </>
  );
}
