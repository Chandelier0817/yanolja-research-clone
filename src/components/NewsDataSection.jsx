import React, { useState } from "react";

const newsItems = [
  {
    id: 1,
    category: "비즈월드",
    title:
      "인바운드 관광 '양적 성장했지만'...수익 확대 연결은 '요원'",
    date: "2025.12.01"
  },
  {
    id: 2,
    category: "매일경제",
    title: "광안리·해운대 1.2위, 국내 첫 소셜 데이터 기반 '한국관광지 500' 발표",
    date: "2025.12.01"
  },
  {
    id: 3,
    category: "파이낸셜리뷰",
    title:
      "한국 관광지 500 패널 토론, '객실당 높아진 심리... 지역 불균형 해소 위한 정책 고민 돼야'",
    date: "2025.11.27"
  },
  {
    id: 4,
    category: "파이낸셜리뷰",
    title:
      "한국 관광지 500분석, 지역 편중·연계 부재 심각... 인바운드 확대를 위한 허브-스포크 전략 시급",
    date: "2025.11.27"
  },
  {
    id: 5,
    category: "파이낸셜리뷰",
    title:
      "야놀자리서치, 한국 관광지 500 발표... '감성평가로 양적 지표 한계 극복, 감소 관광지 발굴 나선다'",
    date: "2025.11.27"
  }
];

const pressTabs = ["언론보도", "보도자료"];

function NewsDataSection() {
  const [activeTab, setActiveTab] = useState("언론보도");

  return (
    <section className="section news-section">
      <div className="container news-grid">
        <div className="news-left">
          <div className="news-tabs">
            {pressTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={
                  tab === activeTab ? "news-tab news-tab--active" : "news-tab"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <ul className="news-list">
            {newsItems.map((item) => (
              <li key={item.id} className="news-item">
                <div className="news-text">
                  <span className="news-category">[{item.category}]</span>
                  <span className="news-title">{item.title}</span>
                </div>
                <span className="news-date">{item.date}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="news-more">
            더보기 &gt;
          </button>
        </div>

        <aside className="news-data-box">
          <p className="news-data-title">데이터 &gt;</p>
          <div className="news-data-card">
            {/* 이미지 대신 플레이스홀더 */}
            <div className="news-data-illustration">아이콘</div>
            <p className="news-data-desc">
              야놀자리서치가 활용한 데이터를
              <br />
              편하게 사용해보세요!
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default NewsDataSection;
