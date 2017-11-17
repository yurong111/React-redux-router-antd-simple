
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import toduReducer from '../store/reducer.jsx'
let store = createStore(toduReducer);

import Home from 'bundle-loader?lazy&name=app-[name]!../view/Home'
import Blog from 'bundle-loader?lazy&name=app-[name]!../view/Blog'
import Resume from 'bundle-loader?lazy&name=app-[name]!../view/Resume'

import Bundle from '../component/Bundle/index'

const HomeContainer = (props) => (
    <Bundle load={Home}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)

const ResumeContainer = (props) => (
    <Bundle load={Resume}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)

const BlogContainer = (props) => (
    <Bundle load={Blog}>
        {(Comm) => <Comm {...props}/>}
    </Bundle>
)


class InitLayout extends React.Component {

    render() {
        return (
            <div>
                {/*<h1>Welcome React-redux-router-antd!</h1>*/}
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>

                <Route exact path="/" component={HomeContainer}/>
                <Route path="/resume" component={ResumeContainer}/>
                <Route path="/blog"  component={BlogContainer}/>
            </div>
        )
    }
}

const App = () =>
    <BrowserRouter>
        <Provider store={store}>
            <InitLayout />
        </Provider>
    </BrowserRouter>;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

