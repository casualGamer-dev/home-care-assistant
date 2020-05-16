import React, { useEffect, useMemo, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import useCustomStyles from '../../jss/globalStyles';
import { useMedicinesContext } from './MedicinesContext';
import useDebounceCustom from '../../commons/useDebounceCustom';

function FiltersMedicineComponent() {
  const { setFilters } = useMedicinesContext();
  const [name, setName] = useState('');
  const debounceValue = useDebounceCustom(name, 500);
  const filterNameMemoize = useMemo(() => debounceValue, [debounceValue]);
  const classes = useCustomStyles();

  useEffect(() => {
    setFilters({ name: filterNameMemoize });
  }, [filterNameMemoize, setFilters]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Buscar por nombre</InputLabel>
      <Input
        type="search"
        value={name}
        onChange={event => setName(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
export default FiltersMedicineComponent;