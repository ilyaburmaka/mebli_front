import React from "react"
import styled from "styled-components"
import colors from "../../../themes/colors"

const WrapperPicture = styled.div`
  width: 100%;
  display: flex;
`
const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 60px;
`
const Title = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.darkRed300};
`

const EntityText = styled.p`
  font-size: 14px;
`
const Line = styled.div`
  margin-top: 23px;
  width: 332px;
  height: 2px;
  background-color: ${colors.darkRed300};
`

const EntityImage = styled.img`
  height: 545px;
  width: 100%;
`

const ImageExampleProd = styled.img`
  height: 207px;
  width: 216px;
`
const WrapperImage = styled.div`
  display: flex;
  img:not(:first-child) {
    margin-left: 20px;
  }
`
const Home = () => (
  <React.Fragment>
    <WrapperPicture>
      <EntityImage src="header_index.png" />
    </WrapperPicture>
    <WrapperContent>
      <Title>Майстерня</Title>
      <Line />
      <div>
        <EntityText>
          Можна виділити кілька переваг виготовлення меблів своїми руками:
          економія грошових коштів можливість виготовити меблі, які
          відповідатимуть всім вимогам і побажанням господарів можливість
          довести самому собі, який я молодець самі незвичайні ідеї можна
          втілити в життя. Сьогодні знайти матеріали з приводу того, як зробити
          меблі своїми руками нескладно. Випускається спеціальна література,
          багато корисної інформації є в інтернеті, можна подивитися не тільки
          схеми, креслення та інструкції, а й навіть відео. Якщо у людини лежить
          душа до такої справи, то навчитися буде нескладно. Можна виділити
          кілька переваг виготовлення меблів своїми руками
        </EntityText>
        <EntityText>
          Можна виділити кілька переваг виготовлення меблів своїми руками:
          економія грошових коштів можливість виготовити меблі, які
          відповідатимуть всім вимогам і побажанням господарів можливість
          довести самому собі, який я молодець самі незвичайні ідеї можна
          втілити в життя. Сьогодні знайти матеріали з приводу того, як зробити
          меблі своїми руками нескладно. Випускається спеціальна література,
          багато корисної інформації є в інтернеті, можна подивитися не тільки
          схеми, креслення та інструкції, а й навіть відео. Якщо у людини лежить
          душа до такої справи, то навчитися буде нескладно.
        </EntityText>
        <WrapperImage>
          <ImageExampleProd src="img_square.png" />
          <ImageExampleProd src="img_square.png" />
          <ImageExampleProd src="img_square.png" />
          <ImageExampleProd src="img_square.png" />
        </WrapperImage>
      </div>
    </WrapperContent>
    <WrapperContent>
      <Title>Галерея</Title>
      <Line />
    </WrapperContent>
  </React.Fragment>
)

export default Home
