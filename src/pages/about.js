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
    `}>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Lorem ipsum
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