import React from 'react'
import {  Route, Switch,Redirect } from 'react-router-dom';
import { NewAccountPage } from '../pages/Admin/Users/NewAccountPage';
import { AdminLayout } from '../layout/AdminLayout';
import { UsersListPage } from '../pages/Admin/Users/UsersListPage';
import { UserProfilePage } from '../pages/Admin/Users/UserProfilePage';
import { ToursListPage } from '../pages/Admin/Tours/ToursListPage';
import { TouresAdd } from '../pages/Admin/Tours/ToureAddPAge';
import { TourPage } from '../pages/Admin/Tours/TourPage';
import { TourUpdatePage } from '../pages/Admin/Tours/TourUpdatePage';
import { ReservesListPage } from '../pages/Admin/Reserves/ReservesListPage';
import { ReserveDetails } from '../pages/Admin/Reserves/ReserveDetails';
import { DashboardPage } from '../pages/Admin/Dashboard/DashboardPage';
import { MyProfilePage } from '../pages/Admin/Dashboard/MyProfilePage';
import { UserUpdateProfile } from '../pages/Admin/Users/UserUpdateProfile';



export const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin/users/list" component={UsersListPage} />
        <Route path="/admin/users/new" component={NewAccountPage} />
        <Route path="/admin/users/profile/:userId" component={UserProfilePage} />
        <Route path="/admin/users/edit/:userId" component={UserProfilePage }/>
        
        <Route path="/admin/profile" component={MyProfilePage} />
        <Route path="/admin/dashboard" component={DashboardPage} />
        
        <Route path="/admin/tours/list" component={ToursListPage} />
        <Route path="/admin/tours/add" component={TouresAdd} />
        <Route path="/admin/tours/:tourId/view" component={TourPage} />
        <Route path="/admin/tours/:tourId/eidt" component={TourUpdatePage} />
        
        <Route path="/admin/reserves" component={ReservesListPage} />
        <Route path="/admin/reserves/:reserveId/details" component={ReserveDetails} />
        
        <Route path="*">
          <Redirect to="/admin/dashboard" />
        </Route>
      </Switch>
    </AdminLayout>
  );
};