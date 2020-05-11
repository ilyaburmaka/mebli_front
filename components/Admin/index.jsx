import * as React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Router from 'next/router'

const AdminHeader = () => {
  const [data, setData] = React.useState([])
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const getData = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.get(`http://localhost:3000/category`, {}, { token })
      setData(response.data)
    } catch (e) {
      console.log('getData.error', e)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <MuiThemeProvider>
      <div>
        <AppBar title='Categories' onLeftIconButtonClick={() => handleDrawerOpen()} />
        <Drawer variant='persistent' anchor='left' open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <img src='/static/close.svg' />
            </IconButton>
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
          ></Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default AdminHeader
