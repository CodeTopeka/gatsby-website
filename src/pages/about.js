// import React from "react"
// import Layout from "../components/layout"

// export default () => (
// <Layout>
//   <div>
//     <h1>About me</h1>
//     <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
//   </div>
// </Layout>
// )




// import React from "react"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <h1>About Pandas Eating Lots</h1>
//     <p>
//       We're the only site running on your computer dedicated to showing the best
//       photos and videos of pandas eating lots of food.
//     </p>
//   </Layout>
// )




import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

export default ({ data }) => (
  <Layout>
    <div className={css`
      margin: 0 auto;
      max-width: 800px;
      padding: 0 10px;
    `}>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Holm School is a side-project administrated by Ryan Holm, who has been working on Educational Technology web sites to teach K-12 computer science for two years at a job at Rensselaer Polytechnic Institute in Troy, NY. 
      </p>
      
      <p>
        For more information regarding Open Educational Resources and what they are, please read the <a href="https://en.wikipedia.org/wiki/Open_educational_resources">Wikipedia page</a>. 
      </p>
      <p>
        Holm School is programmed using <a href="http://gatsbyjs.com">GatsbyJS</a> for a static JAM stack site hosted for free on <a href="http://netlify.com">Netlify</a>.  Thank you to the open source programmers who make that possible. All resources created by Holm School are in the public domain and downloadable at our repo on <a href="http://github.com/HolmSchool">GitHub</a>.
      </p>
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