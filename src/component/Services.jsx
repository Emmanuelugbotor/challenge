import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Services() {
  return (
    <div className="services">
      <h2 className="title">Our services</h2>
      <h1>Handshake infographic mass market crowdfunding iteration.</h1>
      <div className="service_offer">
        <ul>
          <li>
            <div className="image">
              <img src="/image/gala_1.png" alt="" />
            </div>
            <div className="desc">Cool feature title</div>
            <div className="indicator">
              <span> Explore page</span>
              <ArrowRightAltIcon className="icon_"/>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/image/gala_2.png" alt="" />
            </div>
            <div className="desc">Even cooler feature</div>
            <div className="indicator">
              <span> Explore page</span>
              <ArrowRightAltIcon className="icon_"/>
            </div>
          </li>
          <li>
            <div className="image">
              <img src="/image/gala_3.png" alt="" />
            </div>
            <div className="desc">Cool feature title</div>
            <div className="indicator">
              <span> Explore page</span>
              <ArrowRightAltIcon className="icon_"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
