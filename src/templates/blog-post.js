import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"




export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  const ghc = require('../js/github-comments')
  ghc.DoGithubComments(post.frontmatter.ghissue)
  let page = 1
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
          
            {prev ? <span className={css`float: left;`}><Link to={prev.fields.slug}>Previous Post</Link></span>: null }
          
          
            {next ? <span className={css`float: right;`}><Link to={next.fields.slug}>Next Post</Link></span> : null }
          
        </div>
        <hr/>
        <div id="gh-comments">
          <h6>COMMENTS</h6>
          <div id="gh-comments-list"></div>
          <div style={{textAlign: 'center'}}><button className={css`border-radius: 3px;border: 1px solid purple;color: purple;font-family:"Courier New", Courier;vertical-align: middle;`} onClick={() => ghc.DoGithubComments(post.frontmatter.ghissue, ++page)} id="gh-load-comments">Load more comments</button></div>
        </div>
        <br/>
      </div>
      <hr/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        ghissue
      }
    }
  }
`
