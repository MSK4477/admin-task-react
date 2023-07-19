import React, {useState} from "react";
import "./App.css";
import Sidebar from "./components/SideBars/sideBar";
import Header from "./components/Header/header";
import Content from "./components/content/content";
function App() {

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [arrow, setArrow] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleArrow = () => {
    setArrow(!arrow);
  }
  return (
    <div className="App">
        <Sidebar isVisible={sidebarVisible}
         handleArrow={handleArrow}
         arrow={arrow}

        />
        <Header toggleSidebar={toggleSidebar}
        isVisible={sidebarVisible}
        arrow={arrow}

        />
     
        <Content 
        isVisible={sidebarVisible}
        arrow={arrow}

        />
       </div>
        
  );
}

export default App;
