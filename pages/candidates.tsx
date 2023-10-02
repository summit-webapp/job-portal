import { useState, useEffect, useRef } from "react";
import styles from "../styles/vertical-tabs.module.css";
import CandidateCard from "@/cards/candidate-card";
const Candidates = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeNestedTab, setActiveNestedTab] = useState(0);
  const mainTabRef: any = useRef(0);
  const contentRef: any = useRef(null);

  const handleMainTabIndex = (index: number) => {
    setActiveMainTab(index);
    mainTabRef.current = index;
    setActiveNestedTab(0);
  };
  const handleTabClick = (index: number) => {
    setActiveNestedTab(index);
  };

  useEffect(() => {
    // Scroll to the top of the contentRef whenever active tabs change
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeMainTab, activeNestedTab]);

  const dataSet: any = [
    {
      main_tab: "Applicant",
      nested_tabs: [
        {
          label: "Devops",
          content: [
            {
              name: "Saif",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Ali",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Khan",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Shah",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Rukh",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Walid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Sajid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Farah",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Wajid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Younus",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Shoaib",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Meer",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Devops Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "Developer",
          content: [
            {
              name: "Salman",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Developer Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Zain",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Developer Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Yousuf",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Developer Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Hamza",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Developer Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Kazi",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Developer Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "Consultants",
          content: [
            {
              name: "Syed",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Consultants Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Touhid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Consultants Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Rashid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Consultants Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "Accounts",
          content: [
            {
              name: "Tamim",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Accounts Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Shaqib",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Accounts Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Junaid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "Accounts Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "HR",
          content: [
            {
              name: "Jainam",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Rasheeda",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Munim",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
      ],
    },
    {
      main_tab: "Interview",
      nested_tabs: [
        {
          label: "Interveiw Round 1",
          content: [
            {
              name: "Junaid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Ali",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Kazi",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "Interveiw Round 2",
          content: [
            {
              name: "Hamza",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Rasheeda",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Salman",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
        {
          label: "Interveiw Round 3",
          content: [
            {
              name: "Khan",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Rukh",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
            {
              name: "Touhid",
              description: "With an experience of 5 yrs in an IT Company ...",
              designation: "HR Specialist",
              date: "Fri 06/10/23",
            },
          ],
        },
      ],
    },
  ];

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
