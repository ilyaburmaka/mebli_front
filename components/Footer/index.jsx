import React from 'react'
import styled from 'styled-components'
import { CurrentContext } from '../../contexts/currentContext'
import { Item } from '../Header/Views'

const Wrapper = styled.footer`
  height: 240px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/static/footer.png');
`
const WhiteBlock = styled.div`
  width: 7px;
  height: auto;
  background-color: white;
  margin-right: 16px;
`
const WrapperAddress = styled.div`
  margin-top: 30px;
  margin-left: 80px;
  display: flex;
`

const TextAddress = styled.address`
  font-size: 16px;
  width: 200px;
  margin: unset;
  font-family: Roboto !important;
  color: white;
`
const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 920px;
`

const Wrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const footer = {
  ua: {
    street: 'Сумська область, м.Ромни, вул. Гетьмана-Мазепи, 83'
  },
  ru: {
    street: 'Сумская область, г.Ромны, ул. Гетмана-Мазепы, 83'
  },
  en: {
    street: 'Ukraine, Sumy, street Getmana Mazepa, 83'
  }
}

const Footer = () => {
  const { currentLang } = React.useContext(CurrentContext)

  return (
    <Wrapper>
      <Wrap>
        <InnerWrapper>
          <WrapperAddress>
            <WhiteBlock />
            <TextAddress>{footer[`${currentLang}`]?.street}</TextAddress>
          </WrapperAddress>
        </InnerWrapper>
      </Wrap>
    </Wrapper>
  )
}

export default Footer
