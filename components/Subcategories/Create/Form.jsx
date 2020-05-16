import * as React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CurrentContext } from '../../../contexts/currentContext'

const Row = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  font-family: 'MyriadPro';
  text-transform: uppercase;
  color: #535353;
`

const CustomInput = styled.input`
  width: 280px;
  border: 1px solid darkgray;
  border-radius: 8px;
  height: 35px;
  padding: 3px;
  font-size: 16px;

  :focus {
    outline: none;
  }
`
const CustomSelect = styled.select`
  width: 280px;
  border: 1px solid darkgray;
  border-radius: 8px;
  height: 35px;
  padding: 3px;
  font-size: 16px;

  :focus {
    outline: none;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px);
  justify-content: center;
`

const style = {
  margin: '15px 0px',
  width: '100%'
}

const tableLanguage = {
  ua: {
    name: 'Назва Українською',
    nameSecond: 'Назва Російскою',
    nameThird: 'Назва Англійською',
    reqMessage: "Це поле є обов'язковим",
    file: 'Іконка',
    category: 'Категорія',
    btnName: 'Зберегти'
  },
  ru: {
    name: 'Имя по Украински',
    nameSecond: 'Имя по Русском',
    nameThird: 'Имя по Английскому',
    reqMessage: 'Поле долдно быть заполненым',
    file: 'Иконка',
    category: 'Категория',
    btnName: 'Сохранить'
  },
  en: {
    name: 'Name in Ukrainian',
    nameSecond: 'Name in Russian',
    nameThird: 'Name in English',
    reqMessage: 'This field is required',
    file: 'Photo',
    category: 'Category Name',
    btnName: 'Submit'
  }
}

const CreateSubcategoryForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, errors, setValue } = useForm({ defaultValues })
  const [data, setData] = React.useState([])
  const { categories, currentLang } = React.useContext(CurrentContext)

  const getData = async () => {
    const token = localStorage.getItem('accessToken')
    const response = await categories(token)
    setData(response)
  }

  React.useEffect(() => {
    getData()
  }, [categories])

  const handleChange = event => {
    if (event && !!event.target) {
      setValue('file', event.target.files[0])
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.name}</Label>
        <CustomInput name='name' type='text' ref={register({ required: true })} />
        {errors.name?.type === 'required' && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.nameSecond}</Label>
        <CustomInput name='nameRu' type='text' ref={register({ required: true })} />
        {errors.nameRu && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.nameThird}</Label>
        <CustomInput name='nameEn' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.category}</Label>
        <CustomSelect name='categoryId' ref={register()}>
          {data?.map(({ name, id }) => (
            <option key={name + id} value={id}>
              {name}
            </option>
          ))}
        </CustomSelect>
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.file}</Label>
        <div>
          <input name={`photo`} type='file' onChange={handleChange} ref={register()} />
        </div>
      </Row>
      <RaisedButton label={tableLanguage[`${currentLang}`]?.btnName} type='submit' primary={true} style={style} />
    </Form>
  )
}

export default CreateSubcategoryForm
