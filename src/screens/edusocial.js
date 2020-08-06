'use-strict'

//Dependencies
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel2';//home owl carousel
import Header from "../component/header";
import Footer from "../component/footer";

class EduSocial extends Component {
  constructor(props){

    super(props);

    this.state = {
      'api_data': [],
      'slider': [],
      'ourPrograms': [],
    }

  }

  componentWillMount(){
    document.title = "EduSocial";
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
                        <h1>EduSocial</h1>
                        <p>Creating Digital Campaigns that drive results. </p>
                        <div className="text">Engage through Web, Email, Mobile and Social Media Marketing. </div>
                        <div class="video-box"><a href="#" class="lightbox-image" data-caption="">GET STARTED</a></div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                      <div className="image-box js-tilt">
                        <figure className="image clearfix"><img src="images/icons/social.png" alt="" /></figure>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* banner-section end */}
              {/* clients-section */}
              {/* clients-section end */}
              {/* service-style-three */}
              <section className="service-style-three">
                <div className="image-layer wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: 'url(images/icons/shap-12.png)'}} />
                <div className="container">
                  <div className="inner-container">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12 single-column">
                        <div className="sec-title"><h2>Our Services</h2></div>
                        <div className="service-block-three wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="icon-box">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/icon-bg-3.png)'}} />
                              <i className="flaticon-profit-1" />
                            </div>
                            <h3><a href="#">Marketing Analysis.</a></h3>
                            <div className="text">•	Branding: - Your brand is a set of expectations, memories, stories that makes a customer want to choose you over another, with our range of services Educase helps you to make your center exclusive from the rest.</div>
                            <div className="text">•	Web Design & Development: - We provide you with a dynamic single pager website, which can be customized as per your desire. There are certain templates already listed for your choice. </div>
                            <div className="link-btn"><a href="#"><i className="far fa-arrow-alt-circle-right" /></a></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                        <div className="service-block-three wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="icon-box">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/icon-bg-1.png)'}} />
                              <i className="flaticon-mail" />
                            </div>
                            <h3><a href="#">Social Media</a></h3>
                            <div className="text">•	Social Media: - We stimulate brand advocacy through our Social Media Marketing by setting up social media profiles, optimization; keywords, creatives, blogging, Ad videos, infographics and other recommendations. </div>
                            <div className="link-btn"><a href="#"><i className="far fa-arrow-alt-circle-right" /></a></div>
                          </div>
                        </div>
                        <div className="service-block-three wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="icon-box">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/icon-bg-2.png)'}} />
                              <i className="flaticon-checkout" />
                            </div>
                            <h3><a href="#">Google Adwords</a></h3>
                            <div className="text">•	Google AdWords: - We create high-quality campaigns that work for you. We do this by creating Google search ads campaigns targeting the right keywords so you can capture potential customers as they search on Google for your product/service.</div>
                            <div className="link-btn"><a href="#"><i className="far fa-arrow-alt-circle-right" /></a></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                        <div className="service-block-three wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="icon-box">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/icon-bg-4.png)'}} />
                              <i className="flaticon-startup" />
                            </div>
                            <h3><a href="#">SEO &amp; Backlinks.</a></h3>
                            <div className="text">•	SEO:- We influence website ranking through search engine optimization. Our services include Keyword selection and analysis, website performance optimization, content creation for visitor engagement etc. </div>
                            <div className="link-btn"><a href="#"><i className="far fa-arrow-alt-circle-right" /></a></div>
                          </div>
                        </div>
                        <div className="service-block-three wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="icon-box">
                              <div className="bg-layer" style={{backgroundImage: 'url(images/icons/icon-bg-5.png)'}} />
                              <i className="flaticon-server" />
                            </div>
                            <h3><a href="#">VIDEOS &amp; ANIMATIONS</a></h3>
                            <div className="text">•	Video &amp; Animation: - We create brand visibility through videos and animations, with your ideas in mind, we create the script, pre-production, animated videos, editing, graphic designing, voice over and music tracks. </div>
                            <div className="link-btn"><a href="#"><i className="far fa-arrow-alt-circle-right" /></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* service-style-three end */}
              {/* solve-problem */}
              <section className="solve-problem">
                <div className="image-layer wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: 'url(images/icons/shap-13.png)'}} />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_25">
                        <div className="content-box">
                          <div className="sec-title"><h2>Generate engaging content solve many problems</h2></div>
                         <ul className="list-item clearfix">
                            <li>Our goal is to help your business grow by generating leads, to do this we determine your goals and target market, we provide strategic planning and implementation services for your digital marketing and advertising campaigns. </li>
                            <li>From ad-campaign management to SEO services, EduSocial team of digital marketing experts have the experience to help your organization grow and we do it with price transparency so you know how your investment is being used and why.</li>
                          </ul>
                          <div className="btn-box"><a href="#" className="theme-btn">Sign Up Now<i className="fas fa-angle-right" /></a></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div id="image_block_24">
                        <div className="image-box wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <figure className="image clearfix js-tilt"><img src="pic/c.svg" alt="" /></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* solve-problem end */}
              {/* counter-style-two */}
              {/* counter-style-two end */}
              {/* marketing-benefits */}
              <section className="marketing-benefits">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div id="image_block_26">
                        <div className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="bg-layer" style={{backgroundImage: 'url(images/icons/shap-30.png)'}} />
                          <figure className="image js-tilt"><img src="pic/a.svg" alt="" /></figure>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div id="content_block_27">
                        <div className="content-box">
                          <div className="sec-title"><h2>WHY SHOULD YOU CHOOSE EDUCASE?</h2></div>
                          <ul className="list-item clearfix">
                            <li>We are a dedicated designing company for schools, from social strategy to content creation with our experts. Social Media marketing offers a huge opportunity for your business. </li>
                            <li>Whether you're a B2C or B2B focused business, social media can radically improve the marketing performance of your business.  </li>
                            <li>Digital strategy - Website  - SEO - SEM - Paid Ads - Social Media - Lead Generation - Email Marketing - Newsletters - Content Development  - Google Ads - Blogs - Facebook - Instagram - Snapchat - YouTube - LinkedIn - Twitter - Awareness campaigns - Local search - Engagement - Marketing campaigns - WordPress - Ecommerce websites - Website &amp; marketing analytics - Influencer - Startup marketing – School Management software </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* marketing-benefits end */}
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

export default EduSocial;