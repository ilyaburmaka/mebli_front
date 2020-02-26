import React from 'react'
import {
  Wrapper,
  LeftSide,
  RightSide,
  Line,
  MenuItem,
  Item,
  FlexContainerNav,
  PhoneIcon,
  MobileText
} from '../Header/Views'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #efe4dd;
  justify-content: center;
`

const Header = () => (
  <>
    <WrapperContainer>
      <LeftSide>
        <div>АТЕЛЬЄ СТОЛЯРНИХ ВИРОБІВ</div>
        <div>«ФАСАД»</div>
      </LeftSide>
      <FlexContainerNav>
        <Item isActive>виробництво</Item>
        <Item>каталог</Item>
        <Item>відгуки</Item>
      </FlexContainerNav>
      <RightSide>
        <PhoneIcon src={'/static/phone.png'} />
        <MobileText>096 721 65 38</MobileText>
        <MenuItem isActive>УКР</MenuItem>
        <MenuItem>РУС</MenuItem>
        <MenuItem>ENG</MenuItem>
      </RightSide>
    </WrapperContainer>
    <Line />
  </>
)

export default Header
