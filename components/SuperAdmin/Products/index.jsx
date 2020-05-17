import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Router } from 'next/router'
import { CurrentContext } from 'contexts/currentContext'
import styled from 'styled-components'

const EditIcon = styled.img`
  width: 17px;
  margin-left: 9px;
  cursor: pointer;
`

const Products = () => {
  const { products, removeProduct } = React.useContext(CurrentContext)

  const [data, setData] = React.useState([])

  const getData = async () => {
    const token = localStorage.getItem('accessToken')
    const response = await products(token)
    setData(response)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const onProductUpdateClick = id => {
    Router.push(`/super-admin/update/product?id=${id}`)
  }

  const onProductRemoveClick = async id => {
    const token = localStorage.getItem('accessToken')
    await removeProduct(id, token)
    await getData()
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Name Ru</TableCell>
            <TableCell>Name En</TableCell>
            <TableCell>Description ua</TableCell>
            <TableCell>Description Ru</TableCell>
            <TableCell>Description En</TableCell>
            <TableCell>Manteeriaal Ua</TableCell>
            <TableCell>Manteeriaal Ru</TableCell>
            <TableCell>Manteeriaal En</TableCell>
            <TableCell align='right'>Count Photo</TableCell>
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
              <TableCell align='left'>{row.nameRu}</TableCell>
              <TableCell align='left'>{row.nameEn}</TableCell>
              <TableCell align='left'>{row.description}</TableCell>
              <TableCell align='left'>{row.descriptionRus}</TableCell>
              <TableCell align='left'>{row.descriptionEng}</TableCell>
              <TableCell align='left'>{row.materials}</TableCell>
              <TableCell align='left'>{row.materialsRus}</TableCell>
              <TableCell align='left'>{row.materialsEng}</TableCell>
              <TableCell align='right'>{row.photos.length}</TableCell>
              <TableCell align='right'>
                <EditIcon src='/static/pencil.svg' onClick={() => onProductUpdateClick(row.id)} />
                <EditIcon src='/static/trash.svg' onClick={() => onProductRemoveClick(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Products
