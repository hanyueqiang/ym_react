import React from 'react';

import { Layout } from 'antd';
const { Header } = Layout;

import './index.less';

const HeaderLayout = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <div className="title">welcome</div>
    </Header>
  );
};
export default HeaderLayout;
