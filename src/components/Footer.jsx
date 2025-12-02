import React from "react";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-logo-wrap">
            <div className="logo-box footer-logo-box">
              <span className="logo-symbol">Logo</span>
            </div>
            <span className="logo-text-main footer-logo-text-main">
              yanolja
            </span>
            <span className="logo-text-sub footer-logo-text-sub">
              Research
            </span>
          </div>
          <div className="footer-family">
            <button type="button" className="family-button">
              Family site
              <span className="family-plus">+</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-privacy">개인정보 처리방침</p>
          <p className="footer-info">
            (주)야놀자리서치 · 대표이사 박성식 · 사업자등록번호 308-86-02788
          </p>
          <p className="footer-info">
            서울특별시 강남구 테헤란로 108길 42 MDM타워 4층
          </p>
          <p className="footer-info">
            E-mail. yanoljaresearch@yanolja.com
          </p>
          <p className="footer-copy">
            © YANOLJA RESEARCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
