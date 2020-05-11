import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { get, post } from 'axios'
import Router, { useRouter } from 'next/router'
import CategoryForm from '../Create/Form'
import { useForm } from 'react-hook-form'

const UpdateCategory = () => {
  const router = useRouter()
  const [defaultValues, setValues] = React.useState(null)
  const loadOneCat = async () => {
    const responce = await get(`http://localhost:3000/category/${router.query.id}`)
    console.log(responce)
    setValues({ ...responce.data })
  }

  React.useEffect(() => {
    if (router.query.id) {
      loadOneCat()
    }
  }, [router.query])
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const onSubmit = async data => {
    try {
      await post(`http://localhost:3000/category/update/${router.query.id}`, { ...data })
      Router.push('/super-admin/categories')
    } catch (error) {
      if (401 === error.response.status) {
        console.log('pizda')
      }
      console.log('error', error)
    }
  }

  return (
    <MuiThemeProvider>
      <div>
        <AppBar title='Update Category' onLeftIconButtonClick={() => handleDrawerOpen()} />
        <Drawer variant='persistent' anchor='left' open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>close</IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary='Create Category' onClick={() => Router.push('/super-admin/create/category')} />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Categories' onClick={() => Router.push('/super-admin/categories')} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>Logout</ListItem>
          </List>
        </Drawer>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {!!defaultValues && <CategoryForm onSubmit={onSubmit} defaultValues={{ ...defaultValues }}/>}
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default UpdateCategory
