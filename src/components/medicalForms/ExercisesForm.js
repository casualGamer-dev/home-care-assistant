import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'mui-rff';
import Typography from '@material-ui/core/Typography';
import DateFieldComponent from '../fields/DateFieldComponent';
import TimeFieldComponent from '../fields/TimeFieldComponent';

function ExercisesForm({ classStyle }) {
  return (
    <div>
      <Typography className={classStyle.titleForms} variant="subtitle1">
        Actividad fisica:
      </Typography>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="Distancia"
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={classStyle.formControl}
            name="distance"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="Tiempo"
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={classStyle.formControl}
            name="time"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            label="Pasos"
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            className={classStyle.formControl}
            name="steps"
          />
        </Grid>
        <DateFieldComponent classes={classStyle} name="exercisesDate" label="Dia" />
        <TimeFieldComponent label="Hora" name="exercisesTime" classes={classStyle} />
        <Grid item xs={12}>
          <TextField
            className={classStyle.formControl}
            size="small"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rows={4}
            label="Nota"
            name="exercisesNote"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ExercisesForm;
