// function About() {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">About Us</h1>
//         <p className="text-gray-700 text-lg">
//           This is a simple e-commerce skeleton website built with React, Redux, React Router, and Tailwind CSS.
//         </p>
//       </div>
//     );
//   }

//   export default About;


import "./About.css";
import about_img from "../assets/images/about_img.png";
import service from "../assets/images/Services.png";
import service2 from "../assets/images/Services2.png";
import service3 from "../assets/images/Services3.png";
import service4 from "../assets/images/Services4.png";
import service5 from "../assets/images/Services5.png";
import service6 from "../assets/images/Services6.png";

import p1 from "../assets/images/about_p.png";
import p2 from "../assets/images/about_p2.png";
import p3 from "../assets/images/about_p3.png";

import app_store from "../assets/images/appstore.png";
import google_play from "../assets/images/google_p.png";
import qr from "../assets/images/qr_code.png";



import socials from "../assets/images/socials.png";
import send_icon from "../assets/images/icon-send.png";


function About() {
  return (
    <div>

      <div className="about-container">
        <div className="main_about">

          <div>
            <h1 className="about-title">Our Story</h1>
            <p className="about-text">
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>

          <div>
            <img src={about_img} alt="" />
          </div>
        </div>
      </div>


      <div className="box_container">
        <div className="box_div">
          <img src={service} alt="" />
          <p className="bold_p">10.5k </p>
          <p className="text_p">Sallers active our site</p>
        </div>

        <div className="box_div">
          <img src={service2} alt="" />
          <p className="bold_p">10.5k </p>
          <p className="text_p">Sallers active our site</p>
        </div>

        <div className="box_div">
          <img src={service3} alt="" />
          <p className="bold_p">10.5k </p>
          <p className="text_p">Sallers active our site</p>
        </div>
      </div>


      <section>
        <div className="main_people_div">
          <div className="people_div">
            <img src={p1} alt="" />
            <p className="c_name">Tom Cruise</p>
            <p className="c_p">Founder & Chairman</p>
            <img src={socials} alt="" />
          </div>

          <div className="people_div">
            <img src={p2} alt="" />
            <p className="c_name">Emma Watson</p>
            <p className="c_p">Managing Director</p>
            <img src={socials} alt="" />
          </div>

          <div className="people_div">
            <img src={p3} alt="" />
            <p className="c_name">Will Smith</p>
            <p className="c_p">Product Designer</p>
            <img src={socials} alt="" />
          </div>
        </div>
      </section>


      <section>
        <div className="box_container">
          <div className="box_div">
            <img src={service4} alt="" />
            <p className="bold_p">FREE AND FAST DELIVERY </p>
            <p className="text_p">Free delivery for all orders over $140</p>
          </div>

          <div className="box_div">
            <img src={service5} alt="" />
            <p className="bold_p">24/7 CUSTOMER SERVICE </p>
            <p className="text_p">Friendly 24/7 customer support</p>
          </div>

          <div className="box_div">
            <img src={service6} alt="" />
            <p className="bold_p">MONEY BACK GUARANTEE </p>
            <p className="text_p">We reurn money within 30 days</p>
          </div>
        </div>
      </section>


      <footer>
        <div className="main_footer_div">

          <div className="foot1">
            <h5 className="f1_h5">Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="input_div">
              <input type="text" className="inp1" placeholder="Enter your email" />
              <img src={send_icon} alt="" className="icon_img" />
            </div>
          </div>

          <div className="foot1">
            <h5 className="f1_h5">Support</h5>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          <div className="foot1">
            <h5 className="f1_h5">Account</h5>
            <p>My Account</p>
            <p>Cart</p>
            <p>Wishlist</p>
          </div>

          <div className="foot1">
            <h5 className="f1_h5">Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
          </div>

          <div className="foot1">
            <h5 className="f1_h5">Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className="img_div">
              <img src={qr} alt="" />
              <div className="instal_apps">
                <img src={google_play} alt="" />
                <img src={app_store} alt="" />
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>

  );
}

export default About;
