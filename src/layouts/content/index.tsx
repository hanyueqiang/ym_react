import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import routers from '@/router';
import './index.less';
const { Content } = Layout;

const ContentLayout = () => {
  return (
    <Layout>
      <Content className="content">
        <Switch>
          {routers.map((route, index) => (
            <RouteWithSubRouters key={index} {...route} />
          ))}
        </Switch>
      </Content>
    </Layout>
  );
};
export default ContentLayout;
interface RouteType {
  path: string;
  component: any;
  routes?: any;
}

const RouteWithSubRouters = (route: RouteType) => {
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
};
