import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "~/components/Button";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import { Wrapper as ProperWraper } from "~/components/Poper";
import AcountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 3000);
   }, []);
   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <img src={images.logo} alt="Tiktok" />
            <Tippy
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
            </Tippy>
            <div className={cx("action")}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
