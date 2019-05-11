import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { css } from "emotion"

import birgerSandzen from "../img/11105836_small.jpg"

export default ({ data }) => (
  <Layout>
    <div className="bigimages">
      <img src={birgerSandzen} width="100%" alt="Painting 'Lidköpings hamn med Kinnekulle i bakgrunden' by Birger Sandzen, 1893"/>
    </div>
    <div className={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: 0 10px;
    `}>
      <h1 id="trajectories">Holm School Curriculum</h1>
      <p><a href="https://github.com/HolmSchool/HolmSchool">View the Holm School curriculum on github</a></p>
      <p>The Holm School curriculum is a way to learn computer science for free using Open Educational Resources (OER), as well as some MOOCs and OpenCourseWare and other Open Education sources. By relying on books, you'll get very thorough instruction in the programming language, given that books usually can go into the minutiae more than videos can. But we still provide a few video courses in each topic, so that you can get some quality lectures from professors in along with the textbook readings. Everything on this list is free and legal, so share it with friends as much as you want! Self-education is very possible because of the open source licenses out there that permit quality instruction for free. Computer Science invented open source licensing, so it makes sense that Computer Science is the one discipline that you really can learn over the internet for free as opposed to having to go to a college and pay tuition. Take advantage of the infrastructure for self-education that computer science has invented and learn as much about programming as you can for free. You will find there are multiple lifetimes of research available for free, even <i>before</i> you get to non-open source material which you can pay for (or more likely get from the public library through interlibrary loans). The amount of free OER related to computer science means that you can objectively cover a bachelor's degree equivalent through self study at zero cost to you.</p>
      <p>&nbsp;</p>
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