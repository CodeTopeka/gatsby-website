import React from "react"
import { css } from "react-emotion"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import slacksvg from "../img/slack.svg"
import githubsvg from "../img/github.svg"
import fbsvg from "../img/fb.svg"
import observatory from "../img/observ.jpg"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="bigimages">
          <img src={observatory} alt="Observatory, Washburn College, Topeka" width="100%"/>
        </div>
        <div className={css`
          max-width: 800px;
          margin: 0 auto;
          margin-top: -22px;
          padding: 10px;
        `}>
          
          <div className={css`
            text-align: center;
          `}>
            <h1 className={css`
              font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
              font-size: 2em;
              color: #12c92e;
              vertical-align: top;
              margin: 0 auto;
            `}>
              Code Topeka
            </h1>
          </div>

          
          <h2 className={css`text-align: center;`}>A Social Organization and Club for Topeka, Kansas area Developers, Programmers, and Computer Scientists</h2>
          
          <div>
            <p>
              <a href={`https://join.slack.com/t/code-topeka/shared_invite/enQtNzM3MDI3MTg1OTExLWIyNjJhYzMzMzNiZDg3ODAzODlkNDliYzE2NjA3Y2E0NzU4ZjU5ZWY5NTFjMGUyNjhhMDM4MmQ1NTU0Y2ZjMmU`} className={css`
                text-decoration: none;            
              `}>
                <img className="frontpage-logos" src={slacksvg} />Join Our Slack Channel
                </a>
            </p>
            <p>
              <a href={`https://fb.me/codetopekaorg`} className={css`
                    text-decoration: none;            
                  `}>
                <img className="frontpage-logos" src={fbsvg} />Join Our Facebook Group
              </a>
            </p>
            <p>
              <a href={`https://github.com/codetopeka`} className={css`
                    text-decoration: none;            
                  `}>
                <img className="frontpage-logos" src={githubsvg} />Participate in our Github Repos
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </Layout>
  )
}

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
          wordCount {
            words
          }
        }
      }
    }
  }
`
