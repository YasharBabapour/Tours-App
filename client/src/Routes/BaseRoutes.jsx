
import { BaseLayout } from "../layout/BaseLayout";
import HomePage from "../pages/Homepage";
import {  Route, Switch } from 'react-router-dom';
import { ListToursPage } from "../pages/Tour/ListToursPage";
import { TourPage } from "../pages/Tour/TourPage";
import { ListReservedToursPage } from "../pages/Tour/ListReservedToursPage";

export const BaseRoutes = () => {
   return (
      <BaseLayout>
         <Switch>
            <Route path="/tours/:tourId" ><TourPage/></Route>
            <Route path="/tours"><ListToursPage/></Route>
            <Route path="/reserved"><ListReservedToursPage/></Route>
            <Route path="/"><HomePage/></Route>
         </Switch>
      </BaseLayout>
   )
}