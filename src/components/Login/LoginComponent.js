import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Form } from 'react-final-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useAuthContext } from '../../contexts/AuthContext';
import loginValidate from './AuthFormValidation';
import AuthFormsTitleComponent from './AuthFormsTitleComponent';
import ErrorMessageComponent from './ErrorMessageComponent';
import SaveButton from '../buttons/SaveButton';
import CustomTextFieldComponent from '../inputs/CustomTextFieldComponent';
import useCustomStyles from '../../jss/globalStyles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LoginComponent() {
  const { signInUser } = useAuthContext();

  const classes = useCustomStyles();

  const onSubmit = async (value, form) => {
    await signInUser(value);
    setTimeout(form.reset);
  };

  return (
    <>
      <Card className={classes.loginRoot}>
        <CardHeader title={<ErrorMessageComponent />} />
        <CardHeader title={<AuthFormsTitleComponent title="Acceder" />} />
        <CardContent>
          <Form
            onSubmit={onSubmit}
            validate={loginValidate}
            render={({ handleSubmit, submitting, pristine }) => (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <CustomTextFieldComponent
                      required
                      type="email"
                      label="Usuario"
                      name="username"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextFieldComponent
                      required
                      variant="outlined"
                      type="password"
                      label="Contraseña"
                      name="password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SaveButton
                      size="medium"
                      disableElevation={false}
                      className={classes.formControl}
                      invalid={false}
                      submitting={submitting}
                      pristine={pristine}
                      title="acceder"
                    />
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </CardContent>
      </Card>
      <Box mt={8}>
        <Copyright />
      </Box>
    </>
  );
}

LoginComponent.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'Login'
};

export default LoginComponent;
