import React, { Component } from 'react';
import car1 from "../images/car1.jpg"
import car2 from "../images/car2.png"
import car3 from "../images/car3.jpg"


var Cont = () => {

        return(
            <div className="sectionport">
                <div className="textfall">
                    <p>Wildest Research</p>
                </div>
                <div className="carousel">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={car1} class="d-block w-100" alt="..." width="80%" height="600px"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Meteor Tracker</h3>
        <p><i>Watch the closest meteors revolving around our home planet</i></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={car2} class="d-block w-100" alt="..." width="80%" height="600px"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>History</h3>
        <p><i>See the incidents of the past confirmed by the residents.</i></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={car3} class="d-block w-100" alt="..." width="80%" height="600px"/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Future</h3>
        <p><i>Cluster data for various ages!</i></p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
                    
          
                {console.log("vid")}
            </div>
        )
    
}
 
export default Cont;