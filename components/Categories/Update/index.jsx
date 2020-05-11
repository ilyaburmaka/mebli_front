import * as React from 'react'
import { get, post } from 'axios'
import Router, { useRouter } from 'next/router'
import CategoryForm from '../Create/Form'

const UpdateCategory = () => {
  const router = useRouter()
  const [defaultValues, setValues] = React.useState(null)
  const loadOneCat = async () => {
    const responce = await get(`http://localhost:3000/category/${router.query.id}`)
    setValues({ ...responce.data })
  }

  React.useEffect(() => {
    if (router.query.id) {
      loadOneCat()
    }
  }, [router.query])

  const onSubmit = async data => {
    try {
      await post(`http://localhost:3000/category/update/${router.query.id}`, { ...data })
      Router.push('/super-admin/categories')
    } catch (error) {
      if (401 === error.response.status) {
        console.log('pizda')
      }
      console.log('error', error)
    }
  }

  return <>{!!defaultValues && <CategoryForm onSubmit={onSubmit} defaultValues={{ ...defaultValues }} />}</>
}

export default UpdateCategory
