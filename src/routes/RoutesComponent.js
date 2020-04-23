import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

const PageNotFound = lazy(() => import('../components/NotFoundComponent'));
const LoginComponent = lazy(() => import('../components/login/LoginComponent'));
const HospitalComponent = lazy(() => import('../components/hospital/HospitalComponent'));
const ProfilesComponent = lazy(() => import('../components/profiles/ProfilesComponent'));
const PatientsComponent = lazy(() => import('../components/patients/PatientsComponent'));
const HomeComponent = lazy(() => import('../components/HomeComponent'));
const PatientHealthForm = lazy(() => import('../components/patientForm/PatientHealthForm'));

function RoutesComponent() {
  return (
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/login" exact component={LoginComponent} />
      <PrivateRoutes path="/inicio/" exact component={HomeComponent} />
      <PrivateRoutes path="/paciente/form" exact component={PatientHealthForm} />
      <PrivateRoutes path="/pacientes" exact component={PatientsComponent} />
      <PrivateRoutes path="/perfiles" exact component={ProfilesComponent} />
      <PrivateRoutes path="/hospitales" exact component={HospitalComponent} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default RoutesComponent;