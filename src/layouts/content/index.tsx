import React from 'react';

import { Layout } from 'antd';
const { Content } = Layout;
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routers from '@/router';

import './index.less';

export default () => {
  return (
    <Layout className="content-quality">
      <Content className="content-quality-main">
        <Router>
          <Switch>
            {routers.map((route, index) => (
              <RouteWithSubRouters key={index} {...route} />
            ))}
          </Switch>
        </Router>
      </Content>
    </Layout>
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
