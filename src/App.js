import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from './Loading';
import Anime from './Anime';

const App = () => (
    <Router basename="/annoying-thing">
        <div>
            <Route exact path="/" component={Loading} />
            <Route path="/anime" component={Anime} />
        </div>
    </Router>
);

export default App;
