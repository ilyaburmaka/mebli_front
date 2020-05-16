import * as React from 'react'
import Subcategories from '../../components/SuperAdmin/Subcategories'
import AdminLayout from '../../layouts/AdminLayout'
import { CurrentContext } from '../../contexts/currentContext'

const lang = {
  ua: 'Список Підкатегорій',
  ru: 'Список Подкатегорий',
  en: 'List of Subcategory'
}

const SubcategoriesSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <Subcategories />
    </AdminLayout>
  )
}

export default SubcategoriesSA
