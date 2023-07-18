import React, {useState} from "react";
import "./App.css";
import Sidebar from "./components/SideBars/sideBar";
import Header from "./components/Header/header";
import Content from "./components/content/content";
function App() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    console.log(`sideBarIs:  ${sidebarVisible}` )
  };
  return (
    <div className="App">
        <Sidebar isVisible={sidebarVisible} />
        <Header toggleSidebar={toggleSidebar}/>
     
        <Content />
       </div>
        
  );
}

export default App;
