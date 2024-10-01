import React from 'react'
import './App.css';
import light from './icons/light.png';
import useranywhere from './icons/usedanywhere.png';
import bestservices from './icons/bsetservices.png';
import transparency from './icons/transparency.png';
import image1 from './asstes/img1.png';
import image2 from './asstes/img2.jpg';
import image3 from './asstes/img3.jpg';
import check from './icons/check.png';
import checkmark from './icons/checkmark.png';
import ok from './icons/ok.png';
import management from './icons/management.png';
import lock from './icons/lock.png';
import opt from './icons/opt.png';
import history from './icons/history.png';
import checked from './icons/checkmarked.png';
import internationalized from './icons/ineternationalized.png';
import android from './icons/android.png';
import ios from './icons/ios.png';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
       <div className="container">
      <div className='menu-box-card'>
        <div className='list-menu-links'>
          <center>
            <ul id='headingone'>
              <li><a href=''>Features</a></li>
              <li><a href=''>Services</a></li>
              <li><a href=''>Picing</a></li>
              <li><a href=''>Careers</a></li>
              <li><a href=''>Reviews</a></li>
              <li><a href=''>FAQ</a></li>
            </ul>
          </center>
        </div>
      </div>
      <div className='top-navbar'>
        <div className='left-side'>
          <h1>CokSine</h1>
        </div>
        <div className='center-side'>
          <div className='list-menus'>
            <ul>
              <li><a href=''>Features</a></li>
              <li><a href=''>Services</a></li>
              <li><a href=''>Picing</a></li>
              <li><a href=''>Careers</a></li>
              <li><a href=''>Reviews</a></li>
              <li><a href=''>FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className='right-side'>
          <Link to="signup"><button className='signin-btn'>Sign In</button></Link>
          <button className='menu' id='menu' onClick={() => {
            document.getElementById("headingone").style.display = "block";
            document.getElementById("menu").style.display = "none";
            document.getElementById("closemenu").style.display = "block";
          }}>&#9776;</button>
          <button className='closemenu' id='closemenu' onClick={() => {
            document.getElementById("closemenu").style.display = "none";
            document.getElementById("headingone").style.display = "none";
            document.getElementById("menu").style.display = "block";
          }}>&times;</button>
        </div>
      </div>
      <div className='middle-sections'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='top-middle-box'>
          <center>
            <p>Trade with a Most Trusted Broker</p>
            <h1>Where Your Trades flourish <br/> and Success Unfolds</h1>
            <button>Get started</button>
          </center>
        </div>
      </div>
      <div className='advantages'>
        <center><br/><br/><br/>
          <div className='top-sections'>
            <p>The Advantages</p>
            <h1>The Advantages Using Our Services</h1>
            <small>We always give good feelings and impressions to each of our users. <br/> where we guarantee 3 things whe you use this platform</small>
          </div>
        </center>
        <div className='rows'>
            <div className='one-rows'>
            <div className='first-side'>
              <center>
                <img src={light}/>
                <h1>Usable To Easy</h1>
                <small>We always to make our the platform <br/>  easier every time</small>
                <p>Learn More &#10140;</p>
              </center>
            </div>
            <div className='second-side'>
              <center>
                <img src={useranywhere}/>
                <h1>Used Anywhere</h1>
                <small>Our platform is internet based that <br/>  you can use anywhere</small>
                <p>Learn More &#10140;</p>
              </center>
            </div>
            </div>
            <div className='two-rows'>
            <div className='third-side'>
              <center>
                <img src={bestservices}/>
                <h1>Best Servcies</h1>
                <small>We provide is the best services, <br/>  custimer services</small>
                <p>Learn More &#10140;</p>
              </center>
            </div>
            <div className='fourth-side'>
              <center>
                <img src={transparency}/>
                <h1>Transparency</h1>
                <small>No one was harmed becouse <br/> everything was clear and effecient</small>
                <p>Learn More &#10140;</p>
              </center>
            </div>
            </div>
          </div>
      </div><br/><br/><br/><br/>
      <center className='inspiring'>
        <h1>Inspiring Locations to Lodge</h1>
        <p>Exceptional Properties Located in <br/> Stunning Surroundings</p>
        <small>Create memorable travel moments by choosing <br/> a designer house with a warm ambiance <br/> as your accommodations.</small>
      </center>
      <center>
        <div  className='opportunity-box'>
          <div className='opportunity'>
            <div className='left-side'>
              <img src={image1}/>
            </div>
            <div className='center-side'>
              <img src={image2}/>
            </div>
          </div>
          <div className='right-side'>
              <h1>About Us</h1>
              <p>Empowering Opportunities for Underwater Explortion</p>
              <small>whether you're a novice seeking yout first underwater adventure or an experience diver looking for new challenges, each diver offters a unique glimpse into the underwater world.</small>
              <small>Once you're mastered the basic, you can take on the many green and blue runs in courchevel and Les 3 Vallees. you will be spending most of your time in the resort so you'll want to make sure that you've.</small>
          </div>
        </div>
      </center>
      <center>
      <div className='turndata'>
        <div className='left-side'>
          <center>
            <h1>Turn data into better business outcomes.</h1><br/><br/>
            <small>The most advanced B2B companies in the world know wverything about <br/> their prospects, leads and custimers, and act instantly and <br/>  precisely on buying signals across the entire buyer's journey.</small><br/><br/>
            <small>Clearbit's activation platform gives marketing and revenue teams a rich, <br/> always-fresh data foundation and solutions for converting <br/> demand, and accelerating revenue growth.</small>
          </center>
          <div className='average'>
            <button>
              <center>
                <h1>300%</h1>
                <p>Increase in new <br/> generated</p>
                <small>Chargbee</small>
              </center>
            </button>
            <button>
              <center>
                <h1>70%</h1>
                <p>Increase in form <br/> conversations</p>
                <small>Gong</small>
              </center>
            </button>
            <button>
              <center>
                <h1>40%</h1>
                <p>Decrease in cost <br/> per lead</p>
                <small>Lattice</small>
              </center>
            </button>
          </div>
          <center>
            <button className='explore'>
              <p>Explore the platform</p>
            </button>
          </center>
        </div>
        <div className='right-side'>
          <img src={image3}/>
        </div>
      </div>
      </center>
      <div className='pricing-text'>
        <h1>Choose your plan</h1>
        <p>Unlock endless possobilities</p>
      </div>
      <div className='pricing'>
        <center>
        <div className='pricing-left-box'>
          <span>Basic</span><br/>
          <small>For Personal use and exploration <br/> of AI technology.</small>
          <h1><span>$</span>0</h1>
          <button>Weekly Plan</button>
          <div className='flex'>
            <img src={ok}/>
            <p>100 requests per day</p>
          </div>
          <div className='flex'>
            <img src={ok}/>
            <p>Free trial features access</p>
          </div>
          <div className='flex'>
            <img src={ok}/>
            <p>Limited API access</p>
          </div>
        </div>
        </center>
        <center>
        <div className='pricing-center-box'>
          <span>Premium</span><br/>
          <small>Perfect for professional and small business <br/> in need of significant AI integration</small>
          <h1><span>$</span>900</h1>
          <button>Monthly Plan</button>
          <div className='flex'>
            <img src={checkmark}/>
            <p>Unlimited AI generation</p>
          </div>
          <div className='flex'>
            <img src={checkmark}/>
            <p>Full new features access</p>
          </div>
          <div className='flex'>
            <img src={checkmark}/>
            <p>Priority support</p>
          </div>
        </div>
        </center>
       <center>
       <div className='pricing-right-box'>
          <span>Enterprise</span><br/>
          <small>Perfect large business or organizations that <br/> require sepcialized support</small>
          <h1><span>$</span>3,000</h1>
          <button>Yearly Plan</button>
          <div className='flex'>
            <img src={check}/>
            <p>Custom deployment</p>
          </div>
          <div className='flex'>
            <img src={check}/>
            <p>Comprehensive usage data</p>
          </div>
          <div className='flex'>
            <img src={check}/>
            <p>Training spacialized models</p>
          </div>
        </div>
       </center>
      </div>
      <center>
      <div className='self-services'>
          <h1>Self-Services <br/>Preference Management</h1>
          <p className='text'>If you want, you can let your visitors <br/>choose the services categories they consent to.</p>
          <div className='row'>
           <div className='sec1'>
           <div className='one-side'>
              <img src={lock}/>
              <p>Prior Blocking</p>
              <small>Automatically desable third-party scripts with <br/> services until your vistors give their consent. <br/> Also available for custom code.</small>
           </div>
           <div className='two-side'>
              <img src={management}/>
              <p>Category Management</p>
              <small>Let visitors decide which services they accept: Essential, <br/> Functionality, Performance & Analytics, <br/> Targeting & Advertising.</small>
           </div>
           </div>
           <div className='sec2'>
           <div className='three-side'>
              <img src={opt}/>
              <p>Opt-out</p>
              <small>Visitors can revoke their consent directly <br/> through the footer of your website. No additional <br/> workload for your team.</small>
           </div>
           <div className='four-side'>
              <img src={history}/>
              <p>Consent History</p>
              <small>Keep track of your consent records and <br/> export them as .csv files directly from <br/> the Coksine dashboard.</small>
           </div>
           </div>
           <div className='sec3'>
           <div className='five-side'>
              <img src={checked}/>
              <p>Easy Setup</p>
              <small>Just check two boxes. No code required. <br/> Directly works with our integrations.</small>
           </div>
           <div className='six-side'>
              <img src={internationalized}/>
              <p>Internationalized</p>
              <small>Automatically translates to your cistor's preferred language. Currently available in English, German, French, Italian and Portugese.</small>
           </div>
           </div>
          </div>
      </div>
      </center>
      <div className='self-services'>
          <div className='subscribe'>
            <div className='row'>
              <div className='left-side'>
                <p>Join 2,000+ subsribers</p>
                <span>Stay in the loop with everything you need to know</span>
              </div>
              <div className='right-side'>
                <form action='' method='' autoComplete='off'>
                  <input type='email' name='email' placeholder='Enter your email'/>
                  <button type='submit' name='subscribe'>Subscribe</button><br/>
                  <center><small>We care about data in our <a href=''>privacy policy</a></small></center>
                </form>
              </div>
            </div>
          </div>
      </div>
      <div className='footer'>
        <div className='row'>
          <div className='left-side'>
            <h1>CokSine</h1>
            <button><img src={android}/><p>Download Android</p></button>
            <button><img src={ios}/><p>Download Iphone</p></button>
          </div>
          <div className='right-side'>
           <div className='semi-list'>
            <div className='lists'>
                <p>Products</p>
                <ul>
                  <li><a href=''>Features</a></li>
                  <li><a href=''>Services</a></li>
                  <li><a href=''>Pricing</a></li>
                  <li><a href=''>Careers</a></li>
                  <li><a href=''>Reviews</a></li>
                  <li><a href=''>FAQ</a></li>
                </ul>
            </div>
            <div className='lists' id='quick-link'>
              <p>Quick Links</p>
              <ul>
                <li><a href=''>Custom Forms</a></li>
                <li><a href=''>Analytics</a></li>
                <li><a href=''>Cookie Solution</a></li>
                <li><a href=''>Blogs</a></li>
                <li><a href=''>Multillingual Sites</a></li>
                <li><a href=''>User Management</a></li>
              </ul>
            </div>
           </div>
            <div className='legal'>
            <div className='lists' id='social'>
              <p>Social media</p>
              <ul>
                <li><a href=''>Youtube</a></li>
                <li><a href=''>Facebook</a></li>
                <li><a href=''>Instagram</a></li>
                <li><a href=''>Linkedin</a></li>
                <li><a href=''>Twitter X</a></li>
                <li><a href=''>TikTok</a></li>
              </ul>
            </div>
            <div className='lists' id='legal'>
              <p>Legal</p>
              <ul>
                <li><a href=''>Privacy Policy</a></li>
                <li><a href=''>Terms of Use</a></li>
                <li><a href=''>Security Policy</a></li>
                <li><a href=''>AI Generations</a></li>
                <li><a href=''>DPA</a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom-text'>
          <div className='left-side'>
            <p>10X your workflow withUntitled UI</p>
            <small>Save countless hours of design and ship great looking designs faster.</small>
          </div>
          <div className='right-side'>
            <span>@ 2077 Untitled UI, All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage
