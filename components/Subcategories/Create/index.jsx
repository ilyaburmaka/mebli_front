import * as React from 'react'
import Router from 'next/router'
import SubcategoryForm from './Form'
import { CurrentContext } from '../../../contexts/currentContext'

const CreateSubcategory = () => {
  const { uploadFile, createSubcategory } = React.useContext(CurrentContext)

  const onSubmit = async data => {
    let file = new FormData()
    file.append('image', data.photo['0'])
    const photo = await uploadFile(file)
    await createSubcategory(data, photo.id)
    Router.push('/super-admin/subcategories')
  }

  return <SubcategoryForm onSubmit={onSubmit} />
}

export default CreateSubcategory
