import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { Wrapper as ProperWraper } from "~/components/Poper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];

   const renderItem = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         placement="bottom-end"
         offset={[12, 8]}
         delay={[0, 700]}
         interactive={true}
         render={(attrs) => (
            <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
               <ProperWraper className={cx("menu-poper")}>
                  {history.length > 1 && (
                     <Header
                        title="Language"
                        onBack={() => {
                           setHistory((prev) => prev.slice(0, prev.length - 1));
                        }}
                     />
                  )}
                  {renderItem()}
               </ProperWraper>
            </div>
         )}
         onHide={() => {
            setHistory((prev) => prev.slice(0, 1));
         }}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
