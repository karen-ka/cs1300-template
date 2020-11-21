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
        margin: auto;
    }

    .figma {
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
`

const Development = ({ data }) => {
  const { body, frontmatter } = data.testing.edges[0].node
  console.log(frontmatter);
  return (
    <Layout splashScreen={false}>
      <SEO title="Development" meta={[{ name: 'robots', content: 'noindex'}]} />
      <StyledSection id={frontmatter.title}>
        <StyledContentWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>Background</h2>
            <p>React is an open-source Javascript library for building out front end user interfaces. It allows for reusing components and selective reloading to create fast and scalable web pages, and thus is a great (and popular) choice to use as a frontend framework. </p>
          <h2>Project</h2>
            <p>In this project, I create a web application in React, specifically using the Ant Design UI library. I chose to make a Pokemon Team Builder application, which allows users to view available Pokemon and add them to their team. This helps the user easily browse and try out different team compositions while being able to monitor the overall team statistics.</p>
            <p>The deployed website can be viewed <a href="https://aqueous-mesa-81728.herokuapp.com/"><Underlining color="secondary" hoverColor="secondary">here.</Underlining></a></p>
            <p>The GitHub repo is located <a href="https://github.com/karen-ka/cs1300-development"><Underlining color="secondary" hoverColor="secondary">here.</Underlining></a></p>
            <br></br>

        <Img
            className="annotations"
            fluid={frontmatter.pkmn.childImageSharp.fluid}
        />

        <h2>Usability and Design Principles</h2>
        <p>Many principles were considered while creating the site. They are discussed in more detail below.</p>
        <h3>Color</h3>
        <ul>
            <li><b>Contrast</b>: The color palette chosen has high contrast and is accessible.</li>
            <li><b>Consistency</b>: The primary color, blue, is used for important action items such as viewing the team composition.</li>
        </ul>
        <h3>Typography</h3>
        <ul>
            <li><b>Text hierarchy</b>: The text size corresponds to its importance. Section headings have the same size, as does descriptive text.</li>
            <li><b>Font</b>: The same font is used throughout the application.</li>
        </ul>
        <h3>Alignment</h3>
        <ul>
            <li><b>Grid</b>: Scrollable items are placed in a grid for cleaner viewing.</li>
            <li><b>Consistency</b>: Buttons are center-aligned for emphasis. All other items are left-aligned, such as in the sidebar and drawer.</li>
        </ul>
        <h3>Affordances</h3>
        <ul>
            <li><b>Icons</b>: Action buttons are paired with commonly used icons for easier learnability.</li>
            <li><b>Notifications</b>: Since the aggregator field is only viewable when user-initiated, a success or error message is sent after a user performs an action to their team.</li>
            <li><b>Navigation</b>: A back-to-top button at the bottom right corner appears as the user scrolls down, allowing for easy navigation back to the top of the page.</li>
        </ul>
        <h3>Visual Layout</h3>
        <ul>
            <li><b>Minimalistic</b>: The home screen focuses on what's important - browsing the Pokemon. Clearly labeled call-to-action allows the user to view their team when they wish without distracting them.</li>
            <li><b>Emphasis</b>: The sidebar contains key action items and is clearly distinguishable from the main content by a new color block.</li>
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

Development.propTypes = {
  data: PropTypes.shape({
    testing: PropTypes.shape({
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

export default Development

export const pageQuery = graphql`
  {
    testing: allMdx(filter: { fileAbsolutePath: { regex: "/development/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            pkmn {
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
