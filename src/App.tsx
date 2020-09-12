import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./routes/Home'));

const App = () => {
    return (
        <Router>
            <React.Suspense fallback={<div>1</div>}>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                </Switch>
            </React.Suspense>
        </Router>
    );
};

export default App;
