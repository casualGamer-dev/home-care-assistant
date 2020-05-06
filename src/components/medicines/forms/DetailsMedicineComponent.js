import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import { useMedicinesContext } from '../MedicinesContext';
import { DialogTitleComponent } from '../../ModalComponent';
import useCustomStyles from '../../../jss/globalStyles';

function DetailsMedicineComponent() {
  const { selected, setModalVisible } = useMedicinesContext();
  const classes = useCustomStyles();

  const handleCloseForm = () => {
    setModalVisible(false, null);
  };
  return (
    <>
      <DialogTitleComponent onClose={handleCloseForm}>Detalles del medicamento</DialogTitleComponent>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} container justify="center" alignItems="center">
            <Image src="#" aspectRatio={4 / 3} />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.textDetailStyle}>
            <Typography>Nombre: {selected ? <strong>{selected.name}</strong> : '?'}</Typography>
            <Typography>
              Cantidad Concentracion: {selected ? <strong>{selected.concentrationCant}</strong> : '?'}
            </Typography>
            <Typography>
              Tipo Concentracion: {selected ? <strong>{selected.concentrationType}</strong> : '?'}
            </Typography>
            <Typography>Dosis: {selected ? <strong>{selected.dose}</strong> : '?'}</Typography>
            <Typography>Tipo dosis: {selected ? <strong>{selected.doseType}</strong> : '?'}</Typography>
            <Typography>
              Via administracion: {selected ? <strong>{selected.administrationRoute}</strong> : '?'}
            </Typography>
            <Typography>
              Motivo administracion: {selected ? <strong>{selected.administrationReason}</strong> : '?'}
            </Typography>
            <Typography>Frecuencia: {selected ? <strong>{selected.frequency}</strong> : '?'}</Typography>
            <Typography>Observaciones: {selected ? <strong>{selected.observations}</strong> : '?'}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" disableElevation onClick={handleCloseForm}>
          aceptar
        </Button>
      </DialogActions>
    </>
  );
}
export default DetailsMedicineComponent;
