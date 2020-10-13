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
    font-size: 1.7rem;
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

  .annotations {    
    max-width: 70%;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    }
    .ui {
        max-width: 50%;
        margin: auto;
    }
`

const Redesign = ({ data }) => {
  const { body, frontmatter } = data.redesign.edges[0].node
  console.log(frontmatter);
  return (
    <Layout splashScreen={false}>
      <SEO title="Redesign" meta={[{ name: 'robots', content: 'noindex'}]} />
      <StyledSection id={frontmatter.title}>
        <StyledContentWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>Background</h2>
          <p>With the advent of new devices and surfaces, it is increasingly important to prioritize responsive website design. A responsive website will look great on any screen size and helps maintain a consistent user experience. In this project, I explore the the process of creating a responsive redesign from start to finish.</p>

          <h2>The Website</h2>
          <p>I decided to redesign Brown's MyMeal website, which is publicly accessible <a href="http://mymeal.brown.edu/NetNutrition/1#"><Underlining color="secondary" hoverColor="secondary">here</Underlining></a>. A screenshot of the home page is provided below.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.old.childImageSharp.fluid}
            />


        <h2>Usability Analysis</h2>

        <p>I first conducted an initial analysis by annotating the interfaces (sample annotations shown below).</p>

        <Img
            className="annotations"
            fluid={frontmatter.markup1.childImageSharp.fluid}
        />
        {/* <Img
            className="screenshot"
            fluid={frontmatter.markup2.childImageSharp.fluid}
        /> */}
        <Img
            className="annotations"
            fluid={frontmatter.markup3.childImageSharp.fluid}
        />
        {/* <Img
            className="screenshot"
            fluid={frontmatter.markup4.childImageSharp.fluid}
        /> */}

        <p>From careful observation of the site, I came to the following conclusions:</p>

        <h3>Learnability</h3>
        <ul>
            <li>Usage was not self explanatory - had to read through wall of text to understand how the site works</li>
            <li>Unclear how to navigate forward and proceed</li>
          </ul>
        <h3>Memorability</h3>
        <ul>
            <li>Need to go through at least four screens to reach end state</li>
            <li>Outdated site design and navigation makes it difficult to remember usage</li>
          </ul>
        <h3>Usability</h3>
          <ul>
          <li>My Meal and Allergies menus aren't applicable to the home page</li>
          <li>Navigation had issues, couldn't click logo to return to home page and had to use obscure back buttons instead</li>
          </ul>

        <h3>Accessibility</h3>
        <p>The analysis from WAVE (Website Accessibility Evaluation Tool) notes that there are several problems with the site, including:</p>
        <ul>
          <li>Potential automatic page refreshes and redirects</li>
          <li>Missing page title</li>
          </ul>

        These issues brought up by WAVE were reflected in the screen reader test I ran on the site. The screen reader failed to identify the basic description of the site and instead began rattling off the allergens immediately, which didn't make any sense without context.
        <h2>Visual Redesign</h2>
<p>I completely reimaged the site, with a few notable new features:</p>

<p>In my redesign, I focused on the following design principles:</p>
<ul>
    <li><b>Learnability:</b> Interactive elements are descriptively labeled. Sections are titled for enhanced understanding.</li>
    <li><b>Usability:</b> Similar elements are grouped together. Buttons are highlighted and placed in prominent areas.</li>
    <li><b>Memorability:</b> The design is modern and functionality is common across many sites. All information is displayed on one screen.</li>
    <li><b>Efficiency:</b> Adding logins and user profiles allows preferences to be saved instead of re-entering it every time.</li>
</ul>
          <h3>Low-fi wireframes</h3>
          <Img
              className="screenshot"
              fluid={frontmatter.wf.childImageSharp.fluid}
            />

            <h3>High-fi wireframes</h3>
            <Img
              className="screenshot"
              fluid={frontmatter.hifi.childImageSharp.fluid}
            />

            <h3>Style and Annotations</h3>
            <Img
              className="ui"
              fluid={frontmatter.ui.childImageSharp.fluid}
            />

            <Img
              className="screenshot"
              fluid={frontmatter.annotated.childImageSharp.fluid}
            />

          <h2>Final Design</h2>
          <p>The finished product is presented below, and can also be accessed <a href="https://glacial-bayou-58688.herokuapp.com/"><Underlining color="secondary" hoverColor="secondary">here</Underlining></a>.</p>
          <p>The interface is responsive to varying font sizes as well as desktop, tablet, and phone screens. Screen readers now correctly pick up basic information about the site. In addition, WAVE analysis shows 0 errors.</p>
          <Img
              className="screenshot"
              fluid={frontmatter.new.childImageSharp.fluid}
            />



          <h2>Takeaways</h2>
          <ul>
              <li>The power of flexbox!</li>
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

Redesign.propTypes = {
  data: PropTypes.shape({
    redesign: PropTypes.shape({
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

export default Redesign

export const pageQuery = graphql`
  {
    redesign: allMdx(filter: { fileAbsolutePath: { regex: "/redesign/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            old {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            new {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            markup1 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            markup2 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            markup3 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            markup4 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            annotated {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            wf {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            ui {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            hifi {
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
