import * as React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { useFieldArray, useForm } from 'react-hook-form'
import axios from 'axios'

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

const CreateCategoryForm = ({ onSubmit, defaultValues }) => {
  const [data, setData] = React.useState([])
  const [catId, setId] = React.useState(null)
  const { register, handleSubmit, errors, setValue, control, getValues } = useForm({ defaultValues })

  const getData = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.get(`http://localhost:3000/category`, {}, { token })
      setData(response.data)
    } catch (e) {
      console.log('getData.error', e)
    }
  }

  const handleFg = () => {
    const dat1 = getValues()
    setId(dat1.categoryId)
  }
  React.useEffect(async () => {
    await getData()
    const dat1 = getValues()
    console.log(dat1)
    setId(dat1.categoryId)
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
        <Label>Name</Label>
        <CustomInput name='name' type='text' ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Name Rus</Label>
        <CustomInput name='nameRu' type='text' ref={register({ required: true })} />
        {errors.nameRu && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Name Eng</Label>
        <CustomInput name='nameEn' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Description</Label>
        <CustomInput name='description' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Description Ru</Label>
        <CustomInput name='descriptionRus' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Description Eng</Label>
        <CustomInput name='descriptionEng' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Materials</Label>
        <CustomInput name='materials' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Materials Rus</Label>
        <CustomInput name='materialsRus' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Materials Eng</Label>
        <CustomInput name='materialsEng' type='text' ref={register({ required: true })} />
        {errors.nameEn && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Category</Label>
        <CustomSelect name='categoryId' ref={register({ required: true })} onChange={handleFg}>
          {data.map((category, index) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </CustomSelect>
        {errors.type && <span>This field is required</span>}
      </Row>
      <Row>
        <Label>Subcategory</Label>
        <CustomSelect name='subcategoryId' ref={register({ required: true })}>
          {data.map((category, index) => {
            console.log(catId, category)
            if (category.id === catId) {
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
        {errors.type && <span>This field is required</span>}
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
      <RaisedButton label='Submit' type='submit' primary={true} style={style} />
    </Form>
  )
}
const style = {
  margin: '15px 0px',
  width: '100%'
}

export default CreateCategoryForm
