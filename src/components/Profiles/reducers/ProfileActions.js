import moment from 'moment';
import { apiData } from '../../../axiosApiRequest';
import { dbRef } from '../../../firebaseConfig';
import { ADD_FORM_TEXT, EDIT_FORM_TEXT, DELETE_FORM_TEXT, USERNAME_DOMAIN } from '../../../commons/globalText';

const profilesRef = dbRef('profile').collection('profiles');

const mutateValues = async ({
  birthday,
  parent,
  maxDoctors,
  maxPatients,
  role,
  sex,
  sname = '',
  secondaryPhone = ''
}) => ({
  sname,
  secondaryPhone,
  ...(maxDoctors ? { maxDoctors } : {}),
  ...(maxPatients ? { maxPatients } : {}),
  ...(birthday ? { birthday: moment(birthday).toDate() } : {}),
  ...(birthday ? { birthday: moment(birthday).toDate() } : {}),
  parent: parent || null,
  role,
  ...(sex ? { sex } : {})
});

const addValuesAction = async ({ id, email, password, username, ...values }) => {
  const mutations = await mutateValues(values);
  const result = { ...values, ...mutations };
  const response = await apiData.post('/createUser', {
    username: `${username}${USERNAME_DOMAIN}`,
    password,
    fullname: `${values.name} ${values.lastName}`
  });
  const { user } = response.data;
  await profilesRef.doc(user.uid).set({
    ...result,
    email,
    username,
    user,
    createdAt: Date.now()
  });
};

const editValuesAction = async ({ id, ...values }) => {
  const result = { ...values, ...(await mutateValues(values)) };
  await profilesRef.doc(id).update({
    ...result,
    updatedAt: Date.now()
  });
};

const deleteValuesAction = async ({ id }) => {
  await apiData.post('/deleteUser', { userId: id });
  await profilesRef.doc(id).delete();
};

const saveProfileValuesAction = async (values, formType) => {
  if (formType === ADD_FORM_TEXT) {
    await addValuesAction(values);
  }
  if (formType === EDIT_FORM_TEXT) {
    await editValuesAction(values);
  }
  if (formType === DELETE_FORM_TEXT) {
    await deleteValuesAction(values);
  }
  return Promise;
};

export default saveProfileValuesAction;
