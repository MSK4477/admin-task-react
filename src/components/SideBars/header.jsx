import React from "react";
import headerStyles from "./header.module.css"

const Header = () => {

    return (
        <div className="container-fluid">
            <div className="row">
            <div className=" col-md-12 col-sm-12 col-lg-12">

                <div className={headerStyles.whiteBg}>
               
                </div>
              <div className="row">
                <div className=" col-md-6 col-sm-12 col-lg-4">
                    <div className={headerStyles.boxes}>
                        <input
                            type='text'
                            placeholder='Search for ...'
                            className={headerStyles.searchInput}
                        />
                        <button
                            className={headerStyles.searchBtn}
                        >
                            <i class="fa-solid fa-magnifying-glass" style={{ color: "#ffffff" }}></i>
                        </button>
                    </div>
                </div>
                </div>
               <div className=" col-md-6 col-sm-12 col-lg-4">
                    <div className={headerStyles.envlope}>
                        <i class="fas fa-envelope fa-fw " style={{fontSize:"19px", position:"relative", bottom:"7px",color:"#ccc"}}> </i>
                            <span class="badge badge-danger badge-counter" style={{position:"relative",fontSize:"7px" ,bottom:"19px", right:"7px", }}>7</span> 
                            </div>
                            <div className={headerStyles.bell}>
                            <i class="fas fa-bell fa-fw" style={{fontSize:"19px", color:"#ccc"}}></i>
                            <span class="badge badge-danger badge-counter" style={{position:"relative",fontSize:"7px" ,bottom:"15px", right:"11px" }}>3+</span> 
                            </div>
                    </div>
                
                {/* <div className=" col-md-6 col-sm-12 col-lg-4">
                    <div className={headerStyles.boxes}>
                        <div className={headerStyles.box3}>box3</div>
                    </div>  */}

            </div>



</div>
        </div>
    );

};
export default Header