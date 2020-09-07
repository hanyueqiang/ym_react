import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ConfigProvider } from 'antd';
import LayoutMain from './layouts';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './global.less';

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ConfigProvider locale={zhCN}>
        <Switch>
          <LayoutMain />
        </Switch>
        <LayoutMain />
      </ConfigProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
