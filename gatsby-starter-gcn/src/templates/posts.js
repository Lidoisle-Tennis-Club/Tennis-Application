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
// .carousel {
//   width: 50%;
//   margin: auto;
//   margin-top: 20px;
// }
`

const Posts = ({ data, pageContext }) => {

  return (
    <Home>
      <Layout>
        <link href="bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />

        <Carousel className="carousel">
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
        {/* <EmblaCarousel /> */}
        {/* <SEO title={startCase(basePath)} image={ogImage} /> */}
        {/* <Container>
          {isFirstPage ? (
            <CardList>
              <Card {...featuredPost} featured basePath={basePath} />
              {posts.slice(1).map(({ node: post }) => (
                <Card key={post.id} {...post} basePath={basePath} />
              ))}
            </CardList>
          ) : (
              <CardList>
                {posts.map(({ node: post }) => (
                  <Card key={post.id} {...post} basePath={basePath} />
                ))}
              </CardList>
            )}
        </Container>
        <Pagination context={pageContext} /> */}
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