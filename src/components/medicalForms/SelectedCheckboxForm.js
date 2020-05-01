import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withRouter } from 'react-router-dom';
import useTheme from '@material-ui/core/styles/useTheme';
import useStyle from './cssInJs';
import optionsTypesFormsPatientHealth from './Nomenc';

function SelectedChecboxForm({ location, history, defaultValues }) {
  const urlSearchParams = new URLSearchParams(location.search);
  const theme = useTheme();
  const { justifyCheckbox } = useStyle(theme);

  const handleSelectCheckbox = ev => {
    const { name, checked } = ev.target;
    if (checked) {
      urlSearchParams.append('formulario', name);
    }
    if (!checked) {
      const resto = urlSearchParams.getAll('formulario').filter(sear => sear !== name);
      urlSearchParams.delete('formulario');
      resto.map(insert => urlSearchParams.append('formulario', insert));
    }
    history.push({
      pathname: location.pathname,
      search: urlSearchParams.toString(),
    });
  };
  return (
    <FormControl
      style={{
        width: '100%',
      }}
      component="fieldset"
    >
      <FormLabel component="legend">Seleccione</FormLabel>
      <FormGroup className={justifyCheckbox} row defaultValue={defaultValues}>
        {optionsTypesFormsPatientHealth.map(op => (
          <FormControlLabel
            key={op.name}
            control={
              <Checkbox
                color="primary"
                onChange={handleSelectCheckbox}
                checked={defaultValues.includes(op.id)}
                name={`${op.id}`}
              />
            }
            label={`${op.name}`}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default withRouter(SelectedChecboxForm);