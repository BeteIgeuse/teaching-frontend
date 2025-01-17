import React, {  } from 'react'
import { Route, Switch } from 'react-router'
import Cooperation from '../../pages/Cooperation'
import Help from '../../pages/Help'
import Product from '../../pages/Product'
import Home from '../../pages/Home';

export default function HomeContent() {

    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/product" component={ Product } />
            <Route exact path="/cooperation" component={ Cooperation } />
            <Route exact path="/Help" component={ Help } />
        </Switch>
    )
}
