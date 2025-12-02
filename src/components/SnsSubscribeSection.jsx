import React from "react";

const snsList = [
  "YouTube",
  "Instagram",
  "Facebook",
  "LinkedIn",
  "X",
  "Blog",
  "Naver Post",
  "Weibo",
  "TikTok"
];

function SnsSubscribeSection() {
  return (
    <section className="section section-bg-beige sns-section">
      <div className="container sns-inner">
        <div className="sns-text">
          <p className="sns-heading">
            야놀자리서치의 더 많은 소식을 SNS로 만나보세요.
          </p>
          <div className="sns-icons">
            {snsList.map((sns) => (
              <div key={sns} className="sns-icon">
                {sns[0]}
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="subscribe-button">
          구독신청하기
        </button>
      </div>
    </section>
  );
}

export default SnsSubscribeSection;
