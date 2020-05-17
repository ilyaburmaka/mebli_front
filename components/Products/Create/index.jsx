import * as React from 'react'
import ProductCreateForm from './Form'
import { CurrentContext } from 'contexts/currentContext'

const CreateProduct = () => {
  const { uploadFiles, createProduct } = React.useContext(CurrentContext)

  const onSubmit = async data => {
    let files = new FormData()
    for (let i = 0; i < data.files.length; i++) {
      files.append('image', data.files[i]['0'])
    }

    const filesIds = await uploadFiles(files)
    await createProduct(filesIds, data)
  }

  return <ProductCreateForm onSubmit={onSubmit} />
}

export default CreateProduct
