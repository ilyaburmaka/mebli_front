import * as React from 'react'
import SubcategoryForm from './Form'
import { CurrentContext } from 'contexts/currentContext'

const CreateSubcategory = () => {
  const { uploadFile, createSubcategory } = React.useContext(CurrentContext)

  const onSubmit = async data => {
    let file = new FormData()
    file.append('image', data.photo['0'])
    const photo = await uploadFile(file)
    await createSubcategory(data, photo.id)
  }

  return <SubcategoryForm onSubmit={onSubmit} />
}

export default CreateSubcategory
