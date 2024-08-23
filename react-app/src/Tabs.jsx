
import React,{ useState } from 'react'
import Tap from './Tap'

function Tabs() {
    const [activeTap, setAcriveTab] = useState(1)
    const tabClickHnadler = (tabIndex) => {
        setAcriveTab(tabIndex)
    }
  return (
    <>
      <div className="tabs">
        <Tap
          label="Tab1"
          onClick={() => tabClickHnadler(1)}
          isActive={activeTap === 1}
        />
        <Tap
          label="Tab2"
          onClick={() => tabClickHnadler(2)}
          isActive={activeTap === 2}
        />
        <Tap
          label="Tab3"
          onClick={() => tabClickHnadler(3)}
          isActive={activeTap === 3}
        />
        <Tap
          label="Tab4"
          onClick={() => tabClickHnadler(4)}
          isActive={activeTap === 4}
        />
      </div>
      <div className="content">
        {activeTap === 1 && <div>Content 1</div>}
        {activeTap === 2 && <div>Content 2</div>}
        {activeTap === 3 && <div>Content 3</div>}
        {activeTap === 4 && <div>Content 4</div>}
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut optio,
          magnam iusto dolore error fuga nisi dolor omnis id animi.
        </p>
      </div>
    </>
  );
}

export default Tabs