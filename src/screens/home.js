'use-strict'

//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel2';//home owl carousel
import Header from "../component/header";
import Footer from "../component/footer";

class Home extends Component {

  constructor(props){

    super(props);

    this.state = {
      'api_data': [],
      'slider': [],
      'ourPrograms': [],
    }

  }


  componentWillMount(){
    document.title = "Educase";
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
            <div className="image-layer" style={{backgroundImage: 'url(images/icons/banner-bg-2.png)'}} />
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    <h1><span>Renew your educational institute to reach 21st century goals! </span></h1>
                    <div className="text">With the present challenges in mind, we at Educase have pulled together our solutions into a great<br/> offering for the educational institutions to be prepared for moving to the new normal.</div>
                    <div className="text">Educase streamlines all operations from school management system to its social media marketing for schools.Our platform has<br/> its own marketing tools integrated; the centers need not hire a separate vendor to take care of its digital marketing needs.</div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                  <div className="image-box">
                    <figure className="image image-1 clearfix wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/laptop-1.png" alt="" /></figure>
                    <figure className="image image-2 wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-10.jpg" alt="" /></figure>
                    <figure className="image image-3 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="images/resource/dashbord-11.jpg" alt="" /></figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* banner-section end */}
          {/* inside-software */}
          <section className="inside-software">
            <div className="image-layer" style={{backgroundImage: 'url(images/icons/layer-image-2.png)'}} />
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                  <div id="content_block_13">
                    <div className="content-box">
                      <div className="sec-title"><h2>Our Services</h2></div>
                      <div className="text">Educase has kept in mind the needs of Parents, teachers and the educational institute. We have some exclusive features which helps you with various marketing techniques. Bringing to you everything packed on one powerful platform.  
<br/><br/>Our platform is a one stop solution as our school management system is integrated with digital marketing tools.
</div>
                      <div className="image-box js-tilt">
                        <figure className="image"><img src="images/icons/undraw1.svg" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 inner-column">
                  <div id="content_block_14">
                    <div className="inner-content">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="feature-block-one js-tilt" onclick="window.location.href=&quot;edusocial.html&quot;">
                            <div className="inner-box">
                              <div className="hover-content" />
                              <div className="icon-box"><i className="flaticon-profit" /></div>
                              <h5><Link to='/edusocial'>EDUSOCIAL</Link></h5>
                              <div className="text">A single platform for all digital marketing needs of schools, the simplest way to build your brand on social media. </div>
                            </div>
                          </div>
                          <div className="feature-block-one js-tilt " onclick="window.location.href=&quot;edudesign.html&quot;">
                            <div className="inner-box">
                              <div className="hover-content" />
                              <div className="icon-box"><i className="flaticon-search" /></div>
                              <h5><Link to="/edubridge">EDUBRIDGE</Link></h5>
                              <div className="text">A web-based school management system that allows the educational institutes to efficiently manage day to day operations. It facilitates complete students learning journey with streamlining administrative work flows.</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="feature-block-one js-tilt" onclick="window.location.href=&quot;edulive.html&quot;">
                            <div className="inner-box">
                              <div className="hover-content" />
                              <div className="icon-box"><i className="flaticon-check-box" /></div>
                              <h5><Link to="/edulive">EDULIVE</Link></h5>
                              <div className="text">Are you dependent on various apps for online classes and E-learning which are highly expensive and charges you based on each user?
                                Know more..
                               </div>
                            </div>
                          </div>
                          <div className="feature-block-one js-tilt" onclick="window.location.href=&quot;edulearn.html&quot;">
                            <div className="inner-box">
                              <div className="hover-content" />
                              <div className="icon-box"><i className="flaticon-atom" /></div>
                              <h5><Link to="/edulearn">EDULEARN</Link></h5>
                              <div className="text">Keyword research &amp; ranking sure every step of you SEO Campaign is taken care.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* inside-software end */}
          {/* clients-section */}
          <section className="clients-section centred">
            <div className="container">
              <div className="sec-title center">
                <h2>Our Clientele</h2>
              </div>
              <OwlCarousel ref="car" className="owl-carousel" options={options3} events={events} >
                <figure className="image-box"><a href="#"><img src="images/clients/logo (4).png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/logo (2).png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/client-1.png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/logo (5).png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/logo (3).png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/client-5.png" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/logokid.jpg" alt="" /></a></figure>
                <figure className="image-box"><a href="#"><img src="images/clients/LogoMil.jpg" alt="" /></a></figure>
              </OwlCarousel>
            </div>
          </section>
          {/* clients-section end */}
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
          {/* case-studies */}
          <section className="case-studies"> 
            <div className="outer-container">
              <div className="sec-title center">
                <h2>Our Case Studies</h2>
                <p>The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey<br />Why gormless, pear shaped.!</p>
              </div>
              <OwlCarousel ref="car" className="owl-carousel" options={options3} events={events} >
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-1.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-1.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Digital Purchas</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-2.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-2.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Digital Marketing</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-3.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-3.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Web Development</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-4.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-4.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Advertising</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-1.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-1.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Digital Purchas</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-2.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-2.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Digital Marketing</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-3.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-3.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Web Development</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-4.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-4.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Advertising</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-1.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-1.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Digital Purchas</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-2.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-2.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Digital Marketing</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-3.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-3.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Web Development</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
                <div className="case-block-one">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="pic/case-4.png" alt="" /></figure>
                      <div className="box">
                        <a href="images/resource/case-4.png" className="lightbox-image" data-fancybox="gallery"><i className="fas fa-search" /></a>
                        <a href="#"><i className="fas fa-link" /></a>
                      </div>
                    </div>
                    <div className="lower-content">
                      <h2><a href="#">Online Advertising</a></h2>
                      <div className="text">Branding, Print</div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </section>
          {/* case-studies end */}
          {/* subscribe-style-five */}
          <section className="subscribe-style-five">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                  <div id="image_block_38">
                    <div className="image-box">
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

export default Home;
