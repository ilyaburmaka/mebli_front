import * as React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

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
  const { register, handleSubmit, errors } = useForm({ defaultValues })
  console.log(errors)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Label>Name</Label>
        <CustomInput name='name' type='text' ref={register({ required: true })} />
        {errors.name?.type === 'required' && <span>This field is required</span>}
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
        <Label>Type</Label>
        <CustomSelect name='type' ref={register({ required: true })}>
          <option value='STANDARD'>Standard</option>
          <option value='NOT_STANDARD'>Not Standard</option>
        </CustomSelect>
        {errors.type && <span>This field is required</span>}
      </Row>
      <RaisedButton label='Submit' type='submit' primary={true} style={style} />
    </Form>
  )
}
const style = {
  margin: '15px 0px',
  width: '100%'
}

export default CreateCategoryForm
