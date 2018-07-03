import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import routes from './routes';
import rootReducer from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//创建store
const store = createStore(rootReducer);
//渲染
ReactDOM.render(
    /**Provider 是 react-redux 库提供的，redux 本身并不强制依赖它，然而问题是 redux 本身也不依赖 react。
     * 作为一个纯粹的 data layer，redux 并不关心你用什么视图引擎，所以如何访问 store 是你自己需要考虑的事情，
     * redux 并不会约束你一定要怎么做。
     * react-redux 是官方提供的解决方案，Provider 本身并没有做很多事情，只是把 store放在 context 里罢了。
     * 实际上如果你用 react-redux，那么连接视图和数据层最好的办法是使用 connect 函数。本质上 Provider 就是
     * 给 connect 提供 store 用的。
     * */
    <Provider store={store}>
        { routes }
    </Provider>
    , document.getElementById('root'));
//注册服务
registerServiceWorker();
