import * as React from 'react'
import { useRouter } from 'next/router'
import CategoryForm from '../Create/Form'
import { CurrentContext } from 'contexts/currentContext'
import { omit } from 'lodash'

const UpdateCategory = () => {
  const router = useRouter()
  const {  getOneSubCategory, updateSubcategory } = React.useContext(CurrentContext)
  const [defaultValues, setValues] = React.useState(null)

  const loadData = async () => {
    const responsive = await getOneSubCategory(router.query.id)
    setValues({ ...omit(responsive, ['photo']) })
  }

  React.useEffect(() => {
    loadData()
  }, [router])

  const onSubmit = async data => updateSubcategory(router.query.id, data)

  return <>{!!defaultValues && <CategoryForm onSubmit={onSubmit} defaultValues={{ ...defaultValues }} />}</>
}

export default UpdateCategory
