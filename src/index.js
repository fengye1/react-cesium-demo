import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "cesium/Source/Widgets/widgets.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";
buildModuleUrl.setBaseUrl('./cesium/');


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
