import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  return (
    <Layout>
      <div className={css`
        margin: 0 auto;
        max-width: 800px;
        padding: 0 10px;
      `}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
        <div className={css`display: inline-block;width:100%;`}>
          
            {prev ? <span className={css`float: left;`}><Link to={prev.fields.slug}>Previous</Link></span>: null }
          
          
            {next ? <span className={css`float: right;`}><Link to={next.fields.slug}>Next</Link></span> : null }
          
        </div>
        
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
