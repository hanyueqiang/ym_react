import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SliderMain = () => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<MailOutlined />}>
          <Link to="/home">Navigation One </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <Link to="/novels">Navigation Two</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SliderMain;
