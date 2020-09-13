import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';

const Home = React.lazy(() => import('./routes/Home'));

const App = () => {
    return (
        <div className="content">
            <Router>
                <React.Suspense fallback={<div>1</div>}>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Home />
                        </Route>
                    </Switch>
                </React.Suspense>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
