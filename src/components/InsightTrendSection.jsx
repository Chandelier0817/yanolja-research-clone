import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const insightBrief = [
  {
    id: 1,
    type: "브리프",
    title: "Vol.10 2025년 1~9월 인바운드·아웃바운드 관광 실적 분석",
    date: "2025.11.24",
    img: "/images/brief/vol10.png"
  },
  {
    id: 2,
    type: "인사이트",
    title: "Vol.33 K-의료관광의 현황과 질적 성장 전략",
    date: "2025.11.12",
    img: "/images/insight/vol33.png"
  },
  {
    id: 3,
    type: "인사이트",
    title:
      "Vol.32 해외여행의 동기와 국내여행 재도약 방안: 한국인의 여행 심리를 중심으로",
    date: "2025.10.22",
    img: "/images/insight/vol32.png"
  },
  {
    id: 4,
    type: "인사이트",
    title: "Vol.31 프로야구를 활용한 지역관광 활성화 방안",
    date: "2025.09.26",
    img: "/images/insight/vol31.jpg"
  }
];

const trendReports = [
  {
    id: 1,
    title: "2025년 3분기 국내 숙박업 동향보고서",
    date: "2025.10.29",
    img: "/images/trends/img1.png"
  },
  {
    id: 2,
    title: "2025년 2분기 국내 숙박업 동향보고서",
    date: "2025.07.31",
    img: "/images/trends/img1.png"
  },
  {
    id: 3,
    title: "2025년 1분기 국내 숙박업 동향보고서",
    date: "2025.04.30",
    img: "/images/trends/img1.png"
  }
];

function InsightTrendSection() {
  return (
    <section className="section insight-section">

      {/* 제목 */}
      <div className="container insight-header-row">
        <div className="section-title-group">
          <h2 className="section-title-main">인사이트 / 브리프</h2>
          <button className="section-more-button">&gt;</button>
        </div>
        <div className="section-title-group">
          <h2 className="section-title-main">동향보고서</h2>
          <button className="section-more-button">&gt;</button>
        </div>
      </div>

      <div className="container insight-trend-grid">
        {/* 인사이트 / 브리프 */}
        <div className="insight-slider-wrap">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={28}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {insightBrief.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="insight-card">
                  <img src={item.img} className="insight-card-img" />
                  <div className="insight-card-body">
                    <p className="card-type">{item.type}</p>
                    <h3 className="insight-card-title">{item.title}</h3>
                    <p className="card-date">{item.date}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 동향보고서 */}
        <div className="trend-slider-wrap">
          <Swiper
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={28}
            slidesPerView={1.3}
          >
            {trendReports.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="trend-card">
                  <img src={item.img} className="trend-card-img" />
                  <div className="trend-card-body">
                    <h3 className="trend-title">{item.title}</h3>
                    <p className="card-date">{item.date}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default InsightTrendSection;
