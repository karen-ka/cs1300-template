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

const Iterative = ({ data }) => {
  const { body, frontmatter } = data.testing.edges[0].node
  console.log(frontmatter);
  return (
    <Layout splashScreen={false}>
      <SEO title="Iterative Design" meta={[{ name: 'robots', content: 'noindex'}]} />
      <StyledSection id={frontmatter.title}>
        <StyledContentWrapper>
          <h1>{frontmatter.title}</h1>
          <h2>Background</h2>
            <p>Iterative design is a powerful process involving prototyping, testing, analyzing, and refining the product. We wanted to put this into practice by designing an interface for Y-combinator startup <a href="https://startplaying.games/"><Underlining color="secondary" hoverColor="secondary">StartPlaying.Games</Underlining></a>, which aims to be an online marketplace for tabletop players to find games and/or game hosts.</p>

          <h2>Sketching and Wireframing</h2>
            <p>After getting acquainted with the startup's purpose, the first step was to create pencil sketches of main pages that would be required. Each member of our group came up with our own vision of what the site would look like and created a set of sketches.</p>

            <iframe class="figma" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5012IXgdeUDbCAdjfk780t%2FIterative-Design-Sketches" allowfullscreen></iframe>

        <p>After coming up with the pencil sketches, we got together to combine our ideas and create a final wireframe - shown below.</p>

        <Img
            className="annotations"
            fluid={frontmatter.wireframe1.childImageSharp.fluid}
        />


<Img
            className="annotations"
            fluid={frontmatter.wireframe2.childImageSharp.fluid}
        />

        <h2>Mockups</h2>

        <p>With our lo-fi prototype in hand, we were then ready to create a hi-fi mockup of the site. For the visual aesthetics, we envisioned a sleek design with a color palette comfortable among gamers. Thus, we primarily developed in dark mode, and used a single font throughout with varying sizes and weights for the cleaner look.</p>
        <iframe class="figma" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FctH8HpP3n06NNF6JQi1w8L%2FIterative-Design-Crit%3Fnode-id%3D1%253A161%26scaling%3Dscale-down" allowfullscreen></iframe>
        <p>We took this initial hi-fi design to Crit Studio, where we received a lot of constructive criticism on the design. Some of the suggestions included:</p>
        <ul>
            <li>Remove underlines on elements that are not clickable</li>
            <li>Have the name of the site in more places</li>
            <li>Use a primary call-to-action color</li>
            <li>Make it easier for a user to book a game</li>
        </ul>

        <p>Using this feedback, we came up with another set of mockups. Here is an example of a change we made - notice how we bumped up the hierarchy of the "Book Now" call-to-action, and rearranged sections to add more information about the game:</p>
        <Img
            className="annotations"
            fluid={frontmatter.changes1.childImageSharp.fluid}
        />

        <p>The improved prototype is shown below.</p>
        <iframe class="figma" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDfjXAp0tvCbh9EX3XJ32bl%2FIterative-Design-Final-Ver-DnD%3Fnode-id%3D20%253A298%26scaling%3Dscale-down" allowfullscreen></iframe>

<h2>User Testing</h2>

<p>With our much improved hi-fi design, we decided to take the prototype to UserTesting.com, a site where real users can interact with and give feedback on the usability of the prototype. We provided each user testing instructions and asked them questions about the usage of the site. The questions are included below:</p>

<p><b>Testing Instructions</b></p>
<ol>
<li>Log into the website.</li>
<li>Find a game to book.</li>
<li>Book the game (no need to type anything into the form fields).</li>
<li>Submit your order.</li>
</ol>

<p><b>Post-testing Questions</b></p>
<ol>
<li>What frustrated you most about this site?</li>
<li>What feature would you like added to the website?</li>
<li>What did you like about the site?</li>
<li>How difficult did you find it to book a game on a scale of 1-10, with 1 being easy and 10 being very difficult?</li>
</ol>

<h3>Analysis of Results</h3>
<p>We looked closely at the videos of users interacting with the prototype, as well as their provided feedback. Here are the key observations for each task:</p>
<ol>
<li>Log into the website.</li>
<ul><li>All users had no issue with this.</li></ul>
<li>Find a game to book.</li>
<ul><li>Some users had issues finding a game to book. They expected the host page to have a "Book Now" option. On a scale of 1-10 (1 being easy and 10 being very difficult), scores ranged from 1 to 9.</li>
</ul>
<li>Book the game (no need to type anything into the form fields).</li>
<ul><li>All users had no issue with this.</li></ul>
<li>Submit your order.</li>
<ul><li>All users had no issue with this.</li></ul>
</ol>

<p>Here's a summary of the answers to our post-testing questions, as well as how they lined up with our expectations:</p>
<ul>
    <li>Overall, users enjoyed the overall design of the site, especially the landing page.</li>
        <ul>
            <li>We did expect gamers to find the site aesthetic favorable (although we're not sure if our testers happened to be gamers). The clean look and dark mode can be found in other commonly used applications that our target demographic use such as Discord.</li>
        </ul>
    <li>Sources of frustration include being redirected to other pages when wanting to book a game immediately - for example, attempting to book a suggested host, and then being directed to the Find Game page.</li>
        <ul>
            <li>This was somewhat expected. We got similar feedback from Crit Studio and attempted to streamline the number of redirects, and from this feedback it was clear that we needed to streamline one more workflow. </li>
        </ul>
    <li>Users had mixed difficulty in booking a game, as they expected the option to be available on a host's page.</li>
        <ul>
            <li>This was unexpected, as we thought having it on the search results and game info page would be enough. In hindsight, it does make sense for a host page to have a list of games they are hosting as well as a "Book Now" button for them.</li>
        </ul>
    <li>Suggested features include adding a "Play" tab on the landing page to show what games are available.</li>
</ul>

<p>From these results, we came up with several areas of improvement:</p>
<li>On a host's page, adding a list of games the specific host is hosting along with “Book Now” options to streamline workflow for booking a game.</li>
<li>Add a confirmation page after booking a game.</li>
<li>Upcoming games should show the host's name for further clarity.</li>

<ul></ul>



{/* <ol>
<li>What frustrated you most about this site?</li>
<ul><li>User A wanted confirmation of successful booking.</li>
<li>User B wanted to be immediately able to book a suggested host, instead of being re-directed to the Find Game page.</li></ul>
<li>What feature would you like added to the website?</li>
<ul><li>Less navigation and ability to book immediately.</li>
<li>A "Play" tab on the landing page showing what games are available.</li></ul>
<li>What did you like about the site?</li>
<li>How difficult did you find it to book a game on a scale of 1-10, with 1 being easy and 10 being very difficult?</li>
</ol> */}





        <h2>Takeaways and Next Steps</h2>
        <ul>
          <li>It was a really cool process to see the evolution of our initial pencil sketches to the final product!</li>
          <li>The variety of feedback from Crit was really useful in helping us improve the design.</li>
          <li>For our next step, we'll be taking the feedback from user testing and making changes to the design before creating the site for our Capstone Project.</li>
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

Iterative.propTypes = {
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

export default Iterative

export const pageQuery = graphql`
  {
    testing: allMdx(filter: { fileAbsolutePath: { regex: "/iterative-design/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
            interface {
              childImageSharp {
                fluid(maxWidth: 800, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            wireframe1 {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            wireframe2 {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
            changes1 {
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
