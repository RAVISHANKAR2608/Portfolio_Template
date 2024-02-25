import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  //   useEffect(() => {
  //     // Smooth scroll
  //     $(".navbar .nav-link").on("click", function (event) {
  //       if (this.hash !== "") {
  //         event.preventDefault();
  //         var hash = this.hash;
  //         $("html, body").animate(
  //           {
  //             scrollTop: $(hash).offset().top,
  //           },
  //           700,
  //           function () {
  //             window.location.hash = hash;
  //           }
  //         );
  //       }
  //     });

  //     // Navbar toggle
  //     $("#nav-toggle").click(function () {
  //       $(this).toggleClass("is-active");
  //       $("ul.nav").toggleClass("show");
  //     });
  //   }, []);

  useEffect(() => {
    // Smooth scroll function
    const smoothScroll = (targetOffset) => {
      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        700
      );
    };

    // Click event for anchor links
    $(".navbar .nav-link").on("click", function (event) {
      if (this.hash !== "") {
        const hash = this.hash;
        const targetOffset = $(hash).offset().top;

        // Smooth scroll to the target element
        smoothScroll(targetOffset);

        // Prevent default behavior of anchor links
        event.preventDefault();
      }
    });
  }, []);

  const handleOutsideClick = (event) => {
    const navToggle = document.getElementById("nav-toggle");
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="home"
      ref={navRef}
      className={`custom-navbar ${isOpen ? "open" : ""}`}
      data-spy="affix"
      data-offset-top="20"
    >
      <div className="container">
        <a className="logo" href="#">
          Meyawo
        </a>
        <ul className={`nav ${isOpen ? "show" : ""}`}>
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="item">
            <a className="link" href="#testmonial">
              Testimonial
            </a>
          </li>
          <li className="item">
            <a className="link" href="#blog">
              Blog
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
          <li className="item ml-md-3">
            <a href="components.html" className="btn btn-primary">
              Components
            </a>
          </li>
        </ul>
        <a
          href="#"
          id="nav-toggle"
          className={`hamburger hamburger--elastic ${
            isOpen ? "is-active" : ""
          }`}
          onClick={toggleMenu}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
