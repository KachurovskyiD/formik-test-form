import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        amount: 0,
        currency: '',
        text: '',
        terms: false
      }}
      validationSchema={yup.object({
        name: yup.string()
          .min(2, 'Минимум 2 символа для заполнения')
          .required('Обязательное поле!'),
        email: yup.string()
          .email('Неправильный email адрес')
          .required('Обязательное поле!'),
        amount: yup.number()
          .min(5, 'Не менее 5')
          .required('Сумма обязательна'),
        currency: yup.string().required('Выберите валюту'),
        text: yup.string()
          .min(10, 'Не менее 10 символов'),
        terms: yup.boolean()
          .oneOf([true], "Необходимо согласие")
          .required('Необходимо согласие')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <h2>Форма для заполнения</h2>
          <label htmlFor="name">Ваше имя</label>
          <Field
            id="name"
            name="name"
            type="text"
          />
          <ErrorMessage className="error" name="name" component="div" />
          <label htmlFor="email">Ваша почта</label>
          <Field
            id="email"
            name="email"
            type="email"
          />
          <ErrorMessage className="error" name="email" component="div" />
          <label htmlFor="amount">Количество</label>
          <Field
            id="amount"
            name="amount"
            type="number"
          />
          <ErrorMessage className="error" name="amount" component="div" />
          <label htmlFor="currency">Валюта</label>
          <Field
            id="currency"
            name="currency"
            as="select">
            <option value="">Выберите валюту</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
            <option value="RUB">RUB</option>
          </Field>
          <ErrorMessage className="error" name="currency" component="div" />
          <label htmlFor="text">Ваше сообщение</label>
          <Field
            id="text"
            name="text"
            as="textarea"
          />
          <ErrorMessage className="error" name="text" component="div" />
          <label className="checkbox">
            <Field
              name="terms"
              type="checkbox" />
            Соглашаетесь с политикой конфиденциальности?
          </label>
          <ErrorMessage className="error" name="terms" component="div" />
          <button type="submit" disabled={isSubmitting}>Отправить</button>
        </Form>
      )}
    </Formik>
  )
}

export default CustomForm;