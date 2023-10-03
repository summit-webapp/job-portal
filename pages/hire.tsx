import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../styles/vertical-tabs.module.css";
import CandidateCard from "@/cards/candidate-card";
import { dataSet } from "../datasets/candidate-datasets";
import { CONSTANTS } from "@/services/config/app-config";
const Candidates = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeNestedTab, setActiveNestedTab] = useState(0);
  const mainTabRef: any = useRef(0);
  const contentRef: any = useRef(null);
  const router = useRouter();

  const handleMainTabIndex = (index: number) => {
    setActiveMainTab(index);
    mainTabRef.current = index;
    setActiveNestedTab(0);
  };
  const handleTabClick = (index: number) => {
    setActiveNestedTab(index);
  };

  useEffect(() => {
    if (!CONSTANTS.CANDIDATE_EVALUATION_PORTAL) {
      router.push("/");
    }
    // Scroll to the top of the contentRef whenever active tabs change
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeMainTab, activeNestedTab]);

  return (
    <>
      <div className="container" style={{ marginTop: "150px" }}>
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {dataSet.map((tab: any, index: number) => (
                <button
                  className={`nav-link ${
                    activeMainTab === index ? "active" : ""
                  }`}
                  id={`${tab.main_tab}-tab`}
                  data-toggle="tab"
                  data-target={`#${tab.main_tab}`}
                  type="button"
                  role="tab"
                  aria-controls={`${tab.main_tab}`}
                  aria-selected={`${activeMainTab === index ? true : false}`}
                  onClick={() => handleMainTabIndex(index)}
                >
                  {tab.main_tab}
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className="tab-content mt-3">
          <div
            className={`tab-pane ${
              activeMainTab === mainTabRef.current ? "active" : ""
            }`}
          >
            <div className="row">
              <div className="col-2">
                <div className="nav flex-column nav-pills">
                  {dataSet[activeMainTab].nested_tabs.map(
                    (nested_tab: any, index: number) => (
                      <div
                        key={index}
                        className={`${styles.tab_link} 
                            ${activeNestedTab === index ? styles.active : ""}`}
                        onClick={() => handleTabClick(index)}
                      >
                        {nested_tab.label}
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="col-8">
                <div className={`tab-content ${styles.tab_content}`}>
                  {dataSet[activeMainTab].nested_tabs.map(
                    (nested_tab_content: any, index: number) => (
                      <div
                        key={index}
                        className={`tab-pane ${
                          activeNestedTab === index ? "active" : ""
                        }`}
                      >
                        <div
                          className={styles.scrollable_content}
                          ref={contentRef}
                        >
                          <CandidateCard content={nested_tab_content.content} />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candidates;
