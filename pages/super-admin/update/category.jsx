import * as React from 'react'
import CategoryUpdate from 'components/Categories/Update'
import AdminLayout from 'layouts/AdminLayout'
import { CurrentContext } from 'contexts/currentContext'

const lang = {
  ua: 'Оновити Категорію',
  ru: 'Обновить Категорию',
  en: 'Update Category'
}

const CategoryUpdateSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <CategoryUpdate />
    </AdminLayout>
  )
}

export default CategoryUpdateSA
