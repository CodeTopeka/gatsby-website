import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={css`
        margin: 0 auto;
        max-width: 800px;
        padding: 0 10px;
      `}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
