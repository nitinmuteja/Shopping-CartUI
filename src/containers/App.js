import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from '@material-ui/core';

import '../App.css';
import {urls} from "../config/env-config";
import HomeContainer from './Home/HomeContainer';
import ProductDetailsContainer from "./ProductDetails/ProductDetailsContainer";
import AddressDetailsContainer from "./AddressDetails/AddressDetailsContainer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";





class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        const res = await fetch(urls.applicationName);
        const json = await res.json();
        this.setState({name: json.name})

    }

    render() {
        return (

                    <Router>
                        <AppBar position="relative">
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Team 1 Book Store
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Route component={HomeContainer} exact path="/" />
                            <Route component={ProductDetailsContainer} path="/product" />
                            <Route component={AddressDetailsContainer} path="/address" />
                    </Router>


        );
    }
}

export default App;
