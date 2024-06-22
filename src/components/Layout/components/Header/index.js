import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleQuestion,
   faCircleXmark,
   faCloudUpload,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faSignOut,
   faSpinner,
   faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { Wrapper as ProperWraper } from "~/components/Poper";
import AcountItem from "~/components/AccountItem";
import Menu from "~/components/Poper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEM = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "English",
      children: {
         title: "Language",
         data: [
            {
               code: "en",
               title: "English",
            },
            {
               code: "vi",
               title: "Tiếng Việt",
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback and help",
      to: "/feedback",
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
   },
];

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   const currentUser = true;
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 3000);
   }, []);
   const handleMenuChange = (menuItem) => {
      console.log("tu header tong", menuItem);
   };
   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: "View profile",
         to: "/avatar",
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: "Get coins",
         to: "/coin",
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: "Setting",
         to: "/setting",
      },
      ...MENU_ITEM,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: "Log out",
         to: "/logout",
         separate: true,
      },
   ];
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <img src={images.logo} alt="Tiktok" />
            <HeadlessTippy
               visible={searchResult.length > 0}
               interactive={true}
               render={(attrs) => (
                  <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                     <ProperWraper>
                        <h4 className={cx("search-title")}>Acounts</h4>
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                     </ProperWraper>
                  </div>
               )}
            >
               <div className={cx("search")}>
                  <input placeholder="Search accounts and videos" spellCheck={false} />
                  <button className={cx("clear")}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                  <button className={cx("search-btn")}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadlessTippy>
            <div className={cx("actions")}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx("action-btn")}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=65206&refresh_token=364598b7179ca183de3c286d5987cc34&x-expires=1718805600&x-signature=t8P3HdsCuxDM5%2BFalldgwIoABTw%3D&shp=a5d48078&shcp=81f88b70"
                        className={cx("user-avatar")}
                        alt="avatar"
                     />
                  ) : (
                     <button className={cx("more-btn")}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
