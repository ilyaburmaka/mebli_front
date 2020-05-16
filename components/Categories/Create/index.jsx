import * as React from 'react'
import CategoryForm from './Form'
import { CurrentContext } from 'contexts/currentContext'

const CreateCategory = () => {
  const { createCategory } = React.useContext(CurrentContext)

  return <CategoryForm onSubmit={createCategory} />
}

export default CreateCategory
