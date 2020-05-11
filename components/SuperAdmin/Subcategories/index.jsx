import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'
import { CurrentContext } from '../../../contexts/currentContext'

const Subcategories = () => {
  const [data, setData] = React.useState([])
  const { subcategories, removeSubcategory, link } = React.useContext(CurrentContext)

  const getData = async () => {
    const response = await subcategories()
    setData(response)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const onCategoryUpdateClick = id => {
    Router.push(`/super-admin/update/category?id=${id}`, `/super-admin/update/category?id=${id}`)
  }

  const onCategoryRemoveClick = async id => {
    await removeSubcategory(id)
    await getData()
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category Name</TableCell>
            <TableCell align='right'>Image</TableCell>
            <TableCell align='right'>Count Products</TableCell>
            <TableCell align='right' />
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='left'>{row.category.name}</TableCell>
              <TableCell align='right'>
                <img src={link + `assets/${row.photo.name}`} alt='' width={100} />
              </TableCell>
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

export default Subcategories
