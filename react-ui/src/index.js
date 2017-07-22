import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import Spacechat from './components/Spacechat'
import Lingoly from './components/Lingoly'
import Covfefe from './components/Covfefe'
// import Life from './components/Life'
import NoMatch from './components/NoMatch'


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
        <Router onUpdate={logPageView} >
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/spacechat" component={Spacechat} />
                    <Route path="/lingoly" component={Lingoly} />
                    <Route path="/covfefe" component={Covfefe} /> 
                    <Route component={NoMatch} />
                {/* <Route exact path="/life" component={Life} /> */}
                </Switch>
            </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();
