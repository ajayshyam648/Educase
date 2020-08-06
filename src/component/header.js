'use-strict'

//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
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
      return (
        <div>
          {/* main header */}
          <header className="main-header home-3">
            <div className="outer-container">
              <div className="container">
                <div className="main-box clearfix">
                  <div className="logo-box pull-left">
                    <figure className="logo"><Link to='/'><img src="images/logo.png" alt="" /></Link></figure>
                  </div>
                  <div className="menu-area pull-right clearfix">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                      <i className="icon-bar" />
                    </div>
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                        <ul className="navigation clearfix">
                          <li className="dropdown"><Link to=''>Services</Link>
                            <ul className="sub-menu-container" style={{}}>
                              <li className="menu-item" style={{}}><Link to='/edusocial' className="menu-link"><div style={{fontSize: '14px'}}><i className="fa fa-camera" aria-hidden="true" style={{fontSize: '18px', color: '#00B98E'}} />&nbsp;&nbsp;Edusocial</div><p style={{fontSize: '10px', color: '#666'}}>Social Media is an online tool that helps us to stay connected with the whole world.</p></Link></li>
                              <li className="menu-item" style={{}}><Link to='/edubridge' className="menu-link"><div style={{fontSize: '14px'}}><i className="fa fa-paint-brush" aria-hidden="true" style={{fontSize: '18px', color: '#00B98E'}} />&nbsp;&nbsp;EduBridge</div><p style={{fontSize: '10px', color: '#666'}}>A line is created by the movement of the artist's pen. Line Direction. The direction of a line can convey mood.</p></Link></li>
                              <li className="menu-item" style={{}}><Link to='/edulive' className="menu-link"><div style={{fontSize: '14px'}}><i className="fa fa-television" aria-hidden="true" style={{fontSize: '18px', color: '#00B98E'}} />&nbsp;&nbsp;EduLive</div><p style={{fontSize: '10px', color: '#666'}}>A line is created by the movement of the artist's pen. Line Direction. The direction of a line can convey mood.</p></Link></li>
                              <li className="menu-item" style={{}}><Link to='/edulearn' className="menu-link"><div style={{fontSize: '14px'}}><i className="fa fa-book" aria-hidden="true" style={{fontSize: '18px', color: '#00B98E'}} />&nbsp;&nbsp;EduLearn</div><p style={{fontSize: '10px', color: '#666'}}>Learning is a process that occurs within nebulous environments of shifting core elements – not entirely under the control of the individuals.</p></Link></li>
                            </ul>
                          </li>
                          <li className="nav-link"><Link to='/about'>About</Link>
                          </li>
                          <li className="nav-link"><Link to='/careers'>Careers</Link>
                          </li>
                          <li className="nav-link"><Link to='/contact'>Contact</Link></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/*sticky Header*/}
            <div className="sticky-header">
              <div className="container clearfix">
                <figure className="logo-box"><Link to='/'><a><img src="images/small-logo2.png" alt="" /></a></Link></figure>
                <div className="menu-area">
                  <nav className="main-menu clearfix">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* main-header end */}
          {/* Mobile Menu  */}
          <div className="mobile-menu">
            <div className="menu-backdrop" />
            <div className="close-btn"><i className="fas fa-times" /></div>
            <nav className="menu-box">
              <div className="nav-logo"><Link to='/'><img src="images/educaselogo1.png" alt="" title /></Link></div>
              <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
              <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li>Roop Rajat Township, Jodhpur (Raj.)</li>
                  <li><Link to='tel: +91-8209997899'> +91-8209997899</Link></li>
                  <li><Link to='mailto:info@example.com'>info@thetechbridge.in</Link></li>
                </ul>
              </div>
              <div className="social-links">
                <ul className="clearfix">
                  <li><a href="#"><span className="fab fa-twitter" /></a></li>
                  <li><a href="#"><span className="fab fa-facebook-square" /></a></li>
                  <li><a href="#"><span className="fab fa-pinterest-p" /></a></li>
                  <li><a href="#"><span className="fab fa-instagram" /></a></li>
                  <li><a href="#"><span className="fab fa-youtube" /></a></li>
                </ul>
              </div>
            </nav>
          </div>{/* End Mobile Menu */}

        </div>
      );
    }
  }

export default Header;
