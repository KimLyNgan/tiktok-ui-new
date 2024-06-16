//Layouts
import { HeaderOnly } from "~/components/Layout";
//Pages
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Proflie from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Proflie },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
