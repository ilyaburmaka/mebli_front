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
import { useRouter } from 'next/router'
import { CurrentContext } from '../../contexts/currentContext'

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #efe4dd;
  justify-content: center;
  @media (max-width: 1023px) {
    justify-content: flex-start;
  }
`

const MobileWrapper = styled.div`
display: none;
  @media (max-width: 1023px) {
   display: block;
`
const header = {
  ua: {
    title: 'АТЕЛЬЄ СТОЛЯРНИХ ВИРОБІВ',
    name: '«ФАСАД»',
    virobi: 'виробництво',
    catalog: 'каталог',
    feedback: 'відгуки'
  },
  ru: {
    title: 'АТЕЛЬЕ СТОЛЯРНЫХ ИЗДЕЛИЙ',
    name: '«ФАСАД»',
    virobi: 'ПРОИЗВОДСТВО',
    catalog: 'КАТАЛОГ',
    feedback: 'ОТЗЫВЫ'
  },
  en: {
    title: 'ATELIER OF TABLE PRODUCTS',
    name: '«FASAD»',
    virobi: 'PRODUCTION',
    catalog: 'CATALOG',
    feedback: 'REVIEWS'
  }
}

export const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: #611e00;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  z-index: 999999;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 5px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  const router = useRouter()
  const { currentLang,onLangClick } = React.useContext(CurrentContext)

  const handleClick = (value) => {
    props.setOpen(false)
    onLangClick(value)
  }
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Item isActive={router.pathname === '/'} onClick={() => router.push('/')}>
          {header[`${currentLang}`]?.virobi}
        </Item>
        <Item isActive={router.pathname === '/catalog'} onClick={() => router.push('/catalog')}>
          {header[`${currentLang}`]?.catalog}
        </Item>
        <Item isActive={router.pathname === '/feedback'} onClick={() => router.push('/feedback')}>
          {header[`${currentLang}`]?.feedback}
        </Item>
        <MobileText>096 721 65 38</MobileText>
        <MenuItem isActive={'ua' === currentLang} onClick={() => handleClick('ua')}>
          {'en' === currentLang ? 'UA' : 'УКР'}
        </MenuItem>
        <MenuItem isActive={'ru' === currentLang} onClick={() => handleClick('ru')}>
          {'en' === currentLang ? 'RU' : 'РУС'}
        </MenuItem>
        <MenuItem isActive={'en' === currentLang} onClick={() => handleClick('en')}>
          ENG
        </MenuItem>
    </StyledMenu>
  )
}
const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false

  return (
    <StyledBurger
      aria-label='Toggle menu'
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

const Header = () => {
  const router = useRouter()
  const { currentLang, onLangClick } = React.useContext(CurrentContext)
  const [open, setOpen] = React.useState(false)
  const menuId = 'main-menu'
  React.useEffect(() => {
    if (!!open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])
  return (
    <>
      <WrapperContainer>
        <LeftSide>
          <div>{header[`${currentLang}`]?.title}</div>
          <div>{header[`${currentLang}`]?.name}</div>
        </LeftSide>
        <FlexContainerNav>
          <Item isActive={router.pathname === '/'} onClick={() => router.push('/')}>
            {header[`${currentLang}`]?.virobi}
          </Item>
          <Item isActive={router.pathname === '/catalog'} onClick={() => router.push('/catalog')}>
            {header[`${currentLang}`]?.catalog}
          </Item>
          <Item isActive={router.pathname === '/feedback'} onClick={() => router.push('/feedback')}>
            {header[`${currentLang}`]?.feedback}
          </Item>
        </FlexContainerNav>
        <RightSide>
          <PhoneIcon src={'/static/phone.png'} />
          <MobileText>096 721 65 38</MobileText>
          <MenuItem isActive={'ua' === currentLang} onClick={() => onLangClick('ua')}>
            {'en' === currentLang ? 'UA' : 'УКР'}
          </MenuItem>
          <MenuItem isActive={'ru' === currentLang} onClick={() => onLangClick('ru')}>
            {'en' === currentLang ? 'RU' : 'РУС'}
          </MenuItem>
          <MenuItem isActive={'en' === currentLang} onClick={() => onLangClick('en')}>
            ENG
          </MenuItem>
        </RightSide>
        <MobileWrapper>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </MobileWrapper>
      </WrapperContainer>
      <Line />
    </>
  )
}

export default Header
