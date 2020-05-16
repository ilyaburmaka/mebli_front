import * as React from 'react'
import { useRouter } from 'next/router'
import CategoryForm from '../Create/Form'
import { CurrentContext } from 'contexts/currentContext'

const UpdateCategory = () => {
  const router = useRouter()
  const { updateCategory, getOneCategory } = React.useContext(CurrentContext)
  const [defaultValues, setValues] = React.useState(null)

  const loadData = async () => {
    const responce = await getOneCategory(router.query.id)
    setValues({ ...responce })
  }

  React.useEffect(() => {
    loadData()
  }, [router])

  const onSubmit = async data => updateCategory(router.query.id, data)

  return <>{!!defaultValues && <CategoryForm onSubmit={onSubmit} defaultValues={{ ...defaultValues }} />}</>
}

export default UpdateCategory
