import React, { useState } from "react";
import sideStyles from "./sideBar.module.css";

const Sidebar = ({ isVisible, handleArrow, arrow}) => {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);


  const handleDropDown = () => {
    setDrop(!drop);
    setDrop2(false);
    setDrop3(false);
  };

  const handleDropDown2 = () => {
    setDrop2(!drop2);
    setDrop(false);
    setDrop3(false);
  };

  const handleDropDown3 = () => {
    setDrop3(!drop3);
    setDrop(false);
    setDrop2(false);
  };
 
 
  

  return (

   
<div className={`${sideStyles.containers} ${isVisible ? sideStyles.container2 : ""}${arrow ? sideStyles.container3 : ""}`}>
      <div className={sideStyles.SbAdmin2}>
        <ul style={{ textAlign: "left" }}>  
          <a href="#SbAdmin2" className={sideStyles.link}>
            <li className={sideStyles.sidebarItem}>
              <i
                className={`fas fa-laugh-wink ${sideStyles.icon}`}
                style={{
                  fontSize: "30px",
                  transform: "rotate(340deg)",
                  paddingRight: "15px",
                }}
              ></i>
              <span className={sideStyles.sidebarText}>
                SB ADMIN<sup>{2}</sup>
              </span>
            </li>
          </a>
        </ul>
      </div>
      <div className={sideStyles.Dashboard}>
        <ul style={{ textAlign: "left" }}>
          <a href="#Dashboard" className={sideStyles.link2}>
            <li className={sideStyles.sidebarItem2}>
              <i
                className={`fas fa-dashboard ${sideStyles.icon2}`}
                style={{
                  fontSize: "15px",
                  paddingRight: "15px",
                  paddingLeft: "10px",
                }}
              ></i>
              <span className={sideStyles.sidebarText2}>Dashboard</span>
            </li>
          </a>
        </ul>
      </div>
      <div className={sideStyles.interface}>
        <p
          style={{
            color: "#95abec",
            position: "relative",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          <b>INTERFACE</b>
        </p>
      </div>
      {/* DROPDOWN 1 */}
      {drop ? (
        <ul onClick={handleDropDown}>
          <a href="#components" style={{ textDecoration: "none" }} className={sideStyles.components}>
            <li>
              <i className="fas fa-fw fa-cog"></i>
              <span>Components</span>&nbsp;&nbsp;
              <span>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    color: "#c1c1c3",
                    position: "relative",
                    top: "4px",
                    left: "60px",
                  }}
                ></i>
              </span>
              <div className={sideStyles.drop}>
                <ul>
                
                    <li
                      style={{
                        color: "#ccc",
                        fontSize: "12px",
                        position: "relative",
                        top: "20px",
                        right: "10px",
                      }}
                    >
                      <b>CUSTOM COMPONENTS:</b>
                    </li>
                  <a href="#Buttons" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "28px",
                        right: "10px",
                      }}
                      className={sideStyles.buttons}
                    >
                      Buttons
                    </li>
                  </a>
                  <a href="#Cards" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "37px",
                        right: "10px",
                      }}
                      className={sideStyles.cards}
                    >
                      Cards
                    </li>
                  </a>
                </ul>
              </div>
            </li>
          </a>
        </ul>
      ) : (
        <ul onClick={handleDropDown}>
        <a href="#Components" style={{ textDecoration: "none" }} className={sideStyles.components}>
          <li>
          <i className="fas fa-fw fa-cog"></i>     
                 <span >Component</span>&nbsp;&nbsp;
            <span>
              <i
                className="fa-solid fa-caret-down"
                style={{
                  color: "#c1c1c3",
                  position: "relative",
                  top: "4px",
                  left: "88px",
                  transform: "rotate(270deg)",
                }}
              ></i>
            </span>
          </li>
        </a>
      </ul>
      )}

      {/* DROPDOWN 2 */}
      {drop2 ? (
        <ul onClick={handleDropDown2}>
          <a href="#Utilities" style={{ textDecoration: "none", height: "250px" }} className={sideStyles.Utilities}>
            <li>
              <div className={sideStyles.utIcons}>
              <i className="fas fa-fw fa-wrench" ></i>
              <span>Utilities</span>&nbsp;&nbsp;
              <span>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    color: "#c1c1c3",
                    position: "relative",
                    top: "4px",
                    left: "98px",
                  }}
                ></i>
              </span>

              </div>
              
              <div className={sideStyles.drop2}>
                <ul>
                 
                    <li
                      style={{
                        color: "#ccc",
                        fontSize: "12px",
                        position: "relative",
                        top: "20px",
                        right: "10px",
                      }}
                    >
                      <b>CUSTOM UTILITIES:</b>
                    </li>
                 
                  <a href="#Color" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "28px",
                        right: "10px",
                      }}
                      className={sideStyles.color}
                    >
                      Color
                    </li>
                  </a>
                  <a href="#Border" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "40px",
                        right: "10px",
                      }}
                      className={sideStyles.border}
                    >
                      Border
                    </li>
                  </a>
                  <a href="#Animation" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "50px",
                        right: "10px",
                      }}
                      className={sideStyles.animation}
                    >
                      Animation
                    </li>
                  </a>
                  <a href="#Other" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "60px",
                        right: "10px",
                      }}
                      className={sideStyles.other}
                    >
                      Other
                    </li>
                  </a>
                </ul>
              </div>
            </li>
          </a>
        </ul>
      ) : (
        <ul onClick={handleDropDown2}>
          <a href="#Utilities" style={{ textDecoration: "none" }} className={sideStyles.Utilities}>
            <li>
              <i className="fas fa-fw fa-wrench"></i>
              <span>Utilities</span>&nbsp;&nbsp;
              <span>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    color: "#c1c1c3",
                    position: "relative",
                    top: "4px",
                    left: "98px",
                    transform: "rotate(270deg)",
                  }}
                ></i>
              </span>
            </li>
          </a>
        </ul>
      )}

      <div className={sideStyles.addons}>
        <p
          style={{
            color: "#95abec",
            position: "relative",
            top: "35px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          <b>ADDONS</b>
        </p>
      </div>

      {/* DROPDOWN 3 */}
      {drop3 ? (
        <ul onClick={handleDropDown3}>
          <a href="#Utilities" style={{ textDecoration: "none", height: "250px",color:"#c1c1c3" }} className={sideStyles.pages}>
            <li>
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>&nbsp;&nbsp;
              <span>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    color: "#c1c1c3",
                    position: "relative",
                    top: "4px",
                    left: "98px",
                  }}
                ></i>
              </span>
              <div className={sideStyles.drop3}>
                <ul>
                 
                    <li
                      style={{
                        color: "#ccc",
                        fontSize: "12px",
                        position: "relative",
                        top: "20px",
                        right: "10px",
                      }}
                    >
                      <b>LOGIN SCREEN:</b>
                    </li>
                 
                  <a href="#Login" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "28px",
                        right: "10px",
                      }}
                      className={sideStyles.login}
                    >
                      Login
                    </li>
                  </a>
                  <a href="#Register" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "40px",
                        right: "10px",
                      }}
                      className={sideStyles.register}
                    >
                      Register
                    </li>
                  </a>
                  <a href="#Forgot Password" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "50px",
                        right: "10px",
                      }}
                      className={sideStyles.forgotPassword}
                    >
                      Forgot Password
                    </li>
                  </a>
                  <a href="#Other Pages" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "#ccc",
                        position: "relative",
                        top: "60px",
                        right: "10px",
                        fontSize:"13px",
                      }}
                      className={sideStyles.otherPages}
                    >
                     <b>OTHER PAGES:</b> 
                    </li>
                  </a>
                  <a href="#404 Page" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "70px",
                        right: "10px",
                      }}
                      className={sideStyles.page404}
                    >
                     404 Page
                    </li>
                  </a>
                  <a href="#Blank Page" style={{ textDecoration: "none" }}>
                    <li
                      style={{
                        color: "black",
                        position: "relative",
                        top: "80px",
                        right: "10px",
                      }}
                      className={sideStyles.blankpage}
                    >
                      Blank Page
                    </li>
                  </a>


                </ul>
              </div>
            </li>
          </a>
        </ul>
      ) : 
        <ul onClick={handleDropDown3}>
          <a href="#Utilities" style={{ textDecoration: "none" }} className={sideStyles.pages}>
            <li>
              <i className="fas fa-fw fa-folder"></i>
              <span>Pages</span>&nbsp;&nbsp;
              <span>
                <i
                  className="fa-solid fa-caret-down"
                  style={{
                    color: "#c1c1c3",
                    position: "relative",
                    top: "4px",
                    left: "110px",
                    transform: "rotate(270deg)",
                  }}
                ></i>
              </span>
            </li>
          </a>
        </ul>
      }
      <ul >
