import ReactDOM from 'react-dom';
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
    <ConfigProvider locale={zhCN}>
      <LayoutMain />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root'),
);
