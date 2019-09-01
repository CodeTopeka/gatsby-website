import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

import hotelkansas from "../img/kanhot.jpg"


export default ({ data }) => (
  <Layout>
    <div className="bigimages">
      <img className="bigimages-pic" src={hotelkansas} width="100%" alt="Lobby, Hotel Kansan, Topeka"/>
    </div>
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
      <h1>About</h1>
      <p>Code Topeka is a Social Club and organization for Topeka, KS area developers, programmers, and computer scientists.</p>
      <p>Our group meets once a month at a restaurant for conversation, and once every three months we meet for a presentation on tech given by one of our members. We started in June 2019 and we welcome new members -- anyone interested in programming and computer science!</p>
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