import * as React from 'react'
import Subcategories from '../../components/SuperAdmin/Subcategories'
import AdminLayout from '../../layouts/AdminLayout'

const SubcategoriesSA = () => {
  return (
    <AdminLayout title={'Subcategories'}>
      <Subcategories />
    </AdminLayout>
  )
}

export default SubcategoriesSA
