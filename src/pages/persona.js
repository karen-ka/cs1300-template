import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import ContentWrapper from "../styles/ContentWrapper"
import Layout from "../components/layout"
import Underlining from "../styles/Underlining"
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
    margin-top: 5rem;
    font-size: 1.5rem;
  }
  h3 {
      margin-top: 1.5rem;
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
          <p>In today's world, it is increasingly important to prioritize user experience and create user-centric interface designs. This project is an exploration of the process to understand how a user approaches commonplace objects, and what characteristics of those objects help (or hinder!) its usage. </p>
          <h2>The Interface</h2>
          <p>Ever wanted to quickly heat up some leftovers or just heat up a frozen meal quickly for dinner? We've all probably used a microwave at some point, and I thought this interface would be meaningful to take a closer look at -- according to <a href='https://www.pewresearch.org/fact-tank/2009/01/12/my-microwave-rules/'>
              <Underlining color="secondary" hoverColor="secondary">
                Pew Research
              </Underlining>
            </a>, 7 in 10 Americans consider a microwave a necessity. Such an ubiquitous household object has retained a largely consistent design over the years, and I was intrigued to find out how the design accomodates all kinds of users. A general microwave design interface is described below.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.interface.childImageSharp.fluid}
            />
          <h2>Observations</h2>
          <p>To get a generalization of how one would normally interact with a microwave, I observed several people using it in its natural state. Some overarching themes were:</p>
          <ul>
          <li>All users I observed had no hestitation when opening up the microwave and placing food inside.</li>
          <li>There was little to no hesitation when pressing buttons to start up the microwave.</li>
          <li>There was about an even split of users who waited by the microwave while it was in use, and users who moved onto other tasks. Surprisingly, this did not seem to depend on the cooking time, as all users had a heat time of 30 seconds.</li>
          <li>None of the users checked on the time remaining midway. Instead, all of them showed a reaction when the microwave made a noise to signal it had finished.</li>
          </ul>
          <h2>Interviews</h2>
          These are the questions I asked my interviewees:
          <ul><i>
            <li>How often do you use the microwave?</li>
            <li>On a scale of 1-5, how would you rate your interaction with the microwave and why?</li>
            <li>Walk me through how you typically use of the microwave.</li>
            <li>Tell me what goes through your mind while pressing buttons on the microwave.</li>
            <li>On a scale of 1-5, how confident would you be using other microwave models, and why?</li>
            <li>What features of the microwave do you use the least? Why?</li>
            <li>How would you improve the current interface?</li>
            </i></ul>
          Below are the summaries of the responses:
          <ul>
            <li>User A: They cook often and will use the microwave to heat up leftovers. They will put their food in the microwave and use the same default feature every time. They are like the interface but comment that a lot of buttons go unused and a cleaner interface with less functions would be easier to use. They are confident they can use different microwave models from personal experience.</li>
            <li>User B: This person uses the microwave a lot because it is convenient for frozen and leftover meals. They are quite familiar with most microwave functions but, similar to user A, will oftentimes use the default setting because it catches most use cases. They like how the microwave clearly alerts when the food is done heating. They are not sure if they can immediately figure out different microwaves due to different placing of buttons and functions, but think they can figure it out eventually.</li>
            <li>User C: This person rarely uses the microwave because they usually eat in the cafeteria. When they do use it, they see many different functions available and feel overwhelmed trying to figure out what to pick, eventually going with the default option because it is easiest and "probably right". They think the interface is confusing and would appreciate less options to reduce choice overload. They think it would take them time to figure out a microwave they are not familiar with.</li>
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
          <p>The following storyboard depicts a typical usage of the microwave by Bob, the busy college student.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.sb1.childImageSharp.fluid}
            />
           <Img
              className="screenshot"
              fluid={frontmatter.sb2.childImageSharp.fluid}
             />
          <h2>Learnings</h2>
          <ul>
            <li>Overall, I was really surprised at all the different ways people used microwaves! It was really interesting to reflect how an appliance I had assumed would be used monotonously had so much variety.</li>
            <li>The microwave seems more of a "catch-all" appliance, intending to be accessible for all but not catering to any specific personas.</li>
            <li>This is reflected in the users' uncertainty in being comfortable with other microwave models. It seems like the microwave has weaker affordances on the button controls.</li>
            <li>Improvements for a microwave design could be making a simplified version containing only basic functions. Another could be setting a standard for microwave design such that it is easier to adapt to, such as mapping functions to a certain button shape or color.</li>
          </ul>
              <center><Link className="inlink" to='/#projects' rel="nofollow noopener noreferrer" align='center'>
                      <u>Back to projects</u>
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
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sb2 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            lax {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            busy {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            interface {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
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
