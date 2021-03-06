import React from 'react';
import { Link } from 'react-router-dom';

class FooterSection extends React.Component {
  render() {
    return(
     <div className="footer-fixed">
          <footer className="footer-1 bg1 p-y-80 p-x-20 cu-tweenmax"
              data-a-init="alpha:0"
              data-a-to="alpha:1, duration:0.9,ease:Cubic.easeOut"
          >
              <div className="m-w-1600 wrap flex">
                  <div className="column column1 flex-box-16p"  >
                        <img id="logo-2" src="https://raw.githubusercontent.com/mvaleriani/Shallow/master/docs/app/assets/images/shallowLogo2.png" alt="" />
                      
                  </div>
                  <div className="column column2 flex flex-box-50p">
                      <div>
                          <div className="color1 f-medium">Sections</div>
                          <ul className="list list-no-style t-14  m-t-40">
                              <li>
                                  <Link className="button-style6 type2" to="/">
                                      <div className="bg"></div>
                                      <span>Home</span>
                                  </Link>
                              </li>
                              <li>
                                <Link className="button-style6 type2" to='/about'>
                                    <div className="bg"></div>
                                    <span>Our Team</span>
                                </Link>
                              </li>
                              <li>
                                    <a className="button-style6 type2" href="https://github.com/mvaleriani/Shallow">
                                      <div className="bg"></div>
                                      <span>GitHub</span>
                                  </a>
                              </li>
                          </ul>
                      </div>

                      <div>
                          <div className="color1 f-medium">Contact</div>
                          <ul className="list list-no-style t-14  m-t-40">
                                <li>vggshallow@gmail.com</li>
                                
                              {/* <li>1-800-456-7823</li>
                              <li>1900 West Hollywood, CA, 90204</li> */}
                          </ul>
                      </div>
                  </div>
                  <div className="column column3 flex flex-align-center flex-grow">
                      <div className="chat-button v-a-m" >
                          <div id="footer-ball" className="ball box-shadow1">
                                <img id="footer-shallow-icon" src="https://raw.githubusercontent.com/mvaleriani/Shallow/master/docs/app/assets/images/icon.png"/>
                          </div>
                         
                      </div>
                  </div>
              </div>
          </footer>
          <footer className="footer-2">
              <div className="flex flex-justify-between max-width">
                  <div className="t-12">Please note that our front end analysis tool is still currently in development. </div>

              </div>
          </footer>
      </div>
    );
  }
}

export default FooterSection;
