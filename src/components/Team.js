import React from "react";
import "./Team.css";

export default function Team() {
  return (
    <section className="team">
      <div className="container-fluid">
        <h1>MEET <span>OUR TEAM</span></h1>
        <div className="row"> 
          <div className="col-md-3">
            <div className="team-descreption">
              <p>
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
              </p>
            </div>
          </div>

          <div className="col-md-4 card">  
            <div className="team-member">
              

            </div>
          </div>
          <div className="col-md-4 card">
            <div className="team-member">
              <div className="team-img">
                <img src="img/team/02.jpg" alt="team member" />
              </div>
              <div className="team-hover">
                <div className="desk">
                  <h4>Hello World</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo  nibh ante
                    facilisis bibendum.
                  </p>  
                </div>
                <div className="s-link">
                  <a href="/"><i className="fa fa-facebook"></i></a>
                  <a href="/"><i className="fa fa-twitter"></i></a>
                  <a href="/"><i className="fa fa-google-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}