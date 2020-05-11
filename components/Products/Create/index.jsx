import * as React from 'react'
import { post } from 'axios'
import Router from 'next/router'
import CategoryForm from './Form'
import omit from 'lodash/omit'

const CreateCategory = () => {
  const onSubmit = async data => {
    console.log('data', data)
    let file = new FormData()
    for (let i = 0; i < data.files.length; i++) {
      file.append('image', data.files[i]['0'])
    }
    try {
      const response = await post('http://localhost:3000/assets/files', file, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log('response', response)
      const res = await post(`http://localhost:3000/products/create`, {
        ...omit(data, 'files'),
        assetIds: [...response.data]
      })
      console.log('res', res)
      return
      Router.push('/super-admin/categories')
    } catch (error) {
      if (401 === error.response.status) {
        console.log('pizda')
      }
      console.log('error', error)
    }
  }

  return <CategoryForm onSubmit={onSubmit} />
}

export default CreateCategory
