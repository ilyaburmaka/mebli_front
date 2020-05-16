import * as React from 'react'
import Products from 'components/SuperAdmin/Products'
import AdminLayout from 'layouts/AdminLayout'
import { CurrentContext } from '../../contexts/currentContext'

const lang = {
  ua: 'Список Продуктів',
  ru: 'Список Продуктов',
  en: 'List of Products'
}

const ProductsSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <Products />
    </AdminLayout>
  )
}

export default ProductsSA
