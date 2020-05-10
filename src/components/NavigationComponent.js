import React from 'react';
import uuid from 'uuid4';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import RouteListConfig from '../routes/RoutesListConfig';
import { useAuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles(theme => ({
  navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    '& > *': {
      textTransform: 'none',
      padding: 2,
      fontSize: '0.7rem'
    },
    activeLink: {
      color: 'red'
    }
  }
}));

export function NavigationMenuComponent({ onClick }) {
  const { currentUserProfile } = useAuthContext();
  return (
    <>
      {currentUserProfile &&
        RouteListConfig.filter(route => route.navegation)
          .filter(route => route.roles.includes(currentUserProfile.role.id))
          .map(route => (
            <MenuItem
              color="inherit"
              key={uuid()}
              component={NavLink}
              to={route.path}
              onClick={onClick}
              activeStyle={{
                background: 'rgba(0,0,0,0.1)'
              }}
            >
              {route.label}
            </MenuItem>
          ))}
      <Divider />
    </>
  );
}

export function NavigationLargeComponent() {
  const { currentUserProfile } = useAuthContext();
  const classes = useStyles();
  return (
    <>
      {currentUserProfile && (
        <Container className={classes.navigation}>
          {currentUserProfile &&
            RouteListConfig.filter(route => route.navegation)
              .filter(route => route.roles.includes(currentUserProfile.role.id))
              .map(route => (
                <Button
                  color="inherit"
                  key={uuid()}
                  component={NavLink}
                  to={route.path}
                  activeStyle={{
                    background: 'rgba(255,255,255,0.5)'
                  }}
                >
                  {route.label}
                </Button>
              ))}
        </Container>
      )}
    </>
  );
}
