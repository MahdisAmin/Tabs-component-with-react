import React, { useState, useEffect } from "react";
import Tab from "./Tab";
import Rating from "./Rating";

const Tabs = ({ activeTab, onTabClick }) => {
  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const handleRate = (tabIndex, rate) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [tabIndex]: rate,
    }));
  };

  return (
    <div>
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
        {activeTab === 1 && (
          <div>
            Content 1
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              nostrum saepe voluptatem sit alias ea eveniet amet laudantium vero
              voluptates!
            </p>
            <Rating onRate={(rate) => handleRate(1, rate)} />
            <p>Last Rate: {ratings[1]}</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            Content 2
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              nostrum saepe voluptatem sit alias ea eveniet amet laudantium vero
              voluptates!
            </p>
            <Rating onRate={(rate) => handleRate(2, rate)} />
            <p>Last Rate: {ratings[2]}</p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            Content 3
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              nostrum saepe voluptatem sit alias ea eveniet amet laudantium vero
              voluptates!
            </p>
            <Rating onRate={(rate) => handleRate(3, rate)} />
            <p>Last Rate: {ratings[3]}</p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            Content 4
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              nostrum saepe voluptatem sit alias ea eveniet amet laudantium vero
              voluptates!
            </p>
            <Rating onRate={(rate) => handleRate(4, rate)} />
            <p>Last Rate: {ratings[4]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
