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
      <div
        className="container"
        style={{ marginTop: "100px", backgroundColor: "#f5f5f5" }}
      >
        <div className="mt-3">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              {dataSet.map((tab: any, index: number) => (
                <button
                  className={`nav-link ${styles.main_tab} ${
                    activeMainTab === index
                      ? styles.main_tab_active
                      : styles.main_tab_stale
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
                  {tab.main_tab}{" "}
                  <span className="badge badge-primary mx-2">{tab.count}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
        <div className={`tab-content ${styles.tab_content_main}`}>
          <div
            className={`tab-pane ${
              activeMainTab === mainTabRef.current ? "active" : ""
            }`}
          >
            <div className="row">
              <div className={`col-2 ${styles.nested_tab_main_div}`}>
                <div className={`nav flex-column nav-pills `}>
                  {dataSet[activeMainTab].nested_tabs.map(
                    (nested_tab: any, index: number) => (
                      <div
                        key={index}
                        className={`d-flex justify-content-between align-items-center ${
                          styles.tab_link
                        } ${styles.nested_tabs_container}
                            ${
                              activeNestedTab === index
                                ? styles.active
                                : styles.inactive_nested_tab
                            }`}
                        onClick={() => handleTabClick(index)}
                      >
                        <div>{nested_tab.label}</div>
                        <span className={`badge ${styles.bg_color} mx-2`}>
                          {nested_tab.nested_count}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className={`col-10 ${styles.tab_content_container}`}>
                <div
                  className={`tab-content ${styles.scrollable_content} ${styles.tab_content}`}
                >
                  {dataSet[activeMainTab].nested_tabs.map(
                    (nested_tab_content: any, index: number) => (
                      <div
                        key={index}
                        className={`tab-pane  ${
                          activeNestedTab === index ? "active" : ""
                        }`}
                      >
                        <div className={``} ref={contentRef}>
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
