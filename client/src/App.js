import React, { useEffect } from "react";
import { BaseRoutes } from "./Routes/BaseRoutes";
import { AuthRoutes } from "./Routes/AuthRoutes";
import { AdminRoutes } from "./Routes/AdminRoutes";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { setAuthToken } from "./helper/auth";
import { Logout } from "./pages/Auth/Logout";



export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/logout" >
          <Logout />
        </Route>
        <Route path="/admin">
          <AdminRoutes />
        </Route>
        <Route path="/auth">
          <AuthRoutes />
        </Route>
        <Route path="/">
          <BaseRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}