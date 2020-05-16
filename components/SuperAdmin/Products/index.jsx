import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import Router from 'next/router'

const Products = () => {
  const [data, setData] = React.useState([])

  const getData = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      // const response = await axios.get(`http://localhost:3000/category`, {}, { token })
      // setData(response.data)
    } catch (e) {
      console.log('getData.error', e)
    }
  }

  React.useEffect(() => {
    getData()
  }, [])

  const onCategoryUpdateClick = id => {
    Router.push(`/super-admin/update/category?id=${id}`, `/super-admin/update/category?id=${id}`)
  }

  const onCategoryRemoveClick = async id => {
    try {
      const token = localStorage.getItem('accessToken')
      await axios.delete(`http://localhost:3000/category/${id}`, {}, { token })
      await getData()
    } catch (e) {
      console.log('getData.error', e)
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'>Count Photo</TableCell>
            <TableCell align='right' />
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='right'>{row.subcategory.length}</TableCell>
              <TableCell align='right'>0</TableCell>
              <TableCell align='right' onClick={() => onCategoryUpdateClick(row.id)}>
                edit
              </TableCell>
              <TableCell align='right' onClick={() => onCategoryRemoveClick(row.id)}>
                remove
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Products
