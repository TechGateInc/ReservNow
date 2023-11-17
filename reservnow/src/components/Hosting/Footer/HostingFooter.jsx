import "./hostingFooter.css";
import { TfiWorld } from "react-icons/tfi";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const HostingFooter = ({}) => {
  return (
    <div className="hosting-footer-root">
      <div className="hosting-footer-content">
        <div className="individual-content">
          <div className="title">Support</div>
          <ul>
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>
        <div className="individual-content">
          <div className="title">Hosting</div>
          <ul>
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>
        <div className="individual-content">
          <div className="title">ReservNow</div>
          <ul>
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>
      </div>
      <div className="below">
        <div className="footer-left">
          <p>© 2023 ReservNow, Inc.</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Privacy</p>
          <p>Your Privacy Choices</p>
        </div>
        <div className="footer-right">
          <TfiWorld style={{ fontSize: "20px" }} />
          <p>English (US)</p>
          <p>$ USD</p>
          <div className="icons">
            <AiFillFacebook style={{ fontSize: "25px" }} />
            <AiFillTwitterSquare
              style={{ fontSize: "25px", marginLeft: "5px" }}
            />
            <AiFillInstagram style={{ fontSize: "25px", marginLeft: "5px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingFooter;
