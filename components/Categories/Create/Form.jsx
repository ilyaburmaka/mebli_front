import * as React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CurrentContext } from 'contexts/currentContext'

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
    standard: 'Стандартні',
    notstd: 'Нестандартні',
    reqMessage: "Це поле є обов'язковим",
    type: 'Розділ',
    btnName: 'Зберегти'
  },
  ru: {
    name: 'Имя по Украински',
    nameSecond: 'Имя по Русском',
    nameThird: 'Имя по Английскому',
    standard: 'Стандартные',
    notstd: 'Нестандартные',
    reqMessage: 'Поле долдно быть заполненым',
    type: 'Тип',
    btnName: 'Сохранить'
  },
  en: {
    name: 'Name in Ukrainian',
    nameSecond: 'Name in Russian',
    nameThird: 'Name in English',
    standard: 'Standard',
    notstd: 'Not-standard',
    reqMessage: 'This field is required',
    type: 'Type',
    btnName: 'Submit'
  }
}

const CreateCategoryForm = ({ onSubmit, defaultValues }) => {
  const { currentLang } = React.useContext(CurrentContext)
  const { register, handleSubmit, errors } = useForm({ defaultValues })

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
        <Label>{tableLanguage[`${currentLang}`]?.type}</Label>
        <CustomSelect name='type' ref={register({ required: true })}>
          <option value='STANDARD'>{tableLanguage[`${currentLang}`]?.standard}</option>
          <option value='NOT_STANDARD'>{tableLanguage[`${currentLang}`]?.notstd}</option>
        </CustomSelect>
        {errors.type && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <RaisedButton label={tableLanguage[`${currentLang}`]?.btnName} type='submit' primary={true} style={style} />
    </Form>
  )
}

export default CreateCategoryForm
