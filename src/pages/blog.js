
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"
import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

import gagepark from "../img/gagepk.jpg"


export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Blog</title>
    </Helmet>
    <div className="bigimages">
      <img className="bigimages-pic" src={gagepark} width="100%" alt="Reinisch Memorial Rose Garden, Gage Park, Topeka"/>
    </div>
    
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
    <h1>Blog Posts</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.slice(0,5).map(({ node }) => (
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
            — {node.frontmatter.author} — {node.frontmatter.date}
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
            author
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
