import * as React from 'react'
import Categories from 'components/SuperAdmin/Categories'
import AdminLayout from 'layouts/AdminLayout'
import { CurrentContext } from 'contexts/currentContext'

const lang = {
  ua: 'Список Категорій',
  ru: 'Список Категорий',
  en: 'List of Categories'
}

const CategoriesSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <Categories />
    </AdminLayout>
  )
}

export default CategoriesSA
