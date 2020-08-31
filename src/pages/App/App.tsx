import React from 'react';
import routers from '@/router/index';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.less';

export default () => {
  return (
    <Router>
      <nav>
        <Link to="/">首页</Link>
        <span> | </span>
        <Link to="/novels">小说</Link>
        <span> | </span>
        <Link to="/authors">作者</Link>
      </nav>
      <Switch>
        {routers.map((route, index) => (
          <RouteWithSubRouters key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

interface RouteType {
  path: string;
  component: Function;
  routes?: object;
}

function RouteWithSubRouters(route: RouteType) {
  return (
    <Route
      path={route.path}
      render={props => {
        return (
          <React.Suspense fallback={<div>加载中...</div>}>
            <route.component {...props} routes={route.routes} />
          </React.Suspense>
        );
      }}
    />
  );
}
