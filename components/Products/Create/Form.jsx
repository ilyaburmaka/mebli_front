import * as React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { useFieldArray, useForm } from 'react-hook-form'
import axios from 'axios'
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

const tableLanguage = {
  ua: {
    name: 'Назва Українською',
    nameSecond: 'Назва Російскою',
    nameThird: 'Назва Англійською',
    description: 'Опис Українською',
    descriptionSecond: 'Опис Російською',
    descriptionThird: 'Опис Англійською',
    countProd: 'К-сть продуктів',
    reqMessage: "Це поле є обов'язковим",
    type: 'Розділ',
    btnName: 'Зберегти'
  },
  ru: {
    name: 'Имя по Украински',
    nameSecond: 'Имя по Русском',
    nameThird: 'Имя по Английскому',
    description: 'Описание по Украински',
    descriptionSecond: 'Описание по Русском',
    descriptionThird: 'Описание по Английскому',
    countProd: 'К-во товаров',
    reqMessage: 'Поле долдно быть заполненым',
    type: 'Тип',
    btnName: 'Сохранить'
  },
  en: {
    name: 'Name in Ukrainian',
    nameSecond: 'Name in Russian',
    nameThird: 'Name in English',
    description: 'Description in Ukrainian',
    descriptionSecond: 'Description in Russian',
    descriptionThird: 'Description in English',
    countProd: 'Count of product',
    reqMessage: 'This field is required',
    type: 'Type',
    btnName: 'Submit'
  }
}

const CreateCategoryForm = ({ onSubmit, defaultValues }) => {
  const { uploadFiles, createProduct, categories } = React.useContext(CurrentContext)
  const [data, setData] = React.useState([])
  const [catId, setId] = React.useState(null)
  const { register, handleSubmit, errors, setValue, control, getValues } = useForm({ defaultValues })
  const { currentLang } = React.useContext(CurrentContext)

  const getData = async () => {
    const response = await categories()
    setData(response)
    setId(response[0].id)
  }

  const handleFg = async () => {
    const dat1 = getValues()
    console.log(dat1)
    setId(dat1.categoryId)
  }

  React.useEffect(() => {
    getData()
    handleFg()
  }, [])

  const handleChange = event => {
    if (event && !!event.target) {
      setValue('file', event.target.files[0])
    }
  }

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'files'
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.name}</Label>
        <CustomInput name='name' type='text' ref={register({ required: true })} />
        {errors.name && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
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
        <Label>{tableLanguage[`${currentLang}`]?.description}</Label>
        <CustomInput name='description' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.descriptionSecond}</Label>
        <CustomInput name='descriptionRus' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>{tableLanguage[`${currentLang}`]?.descriptionThird}</Label>
        <CustomInput name='descriptionEng' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Materials</Label>
        <CustomInput name='materials' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Materials Rus</Label>
        <CustomInput name='materialsRus' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Materials Eng</Label>
        <CustomInput name='materialsEng' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Category</Label>
        <CustomSelect name='categoryId' ref={register({ required: true })} onChange={handleFg}>
          {data.map((category, index) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </CustomSelect>
        {errors.type && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Subcategory</Label>
        <CustomSelect name='subcategoryId' ref={register({ required: true })}>
          {data.map((category, index) => {
            if (category.id.toString() === catId.toString()) {
              console.log(catId, category, '111')

              return (
                <>
                  {category.subcategory.map(subdata => (
                    <option value={subdata.id}>{subdata.name}</option>
                  ))}
                </>
              )
            }
          })}
        </CustomSelect>
        {errors.type && <span>{tableLanguage[`${currentLang}`]?.reqMessage}</span>}
      </Row>
      <Row>
        <Label>Files</Label>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input name={`files[${index}]`} type='file' onChange={handleChange} ref={register()} />
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
      </Row>
      <section>
        <button type='button' onClick={() => append({ name: 'files' })} disabled={fields.length >= 5}>
          Add photo
        </button>
      </section>
      <RaisedButton label={tableLanguage[`${currentLang}`]?.btnName} type='submit' primary={true} style={style} />
    </Form>
  )
}
const style = {
  margin: '15px 0px',
  width: '100%'
}

export default CreateCategoryForm
