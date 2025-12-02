import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InsightTrendSection from "./components/InsightTrendSection";
import ResearchReportSection from "./components/ResearchReportSection";
import NewsDataSection from "./components/NewsDataSection";
import SnsSubscribeSection from "./components/SnsSubscribeSection";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="main">
        <HeroSection />
        <InsightTrendSection />
        <ResearchReportSection />
        <NewsDataSection />
        <SnsSubscribeSection />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
