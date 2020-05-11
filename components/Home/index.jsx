import React from 'react'
import styled from 'styled-components'
import { CurrentContext } from '../../contexts/currentContext'
import axios from 'axios'
const WrapperPicture = styled.div`
  width: 100%;
  display: flex;
  height: 545px;
  background-image: url('/static/header_index.png');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center 0px;
  background-size: cover;

  @media (max-width: 1024px) {
    background-position: center;
  }
`

const WrapperContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 35px;
  margin-bottom: 60px;
  max-width: 926px;
  width: 100%;
`
const Title = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  color: #793000;
`

const EntityText = styled.p`
  font-family: 'MyriadPro';
  font-size: 14px;
  line-height: 16.8px;
`
const Line = styled.div`
  margin-top: 23px;
  width: 332px;
  height: 2px;
  background-color: #793000;
`

const ImageExampleProd = styled.img`
  height: 207px;
  width: 216px;
`
const WrapperImage = styled.div`
  display: flex;
  margin-top: ${({ withPadding }) => withPadding && '20px'};
  flex-wrap: wrap;
  img:not(:first-child) {
    margin-left: 20px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 16px;
  ${EntityText} {
    width: 100%;
    :last-child {
      margin-left: 15px;
    }
  }
`

const GaleryWrapper = styled.div`
  background-color: #efe4dd;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 350px;
`

const home = {
  ua: {
    titleFirst: 'МАЙСТЕРНЯ',
    titleSecond: 'Галерея'
  },
  ru: {
    titleFirst: 'МАСТЕРСКАЯ',
    titleSecond: 'ГАЛЕРЕЯ'
  },
  en: {
    titleFirst: 'WORKSHOP',
    titleSecond: 'GALLERY'
  }
}
const Home = () => {
  const { currentLang } = React.useContext(CurrentContext)
  const data = axios.get('https://afternoon-scrubland-24663.herokuapp.com/tasks')
  console.log(data)
  return (
    <div
      style={{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <WrapperPicture />
      <WrapperContent>
        <Title>{home[`${currentLang}`]?.titleFirst}</Title>
        <Line />
        <div>
          <TextWrapper>
            <EntityText>
              Ми виготовляємо ексклюзивні дерев'яні вироби з натурального дерева: сходи, двері, меблі, також корпусні
              меблі з якісного, сертифікованого ДСП, МДФ, масиву дерева, фанери шпонированной. Виготовлення можливо за
              Вашими ескізами, виїзд на місце для зняття розмірів.
            </EntityText>
            <EntityText>
              При виготовленні виробів використовуються технологія та якісні натуральні фарби провідних європейських
              виробників. Проведемо реставрацію вінтажних виробів з дерева. У нас тільки індивідуальний підхід до
              кожного клієнта.
            </EntityText>
          </TextWrapper>
          <WrapperImage>
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
          </WrapperImage>
        </div>
      </WrapperContent>
      <GaleryWrapper>
        <WrapperContent>
          <Title>{home[`${currentLang}`]?.titleSecond}</Title>
          <Line />
          <TextWrapper>
            <EntityText>
              Ми виготовляємо ексклюзивні дерев'яні вироби з натурального дерева: сходи, двері, меблі, також корпусні
              меблі з якісного, сертифікованого ДСП, МДФ, масиву дерева, фанери шпонированной. Виготовлення можливо за
              Вашими ескізами, виїзд на місце для зняття розмірів.
            </EntityText>
            <EntityText>
              При виготовленні виробів використовуються технологія та якісні натуральні фарби провідних європейських
              виробників. Проведемо реставрацію вінтажних виробів з дерева. У нас тільки індивідуальний підхід до
              кожного клієнта.
            </EntityText>
          </TextWrapper>
          <WrapperImage>
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
          </WrapperImage>
          <WrapperImage withPadding>
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
            <ImageExampleProd src='/static/img_square.png' />
          </WrapperImage>
        </WrapperContent>
      </GaleryWrapper>
    </div>
  )
}

export default Home
