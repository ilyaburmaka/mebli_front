import React from "react"
import {
  Wrapper,
  LeftSide,
  RightSide,
  Line,
  MenuItem,
  Item,
  FlexContainerNav,
  PhoneIcon,
  MobileText,
} from "./Views"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Header = () => (
  <Container>
    <Row>
      <Wrapper>
        <div className={'col-lg-1'}>
          <LeftSide>
            <div>АТЕЛЬЄ СТОЛЯРНИХ ВИРОБІВ</div>
            <div>«ФАСАД»</div>
          </LeftSide>
        </div>
        <Col>
          <FlexContainerNav>
            <Item isActive>ВИРОБНИЦТВО</Item>
            <Item>КАТАЛОГ</Item>
            <Item>ВІДГУКИ</Item>
          </FlexContainerNav>
        </Col>
        <Col>
          <RightSide>
            <PhoneIcon src={"phone.png"} />
            <MobileText>096 721 65 38</MobileText>
            <MenuItem isActive>УКР</MenuItem>
            <MenuItem>РУС</MenuItem>
            <MenuItem>ENG</MenuItem>
          </RightSide>
        </Col>
      </Wrapper>
    </Row>
    <Line />
  </Container>
)

export default Header
