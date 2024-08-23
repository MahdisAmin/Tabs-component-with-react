import React, { useState } from "react";
import Tabs from "./Tabs";

function TabStoring() {
  const [activeTab, setAcriveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab, 10) : 1;
  });
  const tabClickHandler = (tabIndex) => {
    setAcriveTab(tabIndex);
    localStorage.setItem("activeTab", tabIndex);
  };
  return <Tabs activeTab={activeTab} onTabClick={tabClickHandler} />;
}

export default TabStoring;
