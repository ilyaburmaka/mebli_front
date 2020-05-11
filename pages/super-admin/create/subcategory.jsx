import * as React from 'react'
import CreateSubcategory from '../../../components/Subcategories/Create'
import AdminLayout from '../../../layouts/AdminLayout'
import { CurrentContext } from '../../../contexts/currentContext'

const lang = {
  ua: 'Створити Підкатегорію',
  ru: 'Создать Подкатегорию',
  en: 'Create Subcategory'
}

const SubcategoryCreateSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <CreateSubcategory />
    </AdminLayout>
  )
}

export default SubcategoryCreateSA
