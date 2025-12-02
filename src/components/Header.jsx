import React, { useState } from "react";

const navItems = [
  {
    label: "Research",
    key: "research"
  },
  {
    label: "Datalab",
    key: "datalab"
  },
  {
    label: "Indexes",
    key: "indexes"
  },
  {
    label: "About",
    key: "about"
  }
];

const megaMenuColumns = [
  {
    heading: "Research",
    items: ["인사이트", "브리프", "동향보고서", "연구보고서", "구독신청"]
  },
  {
    heading: "Datalab",
    items: ["국내 숙박업 실적 지표", "관광지표 대시보드", "데이터 다운로드"]
  },
  {
    heading: "Indexes",
    items: ["야놀자 매력도 지수", "야놀자 브랜드자산 지수"]
  },
  {
    heading: "About",
    items: ["연구원 소개", "인사말", "연구원 소식", "미디어", "공지사항"]
  }
];

function Header() {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("KR");

  const handleLangSelect = (lang) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        {/* 로고 영역 - 실제 이미지 대신 박스만 */}
        <div className="header-left">
            <img src="/images/logo.svg" alt="Yanolja Research" />
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav
          className="nav-desktop"
          onMouseEnter={() => setIsMegaOpen(true)}
          onMouseLeave={() => setIsMegaOpen(false)}
        >
          <ul className="nav-desktop-list">
            {navItems.map((item) => (
              <li key={item.key} className="nav-desktop-item">
                <button type="button" className="nav-desktop-link">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {isMegaOpen && (
            <div className="mega-menu">
              <div className="mega-menu-inner">
                {megaMenuColumns.map((col) => (
                  <div key={col.heading} className="mega-menu-column">
                    <p className="mega-menu-heading">{col.heading}</p>
                    <ul className="mega-menu-list">
                      {col.items.map((item) => (
                        <li key={item} className="mega-menu-item">
                          <button type="button">{item}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* 언어 선택 & 햄버거 */}
        <div className="header-right">
          <div className="lang-selector">
            <button
              type="button"
              className="lang-button"
              onClick={() => setIsLangOpen((v) => !v)}
            >
              {currentLang}
              <span className="lang-arrow">▾</span>
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                <button
                  type="button"
                  className={
                    currentLang === "KR"
                      ? "lang-option lang-option--active"
                      : "lang-option"
                  }
                  onClick={() => handleLangSelect("KR")}
                >
                  KR
                </button>
                <button
                  type="button"
                  className={
                    currentLang === "EN"
                      ? "lang-option lang-option--active"
                      : "lang-option"
                  }
                  onClick={() => handleLangSelect("EN")}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* 모바일 전체 메뉴 */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
            <ul className="mobile-menu-list">
              <li>HOME</li>
              <li>RESEARCH</li>
              <li>DATALAB</li>
              <li>INDEXES</li>
              <li>ABOUT</li>
              <li className="mobile-menu-lang">
                <button
                  type="button"
                  className="lang-button mobile-lang-button"
                  onClick={() => setIsLangOpen((v) => !v)}
                >
                  {currentLang} <span className="lang-arrow">▾</span>
                </button>
                {isLangOpen && (
                  <div className="lang-dropdown lang-dropdown--mobile">
                    <button
                      type="button"
                      className={
                        currentLang === "KR"
                          ? "lang-option lang-option--active"
                          : "lang-option"
                      }
                      onClick={() => handleLangSelect("KR")}
                    >
                      KR
                    </button>
                    <button
                      type="button"
                      className={
                        currentLang === "EN"
                          ? "lang-option lang-option--active"
                          : "lang-option"
                      }
                      onClick={() => handleLangSelect("EN")}
                    >
                      EN
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
