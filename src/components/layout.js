// import React from "react"
// import { Link } from "gatsby"

// const ListLink = props => (
//   <li style={{ display: `inline-block`, marginRight: `1rem` }}>
//     <Link to={props.to}>
//       {props.children}
//     </Link>
//   </li>
// )

// export default ({ children }) => (
//   <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
//     <header style={{ marginBottom: `1.5rem` }}>
//       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>MySweetSite</h3>
//       </Link>
//       <ul style={{ listStyle: `none`, float: `right` }}>
//         <ListLink to="/">Home</ListLink>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>
//     {children}
//   </div>
// )


import React from "react"
import { cx, css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import Helmet from "react-helmet"


import logo from "../img/square_logo_small.png"
import public_domain_small from "../img/public_domain_small.png"
import slacksvg from "../img/slack.svg"
import githubsvg from "../img/github.svg"
import fbsvg from "../img/fb.svg"
import favicon from "../img/favicon.ico"
import siteWideCSS from "./main.css"

const navItem = css`
  margin-right: 15px;
  text-decoration: none;
  color: #12c92e;
  
  &:hover {
    text-decoration: underline;
    text-decoration-color: #12c92e;
  }
`

const svgNav = css`
  transition: 200ms;
  transition-timing-function: ease-in-out;
  fill: #12c92e !important;
  width: 26px;
  height: 26px;

  &:hover {
    fill: #667c7c !important;
  }
`

const current = css`
  text-decoration: underline;
`


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
      
      <div
        className={siteWideCSS}
      >
        <Helmet defaultTitle={`Code Topeka: Topeka, KS Developer Social Club`} titleTemplate={`%s | Code Topeka`}>
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Code Topeka" />
          <meta name="description" content="Code Topeka: A Social Club for Topeka, KS area developers and programmers" />
          <html lang="en" />
          <link rel="icon" 
          type="image/png" 
          href={favicon}/>
          
          

        </Helmet>
        <div className={css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 5px 5px 10px 10px;

        `}>
          <Link to={`/`} className={css`
            text-decoration: none;            
          `}>
            <div className={css`
              flex-grow: 1;
              flex-shrink: 1;
              

              @media only screen and (min-width: 768px) {
                margin-left: 0px;
                
              }
            `}>
              <img src={logo} className={css`
                width: 42px;
                height: 42px;
                margin-top: 4px;
                margin-left: 0px;
                margin-bottom: 0px;
                margin-right: 27px;

                @media only screen and (min-width: 768px) {
                  width: 36px;
                  height: 36px;
                  
                }
              `} alt="Code Topeka Logo"/>
              <span className={css`
                font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                font-size: 2em;
                color: #12c92e;
                transition: 150ms;
                transition-timing-function: ease-in-out;
                vertical-align: top;
                display: none;

                &:hover {
                  color: #667c7c;
                }
                
                @media only screen and (min-width: 1024px) {
                  font-size: 1.5em;
                  display: inline;
                  
                }

                
              `}>
                Code Topeka
              </span>
              
            </div>
          </Link>
          <div className={css`
            flex-grow: 1;
          `}>&nbsp;
          </div>
          
        
        <div className={css`
          flex-shrink: 1;
          font-size: 1.25rem;
        `}>
          <div className={css`
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-end;
          `}>
            
            <Link to={`/`} className={cx(navItem, css`
              display: none;
            `)}>
              Home
            </Link>
            <Link
              to={`/about/`}
              activeClassName={cx(current)}
              className={cx(css`
                
              `, navItem)}
            >
              About
            </Link>
            <Link
              to={`/blog/`}
              activeClassName={cx(current)}
              className={cx(css`

              `, navItem)}
            >
              Blog
            </Link>
            <a
              href={`https://code-topeka.slack.com`}
              className={cx(css`
                
              `, navItem)}
            >
              <img id="slack-svg" src={slacksvg} className={svgNav}/>
            </a>
            <a
              href={`https://fb.me/codetopekaorg`}
              className={cx(css`

              `, navItem)}
            >
              <img id="fb-svg" src={fbsvg} className={svgNav} />
            </a>
            <a
              href={`https://github.com/CodeTopeka`}
              className={cx(css`
                
              `, navItem)}
            >
              <img id="github-svg" src={githubsvg} className={svgNav}/>
            </a>
          </div>
        </div>
        </div>
        
        {children}
        <div className={css`
          margin-top: 10px;
          max-width: 800px;
          margin: auto;
        `}>
          <img src={public_domain_small} alt="Public Domain" className={css`;margin-left: 20px; width:120px;margin-right: 30px;`}/>

          <Link to={'/'} className={css`text-decoration: none;`}>
            <span className={css`
                font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                font-size: 1.0em;
                color: #12c92e;
                transition: 150ms;
                transition-timing-function: ease-in-out;
                vertical-align: top;
                display: inline;
                

                &:hover {
                  color: #667c7c;
                }

                


              `}>
                CodeTopeka.org:2019
            </span>
          </Link>
          
        </div>
      </div>
    )}
  />
)
