import * as React from 'react'
import Cookies from 'js-cookie'
import axios, { get, post } from 'axios'
import omit from 'lodash/omit'
import Router from 'next/router'

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
  const link = 'http://localhost:3000/'
  // const link = 'https://afternoon-scrubland-24663.herokuapp.com/'
  React.useEffect(() => {
    setLang(Cookies.get('lang') || 'ua')
  }, [Cookies.get('lang')])

  const onLangClick = value => {
    Cookies.set('lang', value, { expires: 100 })
    setLang(value)
  }

  const categories = async token => {
    try {
      const { data } = await axios.get(link + `category`, {}, { token })
      return data
    } catch (e) {
      console.log('CurrentProvider.categories', e)
    }
  }

  const getOneCategory = async id => {
    try {
      const { data } = await axios.get(link + `category/${id}`, {}, { token })
      return data
    } catch (e) {
      console.log('CurrentProvider.categories', e)
    }
  }

  const createCategory = async variables => {
    try {
      await post(link + 'category', { ...variables })
      Router.push('/super-admin/categories')
    } catch (error) {
      console.log('CurrentProvider.createCategory: ', error)
    }
  }

  const updateCategory = async (id, variables) => {
    try {
      await post(link + `category/update/${id}`, { ...variables })
      Router.push('/super-admin/categories')
    } catch (error) {
      console.log('error', error)
    }
  }

  const removeCategory = async (id, token) => {
    try {
      await axios.delete(link + `category/${id}`, {}, { token })
    } catch (e) {
      console.log('CurrentProvider.removeCategory', e)
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

  const createSubcategory = async (variables, photoId) => {
    try {
      await post(link + `subcategory`, {
        ...omit(variables, ['photo']),
        photoId
      })
      Router.push('/super-admin/subcategories')
    } catch (e) {
      console.log('CurrentProvider.createSubcategory', e)
    }
  }

  const getOneSubCategory = async id => {
    try {
      const { data } = await get(link + `subcategory/${id}`)
      return data
    } catch (e) {
      console.log('CurrentProvider.getOneSubCategory', e)
    }
  }

  const updateSubcategory = async (id, variables) => {
    try {
      await post(link + `subcategory/update/${id}`, { ...variables })
      Router.push('/super-admin/subcategories')
    } catch (error) {
      console.log('CurrentProvider.updateSubcategory', error)
    }
  }

  const removeSubcategory = async id => {
    try {
      return await axios.delete(link + `subcategory/${id}`, {}, { token })
    } catch (e) {
      console.log('CurrentProvider.removeSubcategory', e)
    }
  }

  const products = async () => {}

  const createProduct = async () => {}

  const uploadFile = async file => {
    try {
      const uploadedPhoto = await post(link + 'assets/file', file, headerContent)
      return uploadedPhoto
    } catch (e) {
      console.log('CurrentProvider.uploadFile', e)
    }
  }

  const onLogout = () => {
    localStorage.removeItem('accessToken')
    Router.push('/')
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
    getOneCategory,
    createSubcategory,
    getOneSubCategory,
    updateSubcategory,
    removeSubcategory,
    createProduct,
    onLogout,
    link,
    uploadFile
  }

  return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
}

export default CurrentProvider
