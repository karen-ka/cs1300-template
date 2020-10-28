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
`

const Testing = ({ data }) => {
  const { body, frontmatter } = data.testing.edges[0].node
  console.log(frontmatter);
  return (
    <Layout splashScreen={false}>
      <SEO title="A/B Testing" meta={[{ name: 'robots', content: 'noindex'}]} />
      <StyledSection id={frontmatter.title}>
        <StyledContentWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>Background</h2>
          <p>A/B Testing is a powerful technique to compare versions of a webpage to see which performs better. It can select variations that are more effective and will improve user engagement.</p>

          <h2>Experiment</h2>
          <p>I created two versions of a simple shopping page, which can be viewed <a href="https://stormy-mountain-37929.herokuapp.com/"><Underlining color="secondary" hoverColor="secondary">here</Underlining></a>.</p>

        <p>An infographic of the process and results is shown below.</p>

        <Img
            className="annotations"
            fluid={frontmatter.info.childImageSharp.fluid}
        />

        <h2>Takeaways</h2>
        <ul>
          <li>A drawback of the test I ran is the small user sample size, due to limitations of collecting Heroku logging data.</li>
          <li>Version A had a significantly higher return rate, and is the design that I would select if I were to deploy this site.</li>
          <li>This demonstrates that visual layout is important, and that mechanisms like grid and flexbox can help achieve a cleaner design.</li>
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

Testing.propTypes = {
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

export default Testing

export const pageQuery = graphql`
  {
    testing: allMdx(filter: { fileAbsolutePath: { regex: "/abtesting/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            info {
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
