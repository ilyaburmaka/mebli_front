import * as React from 'react'
import ProductCreate from '../../../components/Products/Create'
import AdminLayout from '../../../layouts/AdminLayout'
import { CurrentContext } from '../../../contexts/currentContext'

const lang = {
  ua: 'Оновити Продукт',
  ru: 'Обновить Товар',
  en: 'Update Product'
}

const ProductCreateSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <ProductCreate />
    </AdminLayout>
  )
}

export default ProductCreateSA
