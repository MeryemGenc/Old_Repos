import { Form, Formik } from 'formik'
import React from 'react'
import ModalWrapper from '../../app/common/modal/ModalWrapper'
import MyTextInput from '../../app/common/form/MyTextInput'
import * as Yup from 'yup'
import { Button, Label } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../app/common/modal/modalReducer'
import { signInWithEmail } from '../../app/firestore/firebaseService'

const LoginForm = () => {
  const dispatch = useDispatch()

  return (
    <ModalWrapper size='mini' header='DenemeTahtasina Giris Yap'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await signInWithEmail(values)
            setSubmitting(false)
            dispatch(closeModal())
          } catch (error) {
            setErrors({ auth: 'Parola veya e-mail adresi hatalı.' })
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting, isValid, dirty, errors }) => (
          <Form className='ui form'>
            <MyTextInput name='email' placeholder='Email Address' />
            <MyTextInput
              name='password'
              placeholder='Password'
              type='password'
            />

            {errors.auth && (
              <Label
                basic
                color='red'
                style={{ marginBottom: 10 }}
                content={errors.auth}
              />
            )}

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              fluid
              size='large'
              color='teal'
              content='Giriş Yap'
            />
          </Form>
        )}
      </Formik>
      
    </ModalWrapper>
  )
}

export default LoginForm
