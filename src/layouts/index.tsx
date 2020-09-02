import React from 'react';
import { Layout } from 'antd';
import HeaderMain from './header';
import SliderMain from './silder';
import ContentMain from './content';

export default () => {
  return (
    <Layout>
      <HeaderMain />
      <Layout>
        <SliderMain />
        <ContentMain />
      </Layout>
    </Layout>
  );
};
