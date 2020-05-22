import React from 'react';
import { Select } from 'mui-rff';
import MenuItem from '@material-ui/core/MenuItem';
import uuid from 'uuid4';
import clsx from 'clsx';
import useCustomStyles from '../../jss/globalStyles';

function CustomSelectFieldComponent({
  required = false,
  className,
  name,
  label,
  variant = 'outlined',
  size = 'small',
  validate,
  source,
  disabled
}) {
  const classes = useCustomStyles();
  return (
    <Select
      required={required}
      className={clsx(classes.formControl, className)}
      label={label}
      name={name}
      variant={variant}
      formControlProps={{
        disabled,
        size,
        color: 'primary'
      }}
      fieldProps={{
        format: value => (source.length > 0 ? value || '' : ''),
        validate
      }}
    >
      <MenuItem key={uuid()} value="">
        Ninguno
      </MenuItem>
      {source.map(item => (
        <MenuItem key={uuid()} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CustomSelectFieldComponent;
