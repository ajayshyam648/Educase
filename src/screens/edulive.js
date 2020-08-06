'use-strict'

//Dependencies
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';//home owl carousel
import Header from "../component/header";
import Footer from "../component/footer";

class EduLive extends Component {
  constructor(props){

    super(props);

    this.state = {
      'api_data': [],
      'slider': [],
      'ourPrograms': [],
    }

  }

  componentWillMount(){
    document.title = "EduLive";
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
                        <h1>EduLive</h1>
                        <div className="text">Your own app can have this exclusive feature, introducing EduLive,<br/> a premium virtual classroom platform which is integrated to your own school management system. </div>
                        <div className="text">EduLive can be a long-term solution for your center throughout this worrying time. </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box">
                        <figure className="image-1b clearfix wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/icons/edulive.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* banner-section end */}
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
            <h3><a href="#">HD Audio and Video</a></h3>
            <div className="text">Teacher can enable/disable for Student. Student can enable/disable for themselves.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">Interactive White board</a></h3>
            <div className="text">A whiteboard is one of the most important organizing features in a classroom where you can write, explain and brainstorm ideas.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-chat" /></div>
            <h3><a href="#">Raising Hand</a></h3>
            <div className="text">Student can raise hand and send message to teacher.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">Session recording</a></h3>
            <div className="text">Record each session and share it with students at the end of each class.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-graph" /></div>
            <h3><a href="#">Secure Virtual Classroom</a></h3>
            <div className="text">Only students of class can join class, this is integrated by adding students via the EduBridge, all content shared in class is secure, all recordings are stored securely.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">Group chats and 1:1 chat</a></h3>
            <div className="text">schedule classes for multiple divisions together or have a 1:1 session for Parent Teacher Meeting.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-chat" /></div>
            <h3><a href="#">Mute Students</a></h3>
            <div className="text">with the teacher moderation controls, the teacher can mute/ un-mute students.</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-businessman" /></div>
            <h3><a href="#">Online Assessment &amp; learning</a></h3>
            <div className="text">with our E-learning module the teachers can create objective based questions and publish the same, the student can get the results instantly after the end of each assessment. The teachers can also upload videos, notes in any format (pdf, word, excel, ppt etc.) for the students to learn</div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-graph" /></div>
            <h3><a href="#">	Screen Sharing</a></h3>
            <div className="text">HD screen sharing which gives instructors the possibility to share their screens which can be easily switched between multiple screens. </div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
        <div className="feature-block-two">
          <div className="inner-box">
            <div className="icon-box"><i className="flaticon-flow-chart" /></div>
            <h3><a href="#">Per user, Monthly and yearly packages</a></h3>
            <div className="text">credit based charges, monthly top-up facility, pay Rs. 1/per hour/ per user. Credit is only consumed when the user has taken the class.  </div>
            <div className="link-btn"><a href="#"><i className="fas fa-plus" /></a></div>
          </div>
        </div>
       
      </OwlCarousel>
    </div>
  </div>
</section>
{/* awesome-features end */}
              {/* support-section */}
              <section className="support-section">
                <div className="container">
                  <div className="sec-title center">
                    <h5>POWER YOUR STRATEGIES</h5>
                    <h2>The appway is a support your<br />business agency</h2>
                  </div>
                  <div className="inner-box">
                    <div className="row align-items-center">
                      <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div id="content_block_24">
                          <div className="content-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <h2>first we efficiency to unlock more opportunities</h2>
                            <div className="text">appway provides IT and security with complete control over your users' interactions. By using granular policies, Better Cloud only targets the specific events that are a security threat rather than applying blanket rules to every situation - creating a secure and frictionless environment for your users</div>
                            <div className="btn-box"><a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-1 image-column">
                        <div id="image_block_23">
                          <div className="image-box js-tilt">
                            <figure className="image wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="pic/support-1.svg" alt="" /></figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-box">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div id="image_block_23">
                          <div className="image-box js-tilt">
                            <figure className="image clearfix wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="pic/support-2.svg" alt="" /></figure>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div id="content_block_24">
                          <div className="content-box wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <h2>instant data to keep everyone in the know</h2>
                            <div className="text">appway provides IT and security with complete control over your users' interactions. By using granular policies, Better Cloud only targets the specific events that are a security threat rather than applying blanket rules to every situation - creating a secure and frictionless environment for your users</div>
                            <div className="btn-box"><a href="#" className="theme-btn">Read More<i className="fas fa-arrow-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* support-section end */}
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

export default EduLive;