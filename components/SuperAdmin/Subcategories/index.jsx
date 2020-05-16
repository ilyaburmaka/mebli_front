import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Router from 'next/router'
import { CurrentContext } from 'contexts/currentContext'
import styled from 'styled-components'

const EditIcon = styled.img`
  width: 17px;
  margin-left: 9px;
  cursor: pointer;
`

const tableLanguage = {
  ua: {
    name: 'Назва Українською',
    nameSecond: 'Назва Російскою',
    nameThird: 'Назва Англійською',
    image: 'Іконка',
    categoryName: 'Категорія',
    countProd: 'К-сть продуктів'
  },
  ru: {
    name: 'Имя по Украински',
    nameSecond: 'Имя по Русском',
    nameThird: 'Имя по Английскому',
    image: 'Иконка',
    categoryName: 'Категория',
    countProd: 'К-во товаров'
  },
  en: {
    name: 'Name in Ukrainian',
    nameSecond: 'Name in Russian',
    nameThird: 'Name in English',
    image: 'Image',
    categoryName: 'Category Name',
    countProd: 'Count of product'
  }
}

const Subcategories = () => {
  const [data, setData] = React.useState([])
  const { subcategories, removeSubcategory, link, currentLang } = React.useContext(CurrentContext)

  const loadData = async () => {
    const response = await subcategories()
    setData(response)
  }

  React.useEffect(() => {
    loadData()
  }, [])

  const onSubUpdateClick = id => {
    Router.push(`/super-admin/update/subcategory?id=${id}`)
  }

  const onSubRemoveClick = async id => {
    await removeSubcategory(id)
    loadData()
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>{tableLanguage[`${currentLang}`]?.name}</TableCell>
            <TableCell>{tableLanguage[`${currentLang}`]?.nameSecond}</TableCell>
            <TableCell>{tableLanguage[`${currentLang}`]?.nameThird}</TableCell>
            <TableCell align='right'>{tableLanguage[`${currentLang}`]?.image}</TableCell>
            <TableCell align='right'>{tableLanguage[`${currentLang}`]?.categoryName}</TableCell>
            <TableCell align='right'>{tableLanguage[`${currentLang}`]?.countProd}</TableCell>
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
              <TableCell align='right'>
                <img src={link + `assets/${row.photo.name}`} width={100} />
              </TableCell>
              <TableCell align='right'>{row.category.name}</TableCell>
              <TableCell align='right'>{row.products.length}</TableCell>
              <TableCell align='right'>
                <EditIcon src='/static/pencil.svg' onClick={() => onSubUpdateClick(row.id)} />
                <EditIcon src='/static/trash.svg' onClick={() => onSubRemoveClick(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Subcategories
