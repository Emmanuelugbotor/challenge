import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Template() {
  return (
    <div className="template">
      <div className="title_arrows">
        <h1>An enterprise template to ramp up your company website</h1>
        <div className="arrows">
          <div className="circle_arrow">
          <ArrowBackIcon />
          </div>
          <div className="circle_arrow">
          <ArrowForwardIcon />
          </div>
        </div>
      </div>
      <div className="cards">
        <ul>
          <li>
            <p className="desc">
              “Buyer buzz partner network disruptive non-disclosure agreement
              business”
            </p>
            <div className="thumbnail_name_position">
              <div className="thumbnail">
                <img src="/image/person_1.png" alt="" />
              </div>
              <div className="name_position">
                <div className="name">Albus Dumbledore</div>
                <div className="position">Manager @ Howarts</div>
              </div>
            </div>
          </li>
          <li>
            <p className="desc">
              “Learning curve infrastructure value proposition advisor strategy
              user experience hypotheses investor.”
            </p>
            <div className="thumbnail_name_position">
              <div className="thumbnail">
                <img src="/image/person_2.png" alt="" />
              </div>
              <div className="name_position">
                <div className="name">Severus Snape</div>
                <div className="position">Manager @ Slytherin</div>
              </div>
            </div>
          </li>
          <li>
            <p className="desc">
              “Release facebook responsive web design business model canvas seed
              money monetization.”
            </p>
            <div className="thumbnail_name_position">
              <div className="thumbnail">
                <img src="/image/person_3.png" alt="" />
              </div>
              <div className="name_position">
                <div className="name">Harry Potter</div>
                <div className="position">Team Leader @ Gryffindor</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
