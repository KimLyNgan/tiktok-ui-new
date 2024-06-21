import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as ProperWraper } from "~/components/Poper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItem = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };
   return (
      <Tippy
         placement="bottom-end"
         delay={[0, 700]}
         interactive={true}
         render={(attrs) => (
            <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
               <ProperWraper className={cx("menu-poper")}>{renderItem()}</ProperWraper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
