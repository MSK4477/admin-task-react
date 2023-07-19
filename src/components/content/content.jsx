import React from "react";
import contentStyle from "./content.module.css";
import LineChart from "../Charts/Line"
import DoughnutChart from "../Charts/Doughnut"
const Content = ({isVisible,arrow}) => {
  return (
    <div className={`${contentStyle.content} ${isVisible ? contentStyle.content2 : ""} ${arrow ? contentStyle.content3 : ""}`}>
      <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <a href="#dash" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mt-4">
      <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
    </a>
  </div>
  <div className="row">
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card" style={{ borderLeft: "4px solid #3a60d0" }}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div  style={{fontWeight:"bold", fontSize:"16px",color:"#3a60d0"}} className="mb-1">
              Earnings (Monthly)
            </div>
            <div style={{fontWeight:"bold"}}>$40,000</div>
          </div>
          <div className="col-auto">
            <i className="fas fa-calendar " style={{fontSize:"28px", color:"#ccc"}}></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card" style={{ borderLeft: "4px solid #1cc88a" }}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div  style={{fontWeight:"bold", fontSize:"16px",color:"#1cc88a"}} className="mb-1">
              Earnings (Annual)
            </div>
            <div style={{fontWeight:"bold"}}>$215,000</div>
          </div>
            <i className="fas fa-dollar-sign" style={{fontSize:"28px", color:"#ccc"}}></i>
          </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card" style={{ borderLeft: "4px solid #36b9cc" }}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div   className="mb-1" style={{fontWeight:"bold", fontSize:"16px",color:"#36b9cc"}} >Tasks</div>
            <div className="row no-gutters align-items-center">
                <div style={{fontWeight:"bold"}}>50%</div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
            <i className="fas fa-clipboard-list " style={{fontSize:"28px", color:"#ccc"}}></i>
          </div>
      </div>
    </div>
  </div>
  <div className="col-xl-3 col-md-6 mb-4">
    <div className="card" style={{ borderLeft: "4px solid #f6c23e" }}>
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div  style={{fontWeight:"bold", fontSize:"16px",color:"#f6c23e"}}className=" mb-1">
              Pending Requests
            </div>
            <div style={{fontWeight:"bold"}}>18</div>
          </div>
          
            <i
              className="fas fa-comments fa-2x"
              style={{ color: "#ccc", fontSize: "24px" }}
            ></i>
         
        </div>
      </div>
    </div>
  </div>
  </div>

      <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className={contentStyle.container}>
              <div className={contentStyle.header} style={{ color: "#4e73df", fontWeight: "bolder" }}>Earnings Overview
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" style={{ marginTop: "10px", color: "#ccc" }}></i>

              </div>
              <div className={contentStyle.LineChart}>
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className={contentStyle.Annual}>
              <div className={contentStyle.header} style={{ color: "#4e73df", fontWeight: "bold" }}>Revenue Sources
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" style={{ marginTop: "10px", color: "#ccc" }}></i>
              </div>
              <div className={contentStyle.DoughnutChart}>
                <DoughnutChart />
              </div>
            </div>
          </div>

        </div>

        <div className="row">

        <div className="col-lg-6">

<div className="card shadow mb-4">
  <div className="card-header py-3">
    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
  </div>
  <div className="card-body">
    <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
    <div className="progress mb-4">
      <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
    <div className="progress mb-4">
      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
    <div className="progress mb-4">
      <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
    <div className="progress mb-4">
      <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
    <div className="progress">
      <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-lg-6 mb-4">
    <div className="card bg-primary text-white shadow">
      <div className="card-body">
        Primary
        <div  style={{backgroundClip:"#4e73df" }}>#4e73df</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-success text-white shadow">
      <div className="card-body">
        Success
        <div style={{backgroundClip:"#1cc88a" }}>#1cc88a</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-info text-white shadow">
      <div className="card-body">
        Info
        <div style={{backgroundClip:"#36b9cc" }}>#36b9cc</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-warning text-white shadow">
      <div className="card-body">
        Warning
        <div style={{backgroundClip:"#f6c23e" }}>#f6c23e</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-danger text-white shadow">
      <div className="card-body">
        Danger
        <div style={{backgroundClip:"#e74a3b" }}>#e74a3b</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-secondary text-white shadow">
      <div className="card-body">
        Secondary
        <div style={{backgroundClip:"#858796" }}>#858796</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-light text-black shadow">
      <div className="card-body">
        Light
        <div style={{backgroundClip:"#f8f9fc" }}>#f8f9fc</div>
      </div>
    </div>
  </div>
  <div className="col-lg-6 mb-4">
    <div className="card bg-dark text-white shadow">
      <div className="card-body">
        Dark
        <div  style={{backgroundClip:"#5a5c69" }}>#5a5c69</div>
      </div>
    </div>
  </div>
</div>

</div>


<div className="col-lg-6 mb-4">
  <div style={{border:"1px solid #ccc",backgroundColor:"#ffffff" ,borderRadius:"6px",boxShadow:"0px  4px 6px  rgba(0, 0, 0, 0.1)"}}>
   
  <div style={{padding:"16px",backgroundColor:"#f7f7f7", fontWeight:"bold", color:"#007bff", borderBottom:"2px solid #f7f7f7"}}>
    Illustration
    </div>
 
    <div style={{textAlign:"center", paddingTop:"20px"}}> 
    <img  style={{ width: "23rem", }} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"  alt="..." />
    </div>
    <div style={{lineHeight:"1.5",verticalAlign:"middle",padding:"20px"}}>
      <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
    </div>
    <div style={{padding:"20px"}}>
      <a href="#boot">Browse Illustrations on unDraw →</a>
      </div>
  </div>
  <div style={{border:"1px solid #ccc",backgroundColor:"#ffffff" ,borderRadius:"6px",boxShadow:"0px  4px 6px  rgba(0, 0, 0, 0.1)",marginTop:"30px"}}>
  <div style={{padding:"16px",backgroundColor:"#f7f7f7", fontWeight:"bold", color:"#007bff", borderBottom:"2px solid #f7f7f7"}}>
      <h6 >Development Approach</h6>
    </div>
    <div style={{lineHeight:"1.5",verticalAlign:"middle",padding:"20px"}}>
      <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
      <p className="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
    </div>
  </div>
</div>

        </div>
      </div>
      </div>
  );
};

export default Content;
