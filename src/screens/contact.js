'use-strict'

//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../component/header";
import Footer from "../component/footer";

class Contact extends Component {
  componentWillMount(){
    document.title = "Contact Us";
    window.scrollTo(0, 0);
    function loadScript(src) {
      return new Promise(function(resolve, reject){
        var script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', function () {
          resolve();
        });
        script.addEventListener('error', function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      })
    };
    loadScript('../js/script.js');
  }

        render() {
          return (
            <div>
              <Header />
              {/* page-title */}
              <section className="banner-style-three">
                <div className="image-layer" style={{backgroundImage: 'url(images/icons/banner-bg-2.png)'}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <h1>Contact Us</h1>
                        <p>Reach out to the world’s most reliable IT services.</p>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                      <div className="image-box  js-tilt">
                        <figure className="image" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/icons/contact-us.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* page-title end */}
              {/* contact-section */}
              <section className="contact-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 big-column">
                      <div className="info-content centred">
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                            <div className="single-info-box">
                              <figure className="icon-box"><img src="images/icons/info-icon-1.png" alt="" /></figure>
                              <h2>Phone</h2>
                              <div className="text">Start working with Landrick that can provide everything</div>
                              <div className="phone"><Link to="tel:+91-8209997899">+91-8209997899</Link></div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                            <div className="single-info-box">
                              <figure className="icon-box"><img src="images/icons/info-icon-2.png" alt="" /></figure>
                              <h2>E-mail</h2>
                              <div className="text">Start working with Landrick that can provide everything</div>
                              <div className="phone"><Link to="info@thetechbridge.in">info@thetechbridge.in</Link></div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                            <div className="single-info-box">
                              <figure className="icon-box"><img src="images/icons/info-icon-3.png" alt="" /></figure>
                              <h2>Address</h2>
                              <div className="text">Roop Rajat Township, Jodhpur (Raj.)</div>
                              <div className="phone"><Link to="/#">View on Google map</Link></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact-form-area">
                        <div className="sec-title center"><h2>Contact us</h2></div>
                        <div className="form-inner">
                          <form method="post" action="sendemail.php" id="contact-form" className="default-form"> 
                            <div className="row">
                              <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="form-group">
                                  <i className="fas fa-user" />
                                  <input type="text" name="username" placeholder="Name" required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="form-group">
                                  <i className="fas fa-envelope" />
                                  <input type="email" name="email" placeholder="Email" required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="form-group">
                                  <i className="fas fa-file" />
                                  <input type="text" name="subject" placeholder="Subject" required />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12 column">
                                <div className="form-group">
                                  <i className="fas fa-phone" />
                                  <input type="text" name="phone" placeholder="Phone" required />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 column">
                                <div className="form-group">
                                  <textarea name="message" placeholder="Write here message" defaultValue={""} />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 column">
                                <div className="form-group message-btn centred">
                                  <button type="submit" className="theme-btn-two" name="submit-form">Submit Now</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* contact-section end */}
              {/* map-section */}
              <section className="map-section">
                <div className="google-map-area">
                  <div className="google-map" id="contact-google-map" data-map-lat="40.712776" data-map-lng="-74.005974" data-icon-path="images/icons/map-marker.png" data-map-title="Brooklyn, New York, United Kingdom" data-map-zoom={12} data-markers="{
                          &quot;marker-1&quot;: [40.712776, -74.005974, &quot;<h4>Branch Office</h4><p>77/99 New York</p>&quot;,&quot;images/icons/map-marker.png&quot;]
                      }">
                  </div>
                </div>
              </section>
              {/* map-section end */}
             <Footer />
            </div>
          );
        }
    }
  
  export default Contact;