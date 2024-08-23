import React from "react";
import Tab from "./Tab";

function Tabs({ activeTab, onTabClick }) {
  return (
    <>
      <div className="tabs">
        <Tab
          label="Tab 1"
          onClick={() => onTabClick(1)}
          isActive={activeTab === 1}
        />
        <Tab
          label="Tab 2"
          onClick={() => onTabClick(2)}
          isActive={activeTab === 2}
        />
        <Tab
          label="Tab 3"
          onClick={() => onTabClick(3)}
          isActive={activeTab === 3}
        />
        <Tab
          label="Tab 4"
          onClick={() => onTabClick(4)}
          isActive={activeTab === 4}
        />
      </div>
      <div className="content">
        {activeTab === 1 && <div>Content 1</div>}
        {activeTab === 2 && <div>Content 2</div>}
        {activeTab === 3 && <div>Content 3</div>}
        {activeTab === 4 && <div>Content 4</div>}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio,
          magnam iusto dolore error fuga nisi dolor omnis id animi.
        </p>
      </div>
    </>
  );
}

export default Tabs;
