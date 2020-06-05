import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useProfilesContext } from '../ProfilesContext';
import { DialogTitleComponent } from '../../ModalComponent';
import SaveButton from '../../buttons/SaveButton';
import useCustomStyles from '../../../jss/globalStyles';

export default function DeleteProfilesComponent() {
  const [saving, setSaving] = useState(false);
  const { setModalVisible, selected, saveProfileValues, formType } = useProfilesContext();
  const classes = useCustomStyles();

  const handleCancel = () => {
    setModalVisible(false, null);
  };

  const onDelete = async () => {
    const itemToDelete = selected;
    setSaving(true);
    await saveProfileValues(itemToDelete, formType);
    setSaving(false);
    setModalVisible(false, null);
  };

  return (
    <>
      <DialogTitleComponent onClose={handleCancel}>Eliminar</DialogTitleComponent>
      <DialogContent dividers className={classes.contentDialog}>
        <Typography>Esta seguro que desea eliminar el perfil seleccionado.</Typography>
      </DialogContent>
      <DialogActions>
        <Button disableElevation variant="contained" size="small" onClick={handleCancel}>
          cancelar
        </Button>
        <SaveButton
          onClick={onDelete}
          size="small"
          color="secondary"
          pristine={false}
          submitting={saving}
          invalid={false}
          title="eliminar"
        />
      </DialogActions>
    </>
  );
}
