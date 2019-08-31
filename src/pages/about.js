import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"


export default ({ data }) => (
  <Layout>
    <div className="bigimages">
      {/* <img src={vilhelm_hammershoi_3} width="100%" alt="Painting 'The Royal Palace Church in Copenhagen' by Vilhelm Hammershøi, 1910"/> */}
    </div>
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
      <p>Code Topeka is a Social Club for Topeka, KS area developers, programmers, and computer scientists.</p>
    </div>
    
    
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `