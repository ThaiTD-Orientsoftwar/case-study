import { BrowserRouter as Router, Route } from "react-router-dom";

interface RouteItem {
  path: string;
  isExact?: boolean;
  component: React.ReactElement;
}

const renderRoutes = (routes: RouteItem[]) => {
  return (
    <Router>
      {routes.map((route: RouteItem) => (
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          component={(props: any) => route.component}
        />
      ))}
    </Router>
  );
};

export { renderRoutes };
export type { RouteItem };
