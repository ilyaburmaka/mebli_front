import * as React from 'react'
import { post } from 'axios'
import Router from 'next/router'
import CategoryForm from './Form'

const CreateCategory = () => {
  const onSubmit = async data => {
    try {
      await post(`http://localhost:3000/category`, { ...data })
      Router.push('/super-admin/categories')
    } catch (error) {
      console.log('error', error)
    }
  }

  return <CategoryForm onSubmit={onSubmit} />
}

export default CreateCategory
