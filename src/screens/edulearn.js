'use-strict'

//Dependencies
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';//home owl carousel
import Header from "../component/header";
import Footer from "../component/footer";

class EduLearn extends Component {
  constructor(props){

    super(props);

    this.state = {
      'api_data': [],
      'slider': [],
      'ourPrograms': [],
    }

  }

  componentWillMount(){
    document.title = "EduLearn";
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
                        <h1>Close more deals with the world's favorite <br /><span>CRM</span></h1>
                        <div className="text">Appway CRM helps you engage with leads and customers, get insights about your business, build a scalable sales process, and grow your business faster</div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box  js-tilt">
                        <figure className="image-1b clearfix wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="pic/b.svg" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* banner-section end */}
             
              {/* feature-style-11 */}
              <section className="feature-style-11">
                <div className="container">
                  <div className="sec-title center">
                    <h2>Features at a Glance<br />Date Assessment Soloution.</h2>
                  </div>
                  <div className="inner-content">
                    <div className="inner-box">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                          <div id="image_block_34">
                            <div className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/pattern-15.png)'}} />
                              <figure className="image clearfix js-tilt"><img src="pic/le.svg" alt="" /></figure>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                          <div id="content_block_34">
                            <div className="content-box wow fadeInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="top-title"><i className="fas fa-angle-double-right" />Multi-Channel</div>
                              <div className="sec-title"><h2>Engage with your customer</h2></div>
                              <ul className="list-item clearfix">
                                <li>Multichannel communication through telephone, email, live chat, and social media.</li>
                                <li>Get real-time notifications when customers interact with your business.</li>
                                <li>Measure the effectiveness of your email campaigns through email analytics.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                          <div id="content_block_34">
                            <div className="content-box wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="top-title"><i className="fas fa-angle-double-right" />Automation</div>
                              <div className="sec-title"><h2>Automate routine tasks</h2></div>
                              <ul className="list-item clearfix">
                                <li>Create pre-defined conditions for every incoming lead, and automate your lead nurturing process.</li>
                                <li>Automate every aspect of your business and cut out time-intensive, repetitive tasks.</li>
                                <li>Implement scoring rules that help you prioritize your work so you can concentrate on the right set of leads, contacts, accounts, and deals.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                          <div id="image_block_34">
                            <div className="image-box wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/pattern-16.png)'}} />
                              <figure className="image clearfix js-tilt"><img src="pic/lea.svg" alt="" /></figure>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inner-box">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                          <div id="image_block_34">
                            <div className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/pattern-17.png)'}} />
                              <figure className="image clearfix js-tilt"><img src="pic/lear.svg" alt="" /></figure>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                          <div id="content_block_34">
                            <div className="content-box wow fadeInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                              <div className="top-title"><i className="fas fa-angle-double-right" />Customization</div>
                              <div className="sec-title"><h2>Make CRM your own</h2></div>
                              <ul className="list-item clearfix">
                                <li>Customize your CRM interface to meet the specific requirements of your organization.</li>
                                <li>Add custom modules, buttons, and fields to manage your unique needs.</li>
                                <li>Manage multiple business processes within your CRM using Layouts.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* feature-style-11 end */}
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
             <Footer />
            </div>
          );
        }
      }

export default EduLearn;