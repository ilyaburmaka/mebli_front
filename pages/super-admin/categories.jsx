import * as React from 'react'
import Categories from '../../components/SuperAdmin/Categories'
import AdminLayout from '../../layouts/AdminLayout'

const CategoriesSA = () => {
  return (
    <AdminLayout title={'Categories'}>
      <Categories />
    </AdminLayout>
  )
}

export default CategoriesSA
