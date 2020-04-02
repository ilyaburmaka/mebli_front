import * as React from 'react'
import Cookies from 'js-cookie'

export const CurrentContext = React.createContext(null)

const CurrentProvider = ({ children }) => {
  const [currentLang, setLang] = React.useState(null)

  React.useEffect(() => {
    setLang(Cookies.get('lang') || 'ua')
  }, [Cookies.get('lang')])

  const onLangClick = value => {
    Cookies.set('lang', value, { expires: 100 })
    setLang(value)
  }

  const value = { onLangClick, currentLang }

  return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
}

export default CurrentProvider
