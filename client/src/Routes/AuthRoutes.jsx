import React from 'react'
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import {  Route, Switch } from 'react-router-dom';

export const AuthRoutes = () => {
   return (
      <Switch>
      <Route path="/auth/login">
         <Login/>
      </Route>
      <Route path="/auth/register">
         <Register/>
      </Route>
    </Switch>
      )
}
