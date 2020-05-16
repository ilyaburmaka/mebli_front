import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Router from 'next/router'
import styled from 'styled-components'
import { CurrentContext } from '../../contexts/currentContext'
import { MenuItem } from '../../components/Header/Views'

const CloseImage = styled.img`
  width: 15px;
`

const Lang = styled.img`
  width: 25px;
  margin-right: 15px;
`

const lang = {
  ua: {
    category: {
      create: 'Створити Категорію',
      list: 'Список Категорій'
    },
    subcategory: {
      create: 'Створити Підкатегорію',
      list: 'Список Підкатегорій'
    },
    product: {
      create: 'Створити Продукт',
      list: 'Список Продуктів'
    },
    common: {
      logout: 'Вихід'
    }
  },
  ru: {
    category: {
      create: 'Создать Категорию',
      list: 'Список Категорий'
    },
    subcategory: {
      create: 'Создать Подкатегорию',
      list: 'Список Подкатегорий'
    },
    product: {
      create: 'Создать Продукт',
      list: 'Список Продуктов'
    },
    common: {
      logout: 'Выход'
    }
  },
  en: {
    category: {
      create: 'Create Category',
      list: 'List of Categories'
    },
    subcategory: {
      create: 'Create Subcategory',
      list: 'List of Subcategory'
    },
    product: {
      create: 'Create Product',
      list: 'List of Products'
    },
    common: {
      logout: 'Logout'
    }
  }
}
const AdminLayout = ({ children, title }) => {
  const { currentLang, onLogout, onLangClick } = React.useContext(CurrentContext)
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  return (
    <MuiThemeProvider>
      <div>
        <AppBar title={title || 'Fasad'} onLeftIconButtonClick={() => handleDrawerOpen()}>
          <Lang src={'/static/ukraine.svg'} onClick={() => onLangClick('ua')} />
          <Lang src={'/static/russia.svg'} onClick={() => onLangClick('ru')} />
          <Lang src={'/static/flag.svg'} onClick={() => onLangClick('en')} />
        </AppBar>
        <Drawer variant='persistent' anchor='left' open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <CloseImage src='/static/close.svg' />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={() => Router.push('/super-admin/categories')}>
              <ListItemText primary={lang[`${currentLang}`]?.category.list} />
            </ListItem>
            <ListItem button onClick={() => Router.push('/super-admin/create/category')}>
              <ListItemText primary={lang[`${currentLang}`]?.category.create} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => Router.push('/super-admin/subcategories')}>
              <ListItemText primary={lang[`${currentLang}`]?.subcategory.list} />
            </ListItem>
            <ListItem button onClick={() => Router.push('/super-admin/create/subcategory')}>
              <ListItemText primary={lang[`${currentLang}`]?.subcategory.create} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => Router.push('/super-admin/products')}>
              <ListItemText primary={lang[`${currentLang}`]?.product.list} />
            </ListItem>
            <ListItem button onClick={() => Router.push('/super-admin/create/product')}>
              <ListItemText primary={lang[`${currentLang}`]?.product.create} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick={onLogout}>
              {lang[`${currentLang}`]?.common.logout}
            </ListItem>
          </List>
        </Drawer>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {children}
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default AdminLayout
