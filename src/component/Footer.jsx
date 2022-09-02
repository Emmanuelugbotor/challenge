import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CompanyLogo from "./CompanyLogo";
export default function Footer() {
  return (
    <div className="footer">
      <div className="image_d">
        <img src="/image/footer_1.png" alt="" />
      </div>
      <div className="cust_list">
        <h2>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h2>
        <div className="list">
          <ul>
            <li>
              <span>We connect our customers with the best?</span>
              <CheckCircleIcon />
            </li>
            <li>
              <span>Android research & development rockstar?</span>
              <CheckCircleIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="blog">
        <div className="title">Our Blog</div>
        <h2 className="heading">
          Value proposition accelerator product management venture
        </h2>
        <div className="blog_gallery">
          <ul>
            <li>
              <div className="image">
                <img src="/image/blog_1.png" alt="" />
              </div>
              <div className="category_date">
                <span className="category">Category</span>
                <span className="date">November 22, 2021</span>
              </div>
              <p className="desc">
                Pitch termsheet backing validation focus release.
              </p>
              <div className="thumb_name">
                <div className="thumb">
                  <img src="/image/one.png" alt="" />
                </div>
                <div className="name">Chandler Bing</div>
              </div>
            </li>
            <li>
              <div className="image">
                <img src="/image/blog_2.png" alt="" />
              </div>
              <div className="category_date">
                <span className="category">Category</span>
                <span className="date">November 22, 2021</span>
              </div>
              <p className="desc">
                Seed round direct mailing non-disclosure agreement graphical
                user interface rockstar.
              </p>
              <div className="thumb_name">
                <div className="thumb">
                  <img src="/image/two.png" alt="" />
                </div>
                <div className="name">Rachel Green</div>
              </div>
            </li>
            <li>
              <div className="image">
                <img src="/image/blog_3.png" alt="" />
              </div>
              <div className="category_date">
                <span className="category">Category</span>
                <span className="date">November 22, 2021</span>
              </div>
              <p className="desc">
                Beta prototype sales iPad gen-z marketing network effects value
                proposition
              </p>
              <div className="thumb_name">
                <div className="thumb">
                  <img src="/image/three.png" alt="" />
                </div>
                <div className="name">Monica Geller</div>
              </div>
            </li>
          </ul>
        </div>
        <button className="load_more">Load more</button>
      </div>
      <div className="subscription_section">
        <h2>An enterprise template to ramp up your company website</h2>
        <div className="search_handler">
          <input type="text" placeholder="Your email address" />
          <button type="submit">Start now</button>
        </div>
        <div className="clip_path"></div>
      </div>
      <div className="main_footer">
        <div className="left">
          <CompanyLogo />
          <div className="content">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </div>
          <div className="copyright">All rights reserved.</div>
        </div>
        <div className="right">
          <ul>
            <li>
              <p>Landings</p>
              <span>Home</span>
              <span>Products</span>
              <span>Services</span>
            </li>
            <li className="special">
              <p>Company</p>
              <span>Home</span>
              <span>Careers</span>
              <span>Services</span>
            </li>
            <li>
              <p>Resources</p>
              <span>Blog</span>
              <span>Products</span>
              <span>Services</span>
            </li>
            <li>
              <CompanyLogo />
              <div className="content">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </div>
              <div className="copyright">All rights reserved.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
