import { Formik, Form } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Header, Segment } from 'semantic-ui-react'
import { clearSelectedBlog, listenToSelectedBlog } from '../blogActions'
import * as Yup from 'yup'
import { categoryData } from '../../../app/api/categoryOptions'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import MyDateInput from '../../../app/common/form/MyDateInpup'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import {
  addBlogToFirestore,
  listenToBlogFromFirestore,
  updateBlogInFirestore,
} from '../../../app/firestore/firestoreService'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { toast } from 'react-toastify'

const BlogForm = ({ match, history, location }) => {
  const dispatch = useDispatch() 
  const {selectedBlog} = useSelector((state) => state.blog )
  const { loading, error } = useSelector((state) => state.async)

  useEffect(() => {
    if (location.pathname !== '/createBlog') {
      return
    }
    dispatch(clearSelectedBlog())
  }, [dispatch, location.pathname])


  const initialValues = selectedBlog ?? {
    blogDate: '',
    blogTitle: '',
    blogCategory: '',
    blogArticle: '',
    blogPhotoURL: '',
  }

  const validationSchema = Yup.object({
    blogTitle: Yup.string().required('Lütfen başlık giriniz.'),
    blogCategory: Yup.string().required('Lütfen kategori seçiniz.'),
    blogDate: Yup.string().required('Lütfen tarih seçiniz.'),
    blogPhotoURL: Yup.string().required('Lütfen görsel ekleyiniz.'),
    blogArticle: Yup.string().required('Lütfen yazıyı giriniz.'),
  })


  useFirestoreDoc({
    query: () => listenToBlogFromFirestore(match.params.id),
    data: (blog) => dispatch(listenToSelectedBlog(blog)),
    deps: [match.params.id, dispatch],
    shouldExecute: !!match.params.id,
  })

  // if (loading || (!selectedBlog && !error)) {
  if (loading) {
    return <LoadingComponent content='Loading Blogs...' />
  }
  if (error) {
    return <Redirect to='/error' />
  }

  return (
    <Segment clearing>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            selectedBlog
              ? await updateBlogInFirestore(values)
              : await addBlogToFirestore(values)
            setSubmitting(false)
            history.push('/blogs')
          } catch (error) {
            toast.error(error.message)
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header
              sub
              color='teal'
              content={selectedBlog ? 'Yazi Güncelle' : 'Yeni Yazi Olustur'}
            />
            <br />

            <MyTextInput name='blogTitle' placeholder='Baslik' />

            <MySelectInput
              name='blogCategory'
              placeholder='Kategori'
              options={categoryData}
            />

            <MyDateInput
              name='blogDate'
              placeholderText='Tarih'
              dateFormat='MMMM d, yyyy'
              autoComplete='off'
            />

            <MyTextInput name='blogPhotoURL' placeholder='Foto URL' />
            {/* Editor eklenmeli */}
            <MyTextArea name='blogArticle' placeholder='Yazi' rows={6} />

            <Button
              disabled={!isValid || !dirty || isSubmitting}
              loading={isSubmitting}
              type='submit'
              floated='right'
              positive
              content='Kaydet'
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to='/blogs'
              floated='right'
              content='Vazgec'
            />
          </Form>
        )}
      </Formik>
    </Segment>
  )
}

export default BlogForm
