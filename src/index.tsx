import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./sass/common.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import { theme } from "./theme/theme";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <BrowserRouter basename="/dashboard">
    {/* <HashRouter  basename="/dashboard"> */}
      <Provider store={store}>
        <ConfigProvider theme={theme}>
          <App />
        </ConfigProvider>
      </Provider>
    {/* </HashRouter > */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
