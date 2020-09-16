import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { DEFAULT_YOUTUBE_KEY, YOUTUBE_KEY } from './api/youtube';
import Footer from './components/Footer/Footer';

const Home = React.lazy(() => import('./routes/Home'));

const App = () => {
    React.useEffect(() => {
        const key = window.localStorage.getItem(YOUTUBE_KEY);
        if (!key) {
            window.localStorage.setItem(YOUTUBE_KEY, DEFAULT_YOUTUBE_KEY);
        }
    }, []);

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
