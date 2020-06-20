import React from 'react';
import { Form } from 'react-final-form';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { DialogTitleComponent } from '../../ModalComponent';
import { EDIT_FORM_TEXT, SUCCESS_MESSAGE, ERROR_MESSAGE } from '../../../commons/globalText';
import formValidate from './formValidate';
import SaveButton from '../../buttons/SaveButton';
import CustomTextFieldComponent from '../../inputs/CustomTextFieldComponent';
import ConcentrationFieldComponent from '../../fields/ConcentrationFielComponent';
import DosisFieldComponent from '../../fields/DosisFielComponent';
import AdministrationRouteFielComponent from '../../fields/AdministrationRouteFielComponent';
import { getPropValue } from '../../../helpers/utils';
import useCustomStyles from '../../../jss/globalStyles';
import { useMessageContext } from '../../../MessageHandle/MessageContext';

export function AddOrEditMedicineFormComponent({
  formType,
  selected,
  onSubmit,
  handleCloseForm,
  currentUserProfile,
  dividers = false
}) {
  const classes = useCustomStyles();
  return (
    <Form
      initialValues={
        formType === EDIT_FORM_TEXT && selected ? selected : { clinic: getPropValue(currentUserProfile, 'parent') }
      }
      validate={formValidate}
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, invalid }) => (
        <form noValidate onSubmit={event => !invalid && handleSubmit(event)} autoComplete="off">
          {formType === EDIT_FORM_TEXT && selected && <input type="hidden" name="id" />}
          <DialogContent dividers={dividers} className={classes.contentDialog} style={{ padding: 15 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CustomTextFieldComponent
                  disabled={formType === EDIT_FORM_TEXT}
                  required
                  label="Nombre medicamento"
                  name="name"
                />
              </Grid>
              <Grid item xs={4}>
                <CustomTextFieldComponent
                  type="number"
                  label="Concentración"
                  name="concentrationCant"
                  labelStyle={{
                    fontSize: 12
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <ConcentrationFieldComponent label="Tipo de Unidad" name="concentrationType" />
              </Grid>
              <Grid item xs={4}>
                <CustomTextFieldComponent label="Cantidad" name="doseCant" />
              </Grid>
              <Grid item xs={12} sm={8}>
                <DosisFieldComponent label="Tipo dosis" name="doseType" />
              </Grid>
              <Grid item xs={4}>
                <CustomTextFieldComponent label="Frecuencia" name="frequency" />
              </Grid>
              <Grid item xs={12} sm={8}>
                <AdministrationRouteFielComponent label="Via Administración" name="administrationType" />
              </Grid>
              <Grid item xs={12}>
                <CustomTextFieldComponent label="Motivo Administración" name="administrationReason" />
              </Grid>
              <Grid item xs={12}>
                <CustomTextFieldComponent label="Observaciones" name="observations" multiline rows={3} rowsMax={5} />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                handleCloseForm();
                form.reset();
              }}
            >
              cancel
            </Button>
            <SaveButton submitting={submitting} invalid={invalid} pristine={pristine} />
          </DialogActions>
        </form>
      )}
    />
  );
}

function AddOrEditMedicineComponent({ title, formType, selected, setModalVisible, saveMedicineValues, clinic }) {
  const { RegisterMessage } = useMessageContext();
  const handleCloseForm = () => {
    setModalVisible(false, null);
  };

  const onSubmit = async values => {
    try {
      await saveMedicineValues({ ...values, clinic }, formType);
      RegisterMessage(SUCCESS_MESSAGE, 'Success', `Medicine-form-${formType}`);
      setModalVisible(false, null);
    } catch (e) {
      RegisterMessage(ERROR_MESSAGE, e, `Medicine-form-${formType}`);
    }
  };

  return (
    <>
      <DialogTitleComponent onClose={handleCloseForm}>{title}</DialogTitleComponent>
      <AddOrEditMedicineFormComponent
        dividers
        formType={formType}
        selected={selected}
        onSubmit={onSubmit}
        handleCloseForm={handleCloseForm}
      />
    </>
  );
}

export default AddOrEditMedicineComponent;
