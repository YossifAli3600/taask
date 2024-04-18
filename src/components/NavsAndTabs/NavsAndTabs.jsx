import { useState } from "react";
import styles from "./NavsAndTabs.module.css";

export default function NavAndTabs({
  tabs,
  tabsContent,
  defaultValue,
  id,
  className,
  round,
  removeBorders
}) {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`${className ? className : ''} dark:text-white`}>
      <div
        className={`${styles.tabs} flex items-center justify-center overflow-hidden ${removeBorders ? styles['remove--borders'] : ''} ${round == "both"
          ? styles["tabs--rounded"]
          : round == "left"
            ? styles["tabs--rounded-left"]
            : round == "right"
              ? styles["tabs--rounded-right"]
              : ""
          }`}
      >
        {tabs.map((ele) => {
          return (
            <div
              key={`nav-tab-${ele.target}-${id}`}
              onClick={() => setActiveTab(ele.target)}
              className={`${styles.tab} ${ele.target == activeTab ? styles["tab--active"] : ""
                }`}
            >
              {ele.element}
            </div>
          );
        })}
      </div>
      {tabsContent.map((ele) => {
        if (ele.id != activeTab) return "";
        return (
          <div
            key={`nav-content-${ele.id}-${id}`}
            className={`${styles["tab-content"]} ${!removeBorders ? styles['tab-content--border'] : ''}`}
          >
            {ele.element}
          </div>
        );
      })}
    </div>
  );
}
