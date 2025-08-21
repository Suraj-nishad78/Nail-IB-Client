import { useEffect, useState } from "react";
import "./msgbox.css";

const MsgBox = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Dynamically calculate based on msgbox position
      const msgBox = document.querySelector(".msg-box");
      if (!msgBox) return;

      const rect = msgBox.getBoundingClientRect();
      const triggerPoint = window.innerHeight / 3; // collapse when scrolled 1/3 screen down

      if (rect.top < triggerPoint) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className={`msg-box ${collapsed ? "collapsed" : ""}`}>
          {!collapsed ? (
            <>
              <h3>How can Nail-IB help you score higher in my IB exams?</h3>
              <p>
                Nail-IB provides{" "}
                <strong>everything you need to master the IB curriculum</strong>{" "}
                — from 5,000+ examiner-led videos and 37,000+ practice questions
                to solved past papers, notes, flashcards, and graded IA/EE
                examples. Whether you're revising for your finals, preparing
                your IA, or looking for quick topic explanations, Nail-IB helps
                you <strong>study smarter, not harder.</strong>
              </p>
              <p className="hint">
                Keep scrolling to explore IB notes, videos & papers.
              </p>
            </>
          ) : (
            <p className="collapsed-text">Keep scrolling ↓</p>
          )}
        </div>
    </>
  );
};

export default MsgBox;
