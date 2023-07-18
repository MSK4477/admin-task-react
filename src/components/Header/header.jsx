import headerStyles from "./header.module.css"

const Header = ({toggleSidebar}) => {

    

    return (
      <nav className={headerStyles.whiteBg}> 
      
                        <div className={headerStyles.search}>
                            <div className={headerStyles.bar} onClick={toggleSidebar}>
                            <i className="fa fa-bars"></i>
                            </div>
                            <input className={headerStyles.searchInput}  type="text" placeholder="Search for..."/>
                            <span className={headerStyles.searchBtn}><button className='btn btn-primary'  type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button></span>
                                <div>
                            </div>
                        </div>
                        <div className={headerStyles.sideIcon}>
                        <div className={headerStyles.sideIcons}>
                            <a href="#bell">
                                <i className="fas fa-bell fa-fw" style={{position:"relative", right:"20px"}}></i>
                                {/* <sup className="badge badge-danger badge-counter" style={{fontSize:"8px",marginBottom:"10px"}}>3+</sup> */}
                                <span className="badge badge-danger badge-counter" style={{fontSize:"8px", position:"relative", right:"27px", bottom:"10px"}}>3+</span>

                            </a>
                           
                       
                            <a  href="#envlope" >
                                <i className="fas fa-envelope fa-fw" ></i>
                                <span className="badge badge-danger badge-counter" style={{fontSize:"8px", position:"relative", right:"7px", bottom:"10px"}}>7</span>
                            </a>
                           
                            </div>


                        <div className={headerStyles.dougles}>
                            <a  href="#dougles" >
                                <span style={{
                         paddingLeft: '20px',
                            
                            }} className={headerStyles.dougles2}>Douglas McGee</span> &nbsp; &nbsp; 
                                <img  style={{width:"40px"}} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"/>
                            </a>
                           
                        </div>
                        </div>
                        
                       
      
      </nav>
    );

};
export default Header