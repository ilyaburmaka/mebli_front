import * as React from 'react'
import Cookies from 'js-cookie'
import axios, { post } from 'axios'
import omit from 'lodash/omit'

export const CurrentContext = React.createContext(null)

const CurrentProvider = ({ children }) => {
  const [currentLang, setLang] = React.useState(null)
  // const token = localStorage?.getItem('accessToken')
  const token = {}
  const headerContent = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  // const link = 'http://localhost:3000/'
  const link = 'https://afternoon-scrubland-24663.herokuapp.com/'
  React.useEffect(() => {
    setLang(Cookies.get('lang') || 'ua')
  }, [Cookies.get('lang')])

  const onLangClick = value => {
    Cookies.set('lang', value, { expires: 100 })
    setLang(value)
  }

  const categories = async () => {
    try {
      const { data } = await axios.get(link + `category`, {}, { token })
      return data
    } catch (e) {
      console.log('CurrentProvider.categories', e)
    }
  }

  const subcategories = async () => {
    try {
      const { data } = await axios.get(link + `subcategory`, {}, { token })
      return data
    } catch (e) {
      console.log('CurrentProvider.subcategories', e)
    }
  }

  const products = async () => {}

  const createCategory = async () => {}

  const updateCategory = async (id, variables) => {
    await post(link + `category/update/${id}`, { ...variables })
  }

  const removeCategory = async id => {
    try {
      return await axios.delete(link + `category/${id}`, {}, { token })
    } catch (e) {
      console.log('CurrentProvider.removeCategory', e)
    }
  }

  const createSubcategory = async (variables, photoId) => {
    try {
      return await post(link + `subcategory`, {
        ...omit(variables, ['photo']),
        photoId
      })
    } catch (e) {
      console.log('CurrentProvider.createSubcategory', e)
    }
  }

  const updateSubcategory = async () => {}

  const removeSubcategory = async id => {
    try {
      return await axios.delete(link + `subcategory/${id}`, {}, { token })
    } catch (e) {
      console.log('CurrentProvider.removeSubcategory', e)
    }
  }

  const createProduct = async () => {}

  const uploadFile = async file => {
    try {
      const uploadedPhoto = await post(link + 'assets/file', file, headerContent)
      return uploadedPhoto
    } catch (e) {
      console.log('CurrentProvider.uploadFile', e)
    }
  }

  const value = {
    onLangClick,
    currentLang,
    categories,
    subcategories,
    products,
    createCategory,
    updateCategory,
    removeCategory,
    createSubcategory,
    updateSubcategory,
    removeSubcategory,
    createProduct,
    link,
    uploadFile
  }

  return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
}

export default CurrentProvider
