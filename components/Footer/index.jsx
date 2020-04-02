import React from 'react'
import styled from 'styled-components'

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
const Footer = () => (
  <Wrapper>
    <Wrap>
      <InnerWrapper>
        <WrapperAddress>
          <WhiteBlock />
          <TextAddress>Сумська область, м.Ромни, вул. Гетьмана-Мазепи, 83</TextAddress>
        </WrapperAddress>
      </InnerWrapper>
    </Wrap>
  </Wrapper>
)

export default Footer
