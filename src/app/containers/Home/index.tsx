import { renderRoutes, RouteItem } from "../../routes";
import Counter from "../Counter";
import TableList from "../TableList";
import withLayout from "../../components/Layout";
import { routes as appRoutes } from "../../constants";

const routes: RouteItem[] = [
  {
    isExact: true,
    path: appRoutes.counter,
    component: withLayout(<Counter />, "counter"),
  },
  {
    path: appRoutes.tableList,
    component: withLayout(<TableList />, "list"),
  },
];

interface IProps {}

const Home = (props: IProps) => {
  return <div>{renderRoutes(routes)}</div>;
};

export default Home;
