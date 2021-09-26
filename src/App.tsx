import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Weather from "./components/Weather";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'}>
                    <Weather/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
