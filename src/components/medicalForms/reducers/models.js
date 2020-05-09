import { formatDateWithTime } from '../../../commons/util';
import { getNomById } from '../../../nomenc/NomencAction';

export const pressureModel = ({
  user,
  sistolica,
  diastolica,
  heartrate,
  bloodPressureNota,
  bloodPressureDate,
  bloodPressureTime,
}) => ({
  user,
  sistolica,
  diastolica,
  heartrate,
  date: formatDateWithTime(bloodPressureDate, bloodPressureTime),
  ...(bloodPressureNota ? { note: bloodPressureNota } : {}),
});

export const tempratureModel = ({ user, celsiusDegree, temperatureNote, temperatureDate, temperatureTime }) => ({
  user,
  celsiusDegree,
  date: formatDateWithTime(temperatureDate, temperatureTime),
  ...(temperatureNote ? { note: temperatureNote } : {}),
});

export const weightModel = ({ user, weight, weightDate, weightTime, weightNote }) => ({
  user,
  weight,
  date: formatDateWithTime(weightDate, weightTime),
  ...(weightNote ? { note: weightNote } : {}),
});

export const glucoseModel = async ({
  user,
  sugarConcentration,
  shedule,
  intakeTime,
  glucoseUnity,
  hba1c,
  insulinaFood,
  basal,
  breadUnity,
  glucoseNote,
  glucoseDate,
  glucoseTime,
}) => ({
  user,
  sugarConcentration,
  shedule: await getNomById('shedules')(shedule),
  intakeTime,
  glucoseUnity,
  date: formatDateWithTime(glucoseDate, glucoseTime),
  ...(hba1c ? { hba1c } : {}),
  ...(insulinaFood ? { insulinaFood } : {}),
  ...(basal ? { basal } : {}),
  ...(breadUnity ? { breadUnity } : {}),
  ...(glucoseNote ? { note: glucoseNote } : {}),
});

export const breathingModel = ({
  user,
  EtCO,
  breathingFrecuency,
  breathingtPI,
  breathingtDate,
  breathingTime,
  breathingNote,
}) => ({
  user,
  EtCO,
  breathingFrecuency,
  breathingtPI,
  date: formatDateWithTime(breathingtDate, breathingTime),
  ...(breathingNote ? { note: breathingNote } : {}),
});

export const inrModel = ({ user, INR, coagulationInrNote, coagulationInrDate, coagulationInrTime }) => ({
  user,
  INR,
  date: formatDateWithTime(coagulationInrDate, coagulationInrTime),
  ...(coagulationInrNote ? { note: coagulationInrNote } : {}),
});
export const oxygenModel = ({ user, SpO2, heartbeat, oxygenPI, oxygenDate, oxygenTime, oxygenNote }) => ({
  user,
  SpO2,
  heartbeat,
  oxygenPI,
  ...(oxygenDate && oxygenTime ? { date: formatDateWithTime(oxygenDate, oxygenTime) } : {}),
  ...(oxygenNote ? { note: oxygenNote } : {}),
});

export const exercicesModel = ({ distance, time, steps, exercisesDate, exercisesTime, exercisesNote }) => ({
  distance,
  time,
  steps,
  date: formatDateWithTime(exercisesDate, exercisesTime),
  ...(exercisesNote ? { note: exercisesNote } : {}),
});