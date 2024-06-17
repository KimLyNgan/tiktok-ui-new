import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AcountItem() {
   return (
      <div className={cx("wrapper")}>
         <img
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=65206&refresh_token=364598b7179ca183de3c286d5987cc34&x-expires=1718805600&x-signature=t8P3HdsCuxDM5%2BFalldgwIoABTw%3D&shp=a5d48078&shcp=81f88b70"
            className={cx("avatar")}
            alt="unknow"
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>An Hii</span>
               <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </h4>
            <span className={cx("username")}>anhii</span>
         </div>
      </div>
   );
}

export default AcountItem;
