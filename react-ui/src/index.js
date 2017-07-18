import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/App'
import Contact from './components/Contact'
import registerServiceWorker from './registerServiceWorker'



import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './redux/index.js'

const middleware = applyMiddleware(thunk, createLogger());
export const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/contact" component={Contact} />
            </div>
        </Router>
    </Provider>,
     document.getElementById('root'));

registerServiceWorker();
