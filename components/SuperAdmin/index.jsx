import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Grid from '@material-ui/core/Grid'
import { post } from 'axios'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as React from 'react'
import Router from 'next/router'

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px);
  justify-content: center;
`

const Login = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async data => {
    try {
      const result = await post(`http://localhost:3000/authorization/signin`, { ...data })
      console.log('result', result)
      localStorage.setItem('accessToken', result.data.accessToken)
      Router.push('/super-admin/categories')
    } catch (error) {
      if (401 === error.response.status) {
        console.log('pizda')
        console.log('error', error)
      }
    }
  }
  return (
    <MuiThemeProvider>
      <div>
        <AppBar title='Login' showMenuIconButton={false} />
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Label>login</Label>
                <CustomInput name='username' type='text' ref={register({ required: true })} />
                {errors.username && <span>This field is required</span>}
              </Row>
              <Row>
                <Label>password</Label>
                <CustomInput name='password' type='password' ref={register({ required: true })} />
                {errors.password && <span>This field is required</span>}
              </Row>
              <RaisedButton label='Submit' type='submit' primary={true} style={style} />
            </Form>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

const style = {
  margin: '15px 0px',
  width: '100%'
}

export default Login
