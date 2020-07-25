import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import styled from '@emotion/styled'
import { Carousel } from 'react-bootstrap'
// import EmblaCarousel from '../components/EmblaCarousel'
import slide01 from '../../public/images/tennis1.jpeg'
import slide02 from '../../public/images/tennis2.jpeg'
import slide03 from '../../public/images/tennis3.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = styled.div`
.testing {
    color: red;
}
.carousel-border {
  width: 50%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  border: .2rem solid #ececec;
  padding: 20px;
  // padding-right: 100px;
  // padding-left: 100px;

  // border-width: .2rem .2rem 0;
  // border-radius: 8px 8px 0 0;
  // position: relative;
  // padding: 1rem;
  // // border: .2rem solid #ececec;
  // color: #212529;
  // box-sizing: border-box;
}
.inner {
position: relative;
box-sizing: border-box;
padding-bottom: 0;
}

h1 {
  text-align: center;
  font-size: 30px;
  margin: 45px;
  text-decoration: bold;
  font-style: italic;
  font-weight: 600
}

h2 {
  text-align: center;
  font-size: 25px;
  text-decoration: bold;
  font-weight: 600;
  margin-bottom: 40px
}

.hours {
  border: 10px double #ececec;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  width: 60%;
}

.body-div {
  margin: auto;
  margin-top: 60px;
  width: 90%;
  background-color: black;
  padding: 100px;
  color: white;
}

.hours-columns {
  display: flex;
  flex-direction: row;
  margin-top: 20px
}

.hours-information {
  margin: auto
}

.columns {
  display: flex;
  flex-direction: row;
  margin-top: 20px
}

.information {
  margin: auto;
}

.text-information {
  margin: auto;
  border: 3px double white;
  padding: 30px;
}

.face {
  height: 300px;
  width: 300px;
}

.bio {
  margin-top: 30px;
  text-align: center;
}
`

const Posts = ({ data, pageContext }) => {

  return (
    <Home>
      <Layout>
        <div className="carousel-border">
          <Carousel className="inner">
            {console.log(data, 'data')}
            <Carousel.Item>
              <Img width={900} height={500} fluid={data.image1.childImageSharp.fluid} alt="group playing tennis" />
              {/* <img src={slide01} alt="first tennis slide" /> */}
              <Carousel.Caption>
                <h2>Welcome to the Lidoisle Tennis Club!</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Img fluid={data.image2.childImageSharp.fluid} alt="group playing tennis" />
            </Carousel.Item>
            <Carousel.Item>
              <Img fluid={data.image3.childImageSharp.fluid} alt="group playing tennis" />
            </Carousel.Item>
          </Carousel>
        </div>
        <h1>Welcome to the Official Page of the Lidoisle Tennis Club!</h1>

        <div className="hours">
          <h2>Hours of Operation:</h2>
          <div className="hours-columns">
            <div className="hours-information">
              monday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              tuesday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              wednesday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              thursday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              friday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              saturday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
          <div className="hours-columns">
            <div className="hours-information">
              sunday
            </div>
            <div className="hours-information">
              all day
            </div>
          </div>
        </div>
        <div className="body-div">
          <div className="columns">
            <div className="information">
              <img className="face" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F573615ada7ea4353698df3ec%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D176%26cropX2%3D641%26cropY1%3D64%26cropY2%3D529" />
              <p>Mrs. Lidoisle, Director and CEO</p>
            </div>
            <div className="text-information"><span className="bio">
              "I love taking the family here after a long day of getting our chakras read!"
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </Home>
  )
}

export default Posts

export const query = graphql`
query {
  image1: file(relativePath: {eq: "tennis1.jpeg"}) {
    id
    childImageSharp {
      fixed {
        src
        srcSet
      }
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  image2: file(relativePath: {eq: "tennis2.jpeg"}) {
    id
    childImageSharp {
      fixed {
        src
        srcSet
      }
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  },
  image3: file(relativePath: {eq: "tennis3.jpeg"}) {
    id
    childImageSharp {
      fixed {
        src
        srcSet
      }
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  },
}
`