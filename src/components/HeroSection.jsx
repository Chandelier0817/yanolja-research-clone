import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const heroSlides = [
  {
    id: 1,
    category: "인사이트",
    title: "Vol.33 K-의료관광의 현황과 질적 성장 전략",
    img: "/images/insight/vol33.png",
  },
  {
    id: 2,
    category: "인사이트",
    title:
      "Vol.32 해외여행의 동기와 국내여행 재도약 방안: 한국인의 여행 심리를 중심으로",
    img: "/images/insight/vol32.png",
  },
  {
    id: 3,
    category: "인사이트",
    title: "Vol.31 프로야구를 활용한 지역관광 활성화 방안",
    img: "/images/insight/vol31.jpg",
  },
  {
    id: 4,
    category: "인사이트",
    title: "Vol.30 야놀자 매력도 지수: 지표의 개발과 활용, 그리고 의의",
    img: "/images/insight/vol30.jpg",
  },
  {
    id: 5,
    category: "인사이트",
    title: "Vol.29 인구구조와 경제기조로 본 골프산업의 미래",
    img: "/images/insight/vol29.png",
  },
  {
    id: 6,
    category: "인사이트",
    title:
      "Vol.28 동북아 항공 네트워크 분석을 통해 본 지역공항 활성화: 외항사 유치의 가능성과 과제",
    img: "/images/insight/vol28.jpg",
  },
];

const rightButtons = [
  "야놀자 매력도 지수",
  "야놀자 브랜드자산 지수",
  "데이터랩",
];

function HeroSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  
 return (
    <section className="section hero-section">
      <div className="container hero-layout">
        {/* 메인 슬라이드 */}
        <div className="hero-main">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={
              isPlaying
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false
            }
            loop
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="hero-card"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="hero-card-overlay" />

                  <div className="hero-card-content">
                    <p className="hero-category">· {slide.category}</p>
                    <h2 className="hero-title">{slide.title}</h2>

                    <button type="button" className="hero-detail-button">
                      자세히보기
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

<div className="hero-controls">
  {/* 왼쪽 화살표 */}
  <button
    className="hero-arrow left"
    onClick={() => swiperRef.current.slidePrev()}
  >
    <img src="/images/icon/arrow_left.svg" alt="이전" />
  </button>

  {/* 점 pagination */}
  <div className="hero-dots">
    {heroSlides.map((_, idx) => (
      <span
        key={idx}
        className={`dot ${idx === activeIndex ? "active" : ""}`}
        onClick={() => swiperRef.current.slideTo(idx)}
      />
    ))}
  </div>

  {/* ▶ 재생 버튼 */}
  <button
    className="hero-play"
    onClick={() => swiperRef.current.autoplay.start()}
  >
    <img src="/images/icon/play.svg" alt="재생" />
  </button>

  {/* ⏸ 일시정지 버튼 */}
  <button
    className="hero-pause"
    onClick={() => swiperRef.current.autoplay.stop()}
  >
    <img src="/images/icon/pause.svg" alt="일시정지" />
  </button>

  {/* 오른쪽 화살표 */}
  <button
    className="hero-arrow right"
    onClick={() => swiperRef.current.slideNext()}
  >
    <img src="/images/icon/arrow_right.svg" alt="다음" />
  </button>
</div>
</div>

<aside className="hero-side">

  {/* 1. 야놀자 매력도 지수 */}
  <button type="button" className="hero-side-button">
    <span className="hero-side-label">야놀자 매력도 지수</span>
    <span className="hero-side-sub">바로가기 &gt;</span>
  </button>

  {/* 2. 브랜드자산 지수 */}
  <button type="button" className="hero-side-button">
    <span className="hero-side-label">야놀자 브랜드자산 지수</span>
    <span className="hero-side-sub">바로가기 &gt;</span>
  </button>

  {/* 3. 데이터랩 */}
  <button type="button" className="hero-side-button">
    <span className="hero-side-label">데이터랩</span>
    <span className="hero-side-sub">바로가기 &gt;</span>
  </button>

</aside>

      </div>
    </section>
  );
}

export default HeroSection;
