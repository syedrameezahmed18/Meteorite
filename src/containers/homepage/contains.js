import React, { Component } from 'react';
import car1 from "../../images/car1.jpg"
import car2 from "../../images/car2.png"
import car3 from "../../images/car3.jpg"
import Fade from 'react-reveal/Fade'


var Cont = () => {
        return(
            <div className="sectionport">
                <div className="textfall">
                    <Fade left><p>Wildest Research</p></Fade>
                </div>
                <div className="carousel">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car1} className="d-block w-100" alt="..." width="80%" height="600px"/>
      <div className="carousel-caption d-none d-md-block">
        <Fade top><h3>Meteor Tracker</h3></Fade>
        <Fade bottom><p><i>Watch the closest meteors revolving around our home planet</i></p></Fade>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block w-100" alt="..." width="80%" height="600px"/>
      <div className="carousel-caption d-none d-md-block">
        <Fade top><h3>History</h3></Fade>
        <Fade bottom><p><i>See the incidents of the past confirmed by the residents.</i></p></Fade>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car3} className="d-block w-100" alt="..." width="80%" height="600px"/>
      <div className="carousel-caption d-none d-md-block">
       <Fade top><h3>Future</h3></Fade>
        <Fade bottom><p><i>Cluster data for various ages and There Close Approaches to Solar System.</i></p></Fade>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
                    
          
                {console.log("vid")}
            </div>
        )
    
}
 
export default Cont;