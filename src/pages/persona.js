import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import ContentWrapper from "../styles/ContentWrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
      font-size: 2rem;
  }
  h2 {
      font-size: 1.5rem;
  }
  h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
  }
  .inlink {
    margin-top: 6rem;
    font-size: 1.25rem;
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: #ffffff;
    }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    max-width: 50rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

const Persona = ({ data }) => {
  const { body, frontmatter } = data.persona.edges[0].node
  console.log(frontmatter);
  return (
    <Layout splashScreen={false}>
      <SEO title="Persona" meta={[{ name: 'robots', content: 'noindex'}]} />
      <StyledSection id={frontmatter.title}>
        <StyledContentWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>Background</h2>
          <p>In today's world, it is increasingly important to prioritize user experience and create "user friendly" designs. This project is an exploration of the process to understand how a user approaches commonplace objects, and what characteristics of those objects help (or hinder) its usage. </p>
          <h2>The Interface</h2>
          <p>I chose to observe usage of the microwave. More detail of a common microwave interface can be found below.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.interface.childImageSharp.fluid}
            />
          <h2>Observations</h2>
          <p>To get a generalization of how one would normally interact with a microwave, I observed several people using it in its natural state. Some overarching themes were:</p>
          <ul>
          <li>Most users have no hestitation while starting up the microwave.</li>
          <li>There was about an even split of users who waited by the microwave while it was in use, and users who moved onto other tasks.</li>
          <li>None of the users checked on the time remaining midway. Instead, all of them showed a reaction when the microwave made a noise to signal it had finished.</li>
          </ul>
          <h2>Interviews</h2>
          These are the questions I asked my interviewees:
          <ul><i>
            <li>How often do you use the microwave?</li>
            <li>On a scale of 1-5, how would you rate your interaction with the microwave and why?</li>
            <li>Tell me what goes through your mind while pressing buttons on the microwave.</li>
            <li>What features of the microwave do you use the least? Why?</li>
            <li>How would you improve the current interface?</li>
            </i></ul>
          Below are the summaries of the responses:
          <ul>
            <li>User A: They like to cook often and will use the microwave to heat up leftovers. They will put their food in the microwave and use the same default feature every time. They are quite content with the interface but comment that a lot of buttons go unused and a cleaner interface with less functions would be easier to use.</li>
            <li>User B: This person uses the microwave a lot because it is convenient for frozen and leftover meals. They are quite familiar with most microwave functions but will oftentimes use the default setting because it catches most use cases. They like how the microwave clearly alerts when the food is done heating. </li>
            <li>User C: This person rarely uses the microwave because they usually eat in the cafeteria. When they do use it, they are a bit curious about all the different functions available and often get overwhelmed trying to figure out what to pick, eventually going with the default option because it is easiest. They think the interface is confusing and would appreciate less options to reduce choice overload.</li>
          </ul>
          <h2>Personas</h2>
          <h3><i>Bob, the busy college student</i></h3>
          <p>This user values time and convenience, and uses the microwave very often. They have a tight schedule and is often multitasking. Once they put food in the microwave, they will move onto other duties and return sometime after the food is done heating.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.busy.childImageSharp.fluid}
            />
            <h3><i>Rina, the relaxed stay-at-home mom</i></h3>
          <p>This user has plenty of time and is very methodical with their actions. However, they are wary of trying out new functionality and prefers to stick with familiarity. They use the microwave to heat the food until the perfect temperature but will not use specialized functionality to do so.</p>
            <Img
              className="screenshot"
              fluid={frontmatter.lax.childImageSharp.fluid}
            />
          <h2>Storyboard</h2>
          <Img
              className="screenshot"
              fluid={frontmatter.sb1.childImageSharp.fluid}
            />
           <Img
              className="screenshot"
              fluid={frontmatter.sb2.childImageSharp.fluid}
             />



              <center><Link className="inlink" to='/#projects' rel="nofollow noopener noreferrer" align='center'>
                      <u>↩ Back to projects</u>
              </Link></center>
          <MDXRenderer>{body}</MDXRenderer>
        </StyledContentWrapper>
      </StyledSection>
    </Layout>
  )
}

Persona.propTypes = {
  data: PropTypes.shape({
    persona: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            body: PropTypes.string.isRequired,
            frontmatter: PropTypes.object.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Persona

export const pageQuery = graphql`
  {
    persona: allMdx(filter: { fileAbsolutePath: { regex: "/persona/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            sb1 {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sb2 {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            lax {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            busy {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            interface {
              childImageSharp {
                fluid(maxWidth: 400, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
