import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'
import styled from 'styled-components'
import { CurrentContext } from 'contexts/currentContext'

const EditIcon = styled.img`
  width: 17px;
  margin-left: 9px;
  cursor: pointer;
`
const CustomTableRow = styled(TableRow)`
  td:last-child {
    width: 90px;
  }
`

const tableLanguage = {
  ua: {
    name: 'Назва Українською',
    nameSecond: 'Назва Російскою',
    nameThird: 'Назва Англійською',
    countSub: 'К-сть підкатегорій',
    countProd: 'К-сть продуктів'
  },
  ru: {
    name: 'Имя по Украински',
    nameSecond: 'Имя по Русском',
    nameThird: 'Имя по Английскому',
    countSub: 'К-во подкатегорий',
    countProd: 'К-во товаров'
  },
  en: {
    name: 'Name in Ukrainian',
    nameSecond: 'Name in Russian',
    nameThird: 'Name in English',
    countSub: 'Count of sub-es',
    countProd: 'Count of product'
  }
}

const BorderedCell = styled(TableCell)`
  font-weight: 600 !important;
`

const Categories = () => {
  const { currentLang, categories, removeCategory } = React.useContext(CurrentContext)
  const [data, setData] = React.useState([])

  const getData = async () => {
    const token = localStorage.getItem('accessToken')
    const response = await categories(token)
    setData(response)
  }

  React.useEffect(() => {
    getData()
  }, [categories])

  const onCategoryUpdateClick = id => Router.push(`/super-admin/update/category?id=${id}`)

  const onCategoryRemoveClick = async id => {
    const token = localStorage.getItem('accessToken')
    await removeCategory(id, token)
    await getData()
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <BorderedCell>№</BorderedCell>
            <BorderedCell>{tableLanguage[`${currentLang}`]?.name}</BorderedCell>
            <BorderedCell>{tableLanguage[`${currentLang}`]?.nameSecond}</BorderedCell>
            <BorderedCell>{tableLanguage[`${currentLang}`]?.nameThird}</BorderedCell>
            <BorderedCell align='right'>{tableLanguage[`${currentLang}`]?.countSub}</BorderedCell>
            <BorderedCell align='right'>{tableLanguage[`${currentLang}`]?.countProd}</BorderedCell>
            <BorderedCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(row => (
            <CustomTableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='left'>{row.nameRu}</TableCell>
              <TableCell align='left'>{row.nameEn}</TableCell>
              <TableCell align='right'>{row.subcategory.length}</TableCell>
              <TableCell align='right'>{row.products.length}</TableCell>
              <TableCell align='right'>
                <EditIcon src='/static/pencil.svg' onClick={() => onCategoryUpdateClick(row.id)} />
                <EditIcon src='/static/trash.svg' onClick={() => onCategoryRemoveClick(row.id)} />
              </TableCell>
            </CustomTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Categories
