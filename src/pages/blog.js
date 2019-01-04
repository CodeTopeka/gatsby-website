
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"
import { rhythm } from "../utils/typography"

import birger_sandzen from "../img/smoky_river.jpg" 

export default ({ data }) => (
  <Layout>
    
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
    <div className={css``}>
        <img src={birger_sandzen} width="100%" alt="Painting 'Smoky River, Kansas' by Birger Sandzen, 1926"/>
    </div>
    <h1>Blog Posts</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
    <div key={node.id}>
        <Link
        to={node.fields.slug}
        className={css`
            text-decoration: none;
            color: inherit;
        `
}
        >

        <h3
            className={css`
            margin-bottom: ${rhythm(1 / 4)};
            `}
        >

            {node.frontmatter.title}{" "}
            <span
            className={css`
                color: #bbb;
            `}
            >
            — {node.frontmatter.date}
            </span>
        </h3>
        <p>{node.excerpt}</p>

        </Link>
    </div>
    ))}
    </div>
    
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")

          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
