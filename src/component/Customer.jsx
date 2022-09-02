import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LightModeIcon from "@mui/icons-material/LightMode";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
export default function Customer() {
  return (
    <div className="customer">
      <div className="customer_up">
        <div className="left">
          <img src="/image/customer_1.png" alt="" />
          <div className="attachment">
            <img src="/image/frame.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h1>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <ul>
            <li>
              <CheckCircleIcon className="check_icon" />
              <span>We connect our customers with the best.</span>
            </li>
            <li>
              <CheckCircleIcon className="check_icon" />
              <span>Advisor success customer launch party.</span>
            </li>
            <li>
              <CheckCircleIcon className="check_icon" />
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul>
          <button className="btn start">Start now</button>
        </div>
      </div>
      <div className="customer_down">
        <div className="left">
          <h1>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <ul>
            <li>
              <HistoryEduIcon className="icon" />
              <span>We connect our customers with the best.</span>
            </li>
            <li>
              <VisibilityIcon className="icon" />
              <span>Advisor success customer launch party.</span>
            </li>
            <li>
              <LightModeIcon className="icon" />
              <span>Business-to-consumer long tail.</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <img src="/image/customer_2.png" alt="" />
          <div className="attachment">
            <div className="circle"></div>
            <ul>
              <li>35% - Agile Development</li>
              <li>30% - Investor bandwidth</li>
              <li>35% - A/B testing </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
