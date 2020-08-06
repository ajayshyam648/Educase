'use-strict'

//Dependencies
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';//home owl carousel
import Header from "../component/header";
import Footer from "../component/footer";

class EduBridge extends Component {
  constructor(props){

    super(props);

    this.state = {
      'api_data': [],
      'slider': [],
      'ourPrograms': [],
    }

  }

  componentWillMount(){
    document.title = "EduBridge";
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
          const config = {
            sliderType:"standard",
            spinner: "spinner3",
            responsiveLevels: [4096,1024,778,480,320],
            delay:5000,
            navigation: {
              arrows:{
                enable:true,
                left: {
                  container:"slider",
                  h_align:"left",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
                },
                right: {
                  container:"slider",
                  h_align:"right",
                  v_align:"center",
                  h_offset:30,
                  v_offset:0
                }
              },
              bullets:{
                style:"",
                enable: false,
                container: "slider",
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_under: 0,
                hide_over: 9999,
                tmp:'<span className="circle-bullet"></span>',
                direction:"horisontal",
                space: 10,
                h_align: "center",
                v_align: "bottom",
                v_offset: 20
              }
            },
            gridwidth:570,
            gridheight:730,
            animation: "fade",
            startwidth:1170,
            startheight:600,
            hideThumbs:10,
            fullWidth:"on",
            forceFullWidth:"on"
      
          };
      
          const options = {
            smartSpeed : 450,
            nav : true,
            loop  : true,
            autoplay: true,
            autoplayTimeout: 3000,
            /*navText : false,*/
            margin: 30,
            lazyLoad: true,
            /*responsiveClass:true,*/
            responsive : {
              0:{
                items:1
              },
              481:{
                items:2
              },
              992:{
                items:3
              }
            }
          };
      
          const events = {
            onDragged: function(event) {},
            onChanged: function(event) {}
          };
      
          const options2 = {
            items: 1,
            nav: true,
            dots: true,
            navText : false,
            autoplay: true,
            loop: true,
            autoplayTimeout: 2000,
            itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
          };
    
          const options3 = {
            items: 4,
            nav: true,
            dots: true,
            navText : false,
            autoplay: true,
            loop: true,
            autoplayTimeout: 2000,
            responsive : {
              0:{
                items:1
              },
              481:{
                items:2
              },
              786:{
                items:3
              },
              992:{
                items:4
              }
            }
          };

          return (
            <div>
             <Header />
              {/* banner-section */}
              <section className="banner-style-three">
                <div className="image-layer" style={{backgroundImage: 'url(images/icons/banner-bg-6.png)'}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <h1>EduBridge</h1>
                       <div className="text">EduBridge in many pre-schools and it has been consistently making<br/> the lives of teachers and parents easier by providing<br/> seamless communication.</div>
                       <div className="text">Its time to try it! -------- <div class="video-box"><a href="#" class="lightbox-image" data-caption="">Book a Demo</a></div></div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                      <div className="image-box  js-tilt">
                        <figure className="image" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/icons/graphic-design.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* banner-section end */}
              {/* work-section */}
              <section className="work-section">
                <div className="container">
                  <div className="sec-title center">
                    <h2>How Does This Work?</h2>
                    <p>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey<br />Why gormless, pear shaped.!</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                      <div className="single-item wow flipInY" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="pattern-bg" style={{backgroundImage: 'url(images/icons/pattern-22.png)'}} />
                          <h3><a href="#">Digital Analytics</a></h3>
                          <div className="text">Twit cras excuse my French matie boy grub it’s all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</div>
                          <div className="icon-box"><i className="flaticon-profit-1" /></div>
                          <div className="link-btn"><a href="#"><i className="fas fa-arrow-right" /></a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                      <div className="single-item wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="pattern-bg" style={{backgroundImage: 'url(images/icons/pattern-22.png)'}} />
                          <h3><a href="#">Digital Marketing</a></h3>
                          <div className="text">Twit cras excuse my French matie boy grub it’s all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</div>
                          <div className="icon-box"><i className="flaticon-rocket-launch" /></div>
                          <div className="link-btn"><a href="#"><i className="fas fa-arrow-right" /></a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                      <div className="single-item wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                          <div className="pattern-bg" style={{backgroundImage: 'url(images/icons/pattern-22.png)'}} />
                          <h3><a href="#">Email Marketing</a></h3>
                          <div className="text">Twit cras excuse my French matie boy grub it’s all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</div>
                          <div className="icon-box"><i className="flaticon-mail-1" /></div>
                          <div className="link-btn"><a href="#"><i className="fas fa-arrow-right" /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-btn"><a href="#" className="theme-btn-two">View More Features</a></div>
                </div>
              </section>
              {/* work-section end */}
              {/* feature-style-13 */}
              <section className="feature-style-13">
                <div className="anim-icons">
                  <div className="icon icon-1" />
                  <div className="icon icon-2" />
                </div>
                <div className="container">
                  <div className="inner-box">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div id="content_block_38">
                          <div className="content-box wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="sec-title">
                              <h2>the most proficient method to soar your deals.</h2>
                              <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                            </div>
                            <div className="lower-content">
                              <div className="single-item">
                                <div className="icon-box"><i className="flaticon-growth" /></div>
                                <h3><a href="#">Detailing and Analysis</a></h3>
                                <div className="text">Naff are you taking the piss say blow off faff about wellies richard.</div>
                              </div>
                              <div className="single-item">
                                <div className="icon-box"><i className="flaticon-art-and-design" /></div>
                                <h3><a href="#">Specialized SEO Audit</a></h3>
                                <div className="text">Naff are you taking the piss say blow off faff about wellies richard.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                        <div id="image_block_36">
                          <div className="image-box wow slideInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="bg-layer" style={{backgroundImage: 'url(images/icons/pattern-23.png)'}} />
                            <figure className="image clearfix js-tilt" id="scnd"><img src="pic/m.svg" alt="" /></figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-box">
                    <div className="row">
                      <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                        <div id="image_block_37">
                          <div className="image-box wow slideInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="bg-layer" style={{backgroundImage: 'url(images/icons/pattern-24.png)'}} />
                            <figure className="image clearfix js-tilt"><img src="pic/n.svg" alt="" /></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div id="content_block_38">
                          <div className="content-box wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="sec-title">
                              <h2>Let start now on Time Your Digital Marketing Business</h2>
                              <p>Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!</p>
                            </div>
                            <div className="lower-content">
                              <div className="single-item">
                                <div className="icon-box"><i className="flaticon-layers" /></div>
                                <h3><a href="#">Computerized Marketing</a></h3>
                                <div className="text">Naff are you taking the piss say blow off faff about wellies richard.</div>
                              </div>
                              <div className="single-item">
                                <div className="icon-box"><i className="flaticon-search-2" /></div>
                                <h3><a href="#">Search Engine Optimization</a></h3>
                                <div className="text">Naff are you taking the piss say blow off faff about wellies richard.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* feature-style-13 end */}

             {/* awesome-features */}
<section className="awesome-features">
  <div className="container-fluid">
    <div className="sec-title center">
      <h2>Our Awesome Features</h2>
    </div>
    <div className="inner-content">
    <OwlCarousel ref="car" className="owl-carousel" options={options3} events={events} >
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-graph" /></div>
            <h3><a href="#">	Lead Generation for schools</a></h3>
            <div className="text">Promote your own app and see how the app magically generates leads for you.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">	CCTV Integration</a></h3>
            <div className="text">See and monitor the child at every minute<br/> in school.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-chat" /></div>
            <h3><a href="#">	Bus Tracking</a></h3>
            <div className="text">A complete check on the live location of the bus to ensure the child's safety.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">•	Staff Profile</a></h3>
            <div className="text">Personalized user id for individual teacher and staff for easier access.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-graph" /></div>
            <h3><a href="#">Gain Visibility</a></h3>
            <div className="text">View real-time reports and status for all of your team’s projects.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">Student Profile</a></h3>
            <div className="text">Personalized user id for individual student for easier access.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-chat" /></div>
            <h3><a href="#">	Admission Enquiry</a></h3>
            <div className="text">Digital visitor book for monitoring enquiries and organizing proper follow-ups.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">	Communication</a></h3>
            <div className="text">Need to raise any concern about a child? Send a personal comment to the parents.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-graph" /></div>
            <h3><a href="#">	Alert Management</a></h3>
            <div className="text">Send immediate in-app notification to all your parents and teacher at one single click.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">Fees</a></h3>
            <div className="text">Receipt printing, customizable fee, collected and pending fee track.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-chat" /></div>
            <h3><a href="#">Events</a></h3>
            <div className="text">Receipt printing, customizable fee, collected and pending fee track.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">Daycare</a></h3>
            <div className="text">Parents and teachers can keep a track of in and out time of the kids in daycare.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">Feedback box</a></h3>
            <div className="text">Receive suggestions &amp; feedback from parents, to understand their expectations</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  </div>
</section>
{/* awesome-features end */}
              {/* counter-style-three */}
              {/* counter-style-three end */}
             {/* testimonial-style-ten */}
          <section className="testimonial-style-ten">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-12 col-md-12 user-column">
                  <div className="user-thumb">
                    <div className="thumb-box">
                      <div className="pattern-bg1" style={{backgroundImage: 'url(images/icons/thumb-bg.png)'}} />
                      <div className="pattern-bg2" style={{backgroundImage: 'url(images/icons/map-shap-3.png)'}} />
                      <figure className="thumb thumb-1"><img src="about img/user-8.png" alt="" /></figure>
                      <figure className="thumb thumb-2"><img src="about img/user-9.png" alt="" /></figure>
                      <figure className="thumb thumb-3"><img src="about img/user-10.png" alt="" /></figure>
                      <figure className="thumb thumb-4"><img src="about img/user-11.png" alt="" /></figure>
                      <figure className="thumb thumb-5"><img src="about img/user-12.png" alt="" /></figure>
                      <figure className="thumb thumb-6"><img src="about img/user-13.png" alt="" /></figure>
                      <figure className="thumb thumb-7"><img src="about img/user-14.png" alt="" /></figure>
                      <figure className="thumb thumb-8"><img src="about img/user-15.png" alt="" /></figure>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                  <div className="content-box">
                    <div className="sec-title"><h2>How Clients React</h2></div>
                   {/* <div className="testimonial-carousel-2 owl-carousel owl-theme"> */}
                   <OwlCarousel ref="car" className="owl-carousel" options={options2} events={events} >
                      <div className="testimonial-content">
                        <div className="inner-box">
                          <div className="text">“The app is very useful and whenever there is an issue or problem it is solved very quickly. Due to this app communication with the parents have become easier. Thanks Alok 😊👍
                            ”</div>
                          <div className="author-info">
                            <ul className="rating clearfix">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="name">
                              Vaishali Vyas</h4>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div className="inner-box">
                          <div className="text">“The Tech bridge is one of the best solution of preschool Software. I research in market of application and Finally I got solution from The Tech Bridge. Quick response from Support team. Recommend to all.”</div>
                          <div className="author-info">
                            <ul className="rating clearfix">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="name">
                              Amit Hingu</h4>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div className="inner-box">
                          <div className="text">“The Tech Bridge is a one stop solution for all your preschool technology need. Their preschool software is the best in the industry. what's really great is , the owner (Mr. Alok) , is always available for any help that you may want regarding the software. In short you can't go wrong with The tech bridge. Just close your eyes and Ake the leap of faith them. I am sure you won't be disappointed.”</div>
                          <div className="author-info">
                            <ul className="rating clearfix">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="name">Cambridge Montessori Kaggadasapura</h4>
                          </div>
                        </div>
                      
                    </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* testimonial-style-ten end */}
              {/* subscribe-style-five */}
              <section className="subscribe-style-five">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div id="image_block_38">
                        <div className="image-box">
                          <div className="bg-layer" style={{backgroundImage: 'url(images/icons/user-icon.png)'}} />
                          <figure className="image float-bob-y clearfix"><img src="images/icons/undraw_subscriber_vabu.svg" alt="" /></figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_41">
                        <div className="content-box">
                          <div className="sec-title"><h2>Subscribe our Newsletter</h2></div>
                          <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique purus justo</div>
                          <form action="#" method="post" className="subscribe-form">
                            <div className="form-group">
                              <input type="email" name="email" placeholder="Enter Your Email" required />
                              <button type="submit" className="theme-btn-two">Subscribe Now</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* subscribe-style-five end */}
              {/* free-estimate */}
              <section className="free-estimate">
                <div className="image-layer" style={{backgroundImage: 'url(images/icons/estimate-bg.png)'}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 inner-column">
                      <div className="inner-box clearfix">
                        <div className="text pull-left"><h2>Introducing our new feature EduLive</h2></div>
                        <div className="btn-box pull-right"><a href="#" className="theme-btn-two">Click here</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* free-estimate end */}
             <Footer />
            </div>
          );
        }
      }


export default EduBridge;