import CompanyLogo from "./CompanyLogo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header">
      <div className="main_header">
        <Nav />
        <div className="header_main">
          <div className="left">
            <h1>Save time by building fast with Boldo Template</h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
            <div className="button_wrapper">
              <button className="btn template">Buy template</button>
              <button className="btn explore">Explore</button>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <img src="/image/frame_1.png" alt="" />
            </div>
            <div className="bottom">
              <div className="second_img">
                <img src="/image/frame_2.png" alt="" />
              </div>
              <div className="second_img">
                <img src="/image/frame_2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="header_main_bottom">
          <ul>
            <li><CompanyLogo/></li>
            <li><CompanyLogo/></li>
            <li><CompanyLogo/></li>
            <li><CompanyLogo/></li>
            <li><CompanyLogo/></li>
            <li><CompanyLogo/></li>
          </ul>
        </div> */}
      </div>
      <div className="circle"></div>
    </div>
  );
}
