"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import "./CardNav.css";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  brand = "个人作品集",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#fff",
  menuColor,
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
  buttonLabel = "联系我",
  buttonHref = "#contact",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);

  const calculateHeight = () => {
    const nav = navRef.current;
    if (!nav) return 280;
    if (window.matchMedia("(max-width: 768px)").matches) {
      const content = nav.querySelector(".card-nav-content");
      if (content) {
        const previous = {
          visibility: content.style.visibility,
          pointerEvents: content.style.pointerEvents,
          position: content.style.position,
          height: content.style.height,
        };
        content.style.visibility = "visible";
        content.style.pointerEvents = "auto";
        content.style.position = "static";
        content.style.height = "auto";
        const height = 60 + content.scrollHeight + 16;
        Object.assign(content.style, previous);
        return height;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const nav = navRef.current;
    if (!nav) return null;
    gsap.set(nav, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    const timeline = gsap.timeline({ paused: true });
    timeline.to(nav, { height: calculateHeight, duration: 0.4, ease });
    timeline.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, "-=0.1");
    return timeline;
  };

  useLayoutEffect(() => {
    const timeline = createTimeline();
    timelineRef.current = timeline;
    return () => {
      timeline?.kill();
      timelineRef.current = null;
    };
    // Card data changes require the GSAP timeline to be rebuilt.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!timelineRef.current) return;
      timelineRef.current.kill();
      const timeline = createTimeline();
      if (timeline && isExpanded) timeline.progress(1);
      timelineRef.current = timeline;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      timeline.play(0);
    } else {
      setIsHamburgerOpen(false);
      timeline.eventCallback("onReverseComplete", () => setIsExpanded(false));
      timeline.reverse();
    }
  };

  const closeMenu = () => {
    if (isExpanded) toggleMenu();
  };

  const setCardRef = (index) => (element) => {
    if (element) cardsRef.current[index] = element;
  };

  return (
    <div className={`card-nav-container ${className}`.trim()}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? "open" : ""}`} style={{ backgroundColor: baseColor }} aria-label="主导航">
        <div className="card-nav-top">
          <button
            type="button"
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={isExpanded ? "关闭菜单" : "打开菜单"}
            aria-expanded={isExpanded}
            style={{ color: menuColor || "#000" }}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          <a className="logo-container" href="#home" onClick={closeMenu} aria-label="返回首页">
            {logo ? <Image src={logo} alt={logoAlt} className="card-nav-logo" width={120} height={28} /> : <span className="card-nav-brand">{brand}</span>}
          </a>

          <div className="card-nav-actions">
            <button
              type="button"
              className="card-nav-theme-button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="切换亮暗主题"
            >
              <Sun size={17} className="hidden dark:block" />
              <Moon size={17} className="dark:hidden" />
            </button>
            <a
              className="card-nav-cta-button"
              href={buttonHref}
              onClick={closeMenu}
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              {buttonLabel}<ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="nav-card"
              ref={setCardRef(index)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((link, linkIndex) => (
                  <a key={`${link.label}-${linkIndex}`} className="nav-card-link" href={link.href} aria-label={link.ariaLabel} onClick={closeMenu}>
                    <ArrowUpRight className="nav-card-link-icon" size={15} aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
