import * as React from 'react'
import ProductCreate from '../../../components/Products/Create'
import AdminLayout from '../../../layouts/AdminLayout'

const ProductCreateSA = () => {
  return (
    <AdminLayout title={'Product Create'}>
      <ProductCreate />
    </AdminLayout>
  )
}

export default ProductCreateSA
