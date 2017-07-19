import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import Spacechat from './components/Spacechat'
import Lingoly from './components/Lingoly'
import Covfefe from './components/Covfefe'
// import Life from './components/Life'


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
                <Route exact path="/spacechat" component={Spacechat} />
                <Route exact path="/lingoly" component={Lingoly} />
                <Route exact path="/covfefe" component={Covfefe} />
                {/* <Route exact path="/life" component={Life} /> */}
            </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();
