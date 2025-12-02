import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const researchReports = [
  {
    id: 1,
    vol: "Vol.5",
    title: "지역관광의 경제효과와 활성화 방안",
    date: "2025.02.07"
  },
  {
    id: 2,
    vol: "Vol.4",
    title: "특허 데이터를 활용한 관광산업 기술 트렌드 분석",
    date: "2025.01.09"
  },
  {
    id: 3,
    vol: "Vol.3",
    title: "호텔 객실 가격 결정을 위한 Revenue Management 연구",
    date: "2024.04.11"
  },
  {
    id: 4,
    vol: "Vol.2",
    title: "숙박업의 변화와 규제 개선방안",
    date: "2024.02.29"
  },
  {
    id: 5,
    vol: "Vol.1",
    title: "플랫폼 경제와 관광산업",
    date: "2024.01.30"
  }
];

function ResearchReportSection() {
  return (
    <section className="section section-bg-beige research-section">
      <div className="container">
        <div className="section-header-line">
          <h2 className="section-title-main">연구보고서</h2>
          <button type="button" className="section-more-button">
            &gt;
          </button>
        </div>

        <div className="research-slider-wrap">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={32}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >
            {researchReports.map((item) => (
              <SwiperSlide key={item.id}>
                <article className="research-card">
                  <div className="research-cover-placeholder">
                    {/* 실제 커버 이미지 대신 비워둠 */}
                    COVER
                  </div>
                  <div className="research-meta">
                    <p className="research-title">{item.title}</p>
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

export default ResearchReportSection;
