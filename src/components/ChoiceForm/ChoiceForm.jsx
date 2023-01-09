import { Formik, Form, Field } from 'formik';

import { fruitsArray } from 'data/fruitsList';
import { alcoholArray } from 'data/alcoholList';

const ChoiceForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        fruits: [],
        alcohol: [],
      }}
      onSubmit={handleSubmit}
      //   validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <div role="group" aria-labelledby="fruits-head">
          <p id="fruits-head">Fruits</p>
          {fruitsArray.map(({ name, inStock, id }) => (
            <label key={id}>
              <Field type="checkbox" name="fruits" value={name} />
              {name}
            </label>
          ))}
        </div>
        <div role="group" aria-labelledby="alcohol-head">
          <p id="alcohol-head">Alcohol</p>
          {alcoholArray.map(({ name, inStock, id }) => (
            <label key={id}>
              <Field type="checkbox" name="alcohol" value={name} />
              {name}
            </label>
          ))}
        </div>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default ChoiceForm;
