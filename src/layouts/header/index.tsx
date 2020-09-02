import React from 'react';

import { Layout } from 'antd';
const { Header } = Layout;

import './index.less';

const HeaderLayout = () => {
  return (
    <Header className="header quality-header">
      <div className="logo" />
      <h1 className="title">welcome</h1>
    </Header>
  );
};
export default HeaderLayout;
