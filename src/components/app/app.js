import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import { withIWalletsService } from '../hoc';
import { CabinetPage } from '../pages';
import WalletNavigation from '../wallet-navigation';


import './app.css';

const App = ({iWalletsService}) => {

    return (
            <div className="row">
                <Switch>
                    <Route to="/" component={ CabinetPage } exact />
                </Switch>
            </div>
    )
};

export default withIWalletsService()(App);