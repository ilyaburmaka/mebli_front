import * as React from 'react'
import CategoryCreate from 'components/Categories/Create'
import AdminLayout from 'layouts/AdminLayout'
import { CurrentContext } from 'contexts/currentContext'

const lang = {
  ua: 'Створити Категорію',
  ru: 'Создать Категорию',
  en: 'Create Category'
}

const CategoryCreateSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <CategoryCreate />
    </AdminLayout>
  )
}

export default CategoryCreateSA