<a href="#Charts" style={{ textDecoration: "none" }} className={`${sideStyles.chart} ${drop3 && sideStyles.charts }`}>

            <li>
              <i className="fas fa-chart-area"></i>
              <span >Charts</span>&nbsp;&nbsp;
             
            </li>
          </a>
        </ul>
        <ul >
<a href="#Tables" style={{ textDecoration: "none" }} className={sideStyles.table}>

            <li>
              <i className="fas fa-table"></i>
              <span >Tables</span>&nbsp;&nbsp;
             
            </li>
          </a>
        </ul>
         <div  className={sideStyles.arrow} style={{position:"relative",top:"180px",left:"20%"}}>
        <button  onClick={handleArrow}  className="rounded-circle border-0"  style={{width:"4rem",height:"4rem",backgroundColor:"#6886de"}}> <i className={arrow ? "fa-solid fa-arrow-left" :"fa-solid fa-arrow-right"} style={{color: "#ccc"}}></i></button>
        </div>
      
       
        <div className={sideStyles.rocketbg} style={ arrow ? {display:"none"} :{ position:"relative" , top:"220px",left:"10px",borderRadius:"8px", padding:"10px",backgroundColor:"#3a5cbf",width:"200px"}}>
          <div className={sideStyles.rocket}>
          <img style={{width:"4rem", position:"relative",  left:"4rem"}}  src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..."/>
                        <p style={{pdding:"30px",textAlign:"center",color:"#ccc"}}><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>          

                <a    style={{position:"relative", left:"30px"}}className="btn btn-success" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a> 
          </div>
          
            </div>
    </div>
    
  );
};

export default Sidebar;
