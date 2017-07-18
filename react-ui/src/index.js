import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'



import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './redux/index.js'

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);

ReactGA.initialize('UA-53642101-2')
function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={logPageView}>
            <div>
                <Route exact path="/" component={App} />
            </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();
