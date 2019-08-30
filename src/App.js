import 'uswds/dist/css/uswds.css';
import 'uswds/dist/js/uswds';

import React from 'react';
import './App.scss';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import SignInContainer from "./containers/SignInContainer";
import Footer from "./components/Footer";


// {/*<div className="App">*/}
// {/*    <OfficialSiteBanner/>*/}
// {/*    <Header/>*/}
//
// {/*    <AppRouter/>*/}
//
// {/*    <div className="grid-container">*/}
// {/*        <div className="grid-row">*/}
// {/*            <form className="usa-form">*/}
// {/*                <fieldset className="usa-fieldset">*/}
// {/*                    <legend className="usa-legend">Sign in</legend>*/}
// {/*                    <span>or <a href="javascript:void(0);">create an account</a></span>*/}
//
// {/*                    <label className="usa-label" htmlFor="username">Username or email address</label>*/}
// {/*                    <input className="usa-input" id="username" name="username" type="text" autoCapitalize="off"*/}
// {/*                           autoCorrect="off"/>*/}
//
// {/*                    <label className="usa-label" htmlFor="password-sign-in">Password</label>*/}
// {/*                    <input className="usa-input" id="password-sign-in" name="password" type="password"/>*/}
// {/*                    <p className="usa-form__note">*/}
// {/*                        <a title="Show password" href="javascript:void(0);"*/}
// {/*                           className="usa-show-password"*/}
// {/*                           aria-controls="password-sign-in">Show password</a>*/}
// {/*                    </p>*/}
//
// {/*                    <input className="usa-button" type="submit" value="Sign in"/>*/}
// {/*                    <p><a href="javascript:void(0);" title="Forgot username">*/}
// {/*                        Forgot username?</a></p>*/}
// {/*                    <p>*/}
// {/*                        <a href="javascript:void(0);" title="Forgot password">*/}
// {/*                            Forgot password?</a>*/}
// {/*                    </p>*/}
// {/*                </fieldset>*/}
// {/*            </form>*/}
// {/*        </div>*/}
// {/*    </div>*/}
// {/*</div>*/}

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <main id="main-content">
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/sign-in" component={SignInContainer}/>
                </main>
                {/*<Route path="/topics" component={Topics}/>*/}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
