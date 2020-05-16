import * as React from 'react'
import UpdateSubcategory from 'components/Subcategories/Update'
import AdminLayout from 'layouts/AdminLayout'
import { CurrentContext } from 'contexts/currentContext'

const lang = {
  ua: 'Оновити Підкатегорію',
  ru: 'Обновить Подкатегорию',
  en: 'Update Subcategory'
}

const SubcategoryUpdateSA = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <AdminLayout title={lang[`${currentLang}`]}>
      <UpdateSubcategory />
    </AdminLayout>
  )
}

export default SubcategoryUpdateSA
