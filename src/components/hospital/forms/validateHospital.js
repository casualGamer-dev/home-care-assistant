import {
  INVALID_DECIMAL_AND_NUMBER_POSITIVE_FORMAT,
  REGEX_POSITIVE_NUMBER,
  REQUIRED_FIELD,
} from '../../../commons/globalText';

const validateHospital = values => {
  const errors = {};
  if (!values.name) {
    errors.name = REQUIRED_FIELD;
  }
  if (!values.maxDoctors) {
    errors.maxDoctors = REQUIRED_FIELD;
  }
  if (!values.maxPatients) {
    errors.maxPatients = REQUIRED_FIELD;
  }
  if (values.phone) {
    if (!REGEX_POSITIVE_NUMBER.test(values.phone)) {
      errors.phone = 'Format no valido.';
    }
  }
  if (values.maxDoctors) {
    if (!REGEX_POSITIVE_NUMBER.test(values.maxDoctors)) {
      errors.maxDoctors = INVALID_DECIMAL_AND_NUMBER_POSITIVE_FORMAT;
    }
  }
  if (values.maxPatients) {
    if (!REGEX_POSITIVE_NUMBER.test(values.maxPatients)) {
      errors.maxPatients = INVALID_DECIMAL_AND_NUMBER_POSITIVE_FORMAT;
    }
  }
  return errors;
};

export default validateHospital;