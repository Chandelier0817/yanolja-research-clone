import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const researchReports = [
  {
    id: 1,
    vol: "Vol.5",
    date: "2025.02.07",
    img: "/images/report/img1.jpg"
  },
  {
    id: 2,
    vol: "Vol.4",
    date: "2025.01.09",
    img: "/images/report/img2.png"
  },
  {
    id: 3,
    vol: "Vol.3",
    date: "2024.04.11",
    img: "/images/report/img3.png"
  },
  {
    id: 4,
    vol: "Vol.2",
    date: "2024.02.29",
    img: "/images/report/img4.png"
  },
  {
    id: 5,
    vol: "Vol.1",
    date: "2024.01.30",
    img: "/images/report/img5.png"
  }
];

function ResearchReportSection() {
  return (
    <section className="section section-bg-beige research-section">
      <div className="container">
        <div className="section-header-line">
          
          <button type="button" className="section-more-button">
            <h2 className="section-title-main">연구보고서 &gt;</h2>
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
  <img src={item.img} alt={item.title} className="research-cover" />
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
