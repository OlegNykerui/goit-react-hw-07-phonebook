import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addContactAction } from 'redux/slices/contactSlice';

import { Button, Form, Field, ErrorMessage } from './Form.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    number: Yup.string().required(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    dispatch(addContactAction(name, number));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="span" />

        <Field type="tel" name="number" />
        <ErrorMessage name="number" component="span" />

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
