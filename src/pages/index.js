// import React from "react"
// import Layout from "../components/layout"

// // export default () => (
// // <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
// //     <h1>Richard Hamming on Luck</h1>
// //     <div>
// //       <p>
// //         From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
// //           You and Your Research
// //         </a>”.
// //       </p>
// //       <blockquote>
// //         <p>
// //           There is indeed an element of luck, and no, there isn’t. The prepared
// //           mind sooner or later finds something important and does it. So yes, it
// //           is luck.{" "}
// //           <em>
// //             The particular thing you do is luck, but that you do something is
// //             not.
// //           </em>
// //         </p>
// //       </blockquote>
// //     </div>
// //     <p>Posted April 09, 2011</p>
// //   </div>
// // )


// export default () => (
//   <Layout>
//     <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
//     <p>
//       What do I like to do? Lots of course but definitely enjoy
//       building websites.
//     </p>
//   </Layout>
// )
  


// import React from "react"
// import Layout from "../components/layout"

// export default () => (
//   <Layout>
//     <h1>Amazing Pandas Eating Things</h1>
//     <div>
//       <img
//         src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
//         alt="Group of pandas eating bamboo"
//       />
//     </div>
//   </Layout>
// )





import React from "react"
import { css } from "react-emotion"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import vilhelm_hammershoi_1 from "../img/2020903_KMS3696-smaller.jpeg"
import vilhelm_hammershoi_2 from "../img/2020903_KMS6657.jpeg"
import redhats from "../img/s-l1600.jpg"
import destroyed from "../utils/i-could-tell-you-but-then-you-would-have-to-be-destroyed-by-me-trevor-paglen.pdf"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <img src={vilhelm_hammershoi_1} alt="Painting 'Interior in Strandgade, Sunlight on the Floor' by Vilhelm Hammershøi, 1901" width="100%"/>
        <div className={css`
          max-width: 800px;
          margin: 0 auto;
          margin-top: -22px;
          padding: 10px;
        `}>
          <div className={css`
            text-align: center;
          `}>
            <span className={css`
              font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
              font-size: 2em;
              color: #84d1a6;
              vertical-align: top;
              margin: 0 auto;
            `}>
              Holm School
            </span>
          </div>
          
          <h2>More With Less: Open Educational Resources</h2>
          <p>
            There is a USAF fighter squadron known as the Red Hats. The Red Hats operate out of the secretive Area 51 Air Force base at Groom Lake because they do not fly American-made fighter jets. Instead, they fly fighter jets that have been manufactured by America's enemies but have been "obtained" and turned over to America after defecting pilots land the foreign plane at an allied base. These include MiGs manufactured by the Soviet Union. The purpose of the Air Force maintaining a squadron of fighter pilots who fly MiGs is to give our own USAF pilots practice dogfighting these enemy aircraft to discover weaknesses in their design. This is only possible by the foreign pilots who risk their lives and defect from their respective air force and steal the plane away for America's use.
          </p>
          <img src={redhats} alt="Red Hats Squadron Patch" className={css`
            max-width: 80%;
            margin: 0 auto;
            display: block;

          `}/>
          <p>
            I would like to think of Holm School as a similar operation. As someone who has gone to college to study computer science, I have defected from my allegiance to college (and the idea of paying for it) to bring you an enemy aircraft (my experience in a college computer science department) so that you can simulate dogfighting against it so that you can win in combat versus the enemy. The enemy is obviously student debt. By training computer science students to fight against exploitative tuition fees by being frugal, I will increase their chances to win the war versus debt. I will teach you everything I know about student debt and frugality. The birds that you will be flying are called "Open Educational Resources." OER are open-source books that are available for free on the internet and sport a <a href="https://en.wikipedia.org/wiki/Copyleft">CC BY-SA</a> (or less) license. By cataloguing a college-level equivalent of a computer science curriculum here on Holm School using OER, I am offering you the ability to succeed in computer science in a way that won't cause you financial obligations. There are many other planes to choose from, such as MOOCs and Open Courseware as well as cheap online learning sites, but OER is the flagship plane in our squadron. Treat her well.
          </p>
          <p>
            Your goal is to learn how to succeed in computer science using OER. It is meta-education: education about education. By knowing how to study computer science for free by improving your "OER literacy," you ensure that you will be able to keep costs as low as humanly possible to obtain a programming job or just be a lifelong learner. Being self-taught is a kooky concept, but I think we all can agree that a squadron that flies and maintains enemy planes out of Area 51 is a kooky concept too. Yet the payoffs are worth it: you will succeed in learning computer science with fewer losses of life or craft, keeping yourself debt-free. Learning computer science for free is possible because so many authors have turned against the concept of requiring tuition for knowledge or books and made their research open source. They are the defector pilots that turn over enemy aircraft for American research and development, and they are heroes. Let's celebrate their choice against the looming threat of student debt and practice as much dogfighting as you can using OER. If you are well trained in learning how to learn computer science for free, your lifelong learning obligations as a programmer will become as risk free as possible.
          </p>
          <p>
            It is no coincidence that the text at the bottom of the Red Hats patch says "More With Less". By being frugal during our studies of computer science, we will greatly improve our life quality by avoiding student debt while obtaining a good education. Do you really believe without a costly B.A. you are doomed to failure? We will accomplish more with less, thanks to OER and open source. Welcome to the squadron, pilot.
          </p>
          <p>
            You can buy a <a href="https://www.ebay.com/sch/i.html?&_nkw=red+hats+air+force+patch&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=red+hats+patch">Red Hats patch off eBay</a> if you want to adorn your backpack or purse with a reminder of what we're trying to accomplish at Holm School. When people ask what the patch means, you can reply, "I'm a computer science student that uses Open Educational Resources."  
            
          </p>
          <p>
            [<a href={destroyed}>Reference.</a>]
          </p>
          <div className={css`
            text-align: center;
            margin: 0 auto;
          `}>
            <iframe width="560" title="Boards of Canada - Music is Math" height="315" src="https://www.youtube-nocookie.com/embed/-pI-EOHsEu8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          
          
        
        </div>
        <img src={vilhelm_hammershoi_2} alt="Painting 'The Buildings of the Asiatic Company, seen from St. Annæ Street, Copenhagen' by Vilhelm Hammershøi, 1902" width="100%" className={css`margin-bottom: 0px;`} />
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
