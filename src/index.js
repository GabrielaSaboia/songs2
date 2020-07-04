//outside dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //component in react redux library
import { createStore } from 'redux'; //function
//own code
import App from './components/App';
import reducers from './reducers'; //reducers created

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root'));