'use-strict'

//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {

  
    render() {
      return (
        <div>
         {/* main-footer */}
         <footer className="main-footer style-two">
            <div className="image-layer" style={{backgroundImage: 'url(images/icons/footer-bg-5.png)'}} />
            <div className="container">
              <div className="footer-top">
                <div className="widget-section">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                      <div className="about-widget footer-widget">
                        <figure className="footer-logo"><Link to='/'><img src="images/logo.png" alt="" /></Link></figure>
                        <div className="text">Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim lorem sed do eiusmod.</div>
                        <ul className="social-links">
                          <li><h6>Follow Us :</h6></li>
                          <li><Link><i className="fab fa-facebook-f" /></Link></li>
                          <li><a ><i className="fab fa-twitter" /></a></li>
                          <li><a ><i className="fab fa-skype" /></a></li>
                          <li><a ><i className="fab fa-linkedin-in" /></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                      <div className="links-widget footer-widget">
                        <h4 className="widget-title">Support</h4>
                        <div className="widget-content">
                          <ul className="list clearfix">
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="#">Submit a Ticket</Link></li>
                            <li><Link to="#">Visit Knowledge Base</Link></li>
                            <li><Link to="#">Support System</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                      <div className="links-widget footer-widget">
                        <h4 className="widget-title">Company</h4>
                        <div className="widget-content">
                          <ul className="list clearfix">
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/about">Our Team</Link></li>
                            <li><Link to="/career">Privacy Policy</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                      <div className="contact-widget footer-widget">
                        <h4 className="widget-title">Contact Info</h4>
                        <div className="widget-content">
                          <ul className="list clearfix">
                            <li><i className="fas fa-map-marker-alt" />Roop Rajat Township, Jodhpur (Raj.)
                            </li><li>
                              <i className="fas fa-phone-volume" />
                              <Link to='tel: +91-8209997899'> +91-8209997899</Link>
                            </li>
                            <li>
                              <i className="fas fa-envelope" />
                              <Link to='mailto:info@example.com'>info@thetechbridge.in</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="copyright">© 2020 <Link to='/'>Educase</Link>. All rights reserved</div>
              </div>
            </div>
          </footer>
          {/* END sidebar widget item */}
          {/*Scroll to top*/}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="fa fa-arrow-up" />
          </button>
          {/* share toggle button */}
          <div id="arcontactus" className="arcontactus-widget arcontactus-message right lg active" style={{marginBottom: '0px'}}>{/*noindex*/}
            <div className="messangers-block arcuAnimated lg"><div className="messangers-list-container"><ul className="messangers-list rounded-items"><li><a className="messanger msg-item-facebook-messenger" id="msg-item-1" rel="nofollow noopener" href="https://m.me/thetechbridge" target="_blank"><span style={{backgroundColor: '#567AFF'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z" /></svg></span><div className="arcu-item-label"><div className="arcu-item-title">Messenger</div></div></a></li><li><a className="messanger msg-item-whatsapp" id="msg-item-2" rel="nofollow noopener" href="https://api.whatsapp.com/send?phone=918209997899&text=&source=&data=&app_absent=" target="_blank"><span style={{backgroundColor: '#25D366'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></span><div className="arcu-item-label"><div className="arcu-item-title">Whatsapp</div></div></a></li><li><a className="messanger msg-item-envelope" id="msg-item-6" rel="nofollow noopener" href="mailto:info@thetechbridge.com" target="_blank"><span style={{backgroundColor: '#FF643A'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" /></svg></span><div className="arcu-item-label"><div className="arcu-item-title">Email us</div></div></a></li></ul></div></div><div className="arcontactus-message-button" style={{backgroundColor: '#00b98e'}}><div className="static"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Canvas" transform="translate(-825 -308)"><g id="Vector"><use xlinkHref="#path0_fill0123" transform="translate(825 308)" fill="currentColor" /></g></g><defs><path id="path0_fill0123" d="M 19 4L 17 4L 17 13L 4 13L 4 15C 4 15.55 4.45 16 5 16L 16 16L 20 20L 20 5C 20 4.45 19.55 4 19 4ZM 15 10L 15 1C 15 0.45 14.55 0 14 0L 1 0C 0.45 0 0 0.45 0 1L 0 15L 4 11L 14 11C 14.55 11 15 10.55 15 10Z" /></defs></svg><p>Contact us</p></div><div className="callback-state" style={{color: '#00b98e'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg></div><div className="icons hide"><div className="icons-line" style={{transform: 'translate(-2px, 0px)'}}><span style={{color: '#00b98e'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z" /></svg></span><span style={{color: '#00b98e'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></span><span style={{color: '#00b98e'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" /></svg></span><span style={{color: '#00b98e'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg></span></div></div><div className="arcontactus-close"><svg width={12} height={13} viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-4087 108)"><g><path transform="translate(4087 -108)" fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z" /></g></g></svg></div><div className="pulsation" style={{backgroundColor: '#00b98e'}} /><div className="pulsation" style={{backgroundColor: '#00b98e'}} /></div><div className="arcontactus-prompt arcu-prompt-top"><div className="arcontactus-prompt-close" style={{backgroundColor: '#00b98e', color: '#FFFFFF'}}><svg width={12} height={13} viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g transform="translate(-4087 108)"><g><path transform="translate(4087 -108)" fill="currentColor" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z" /></g></g></svg></div><div className="arcontactus-prompt-inner">Please use this button<br />
                to contact us!</div>
            </div>{/*/noindex*/}</div>
        </div>
      );
    }
  }

export default Footer;
