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
  // transition: 200ms;
  // transition-timing-function: ease-in-out;
  // fill: #12c92e !important;
  // width: 35px;
  // height: 35px;

  // &:hover {
  //   fill: #667c7c !important;
  // }
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
        <Helmet defaultTitle={`Code Topeka: Developers, Programmers, & Computer Scientists Meetup`} titleTemplate={`%s | Code Topeka`}>
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Code Topeka" />
          <meta name="description" content="A Social Club/Meetup for Topeka, KS Area Developers, Programmers, and Computer Scientists" />
          <html lang="en" />
          <link rel="icon"
            type="image/png"
            href={favicon} />



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
              `} alt="Code Topeka Logo" />
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
                <svg id="slack-svg" alt="Slack Channel" className={svgNav} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm.115-9.531l-1.622.541.561 1.677c.22.679-.139 1.418-.82 1.637-.767.217-1.432-.214-1.642-.817l-.56-1.679-3.342 1.118.56 1.678c.261.802-.289 1.695-1.221 1.695-.586 0-1.067-.376-1.24-.876l-.561-1.678-1.621.54c-.756.218-1.43-.212-1.642-.82-.219-.678.141-1.418.821-1.637l1.621-.539-1.08-3.216-1.622.539c-.903.256-1.705-.393-1.705-1.226 0-.545.339-1.055.885-1.231l1.622-.539-.562-1.677c-.22-.68.141-1.419.822-1.638.68-.22 1.42.139 1.64.819l.562 1.677 3.34-1.118-.559-1.678c-.269-.826.323-1.702 1.229-1.702.546 0 1.056.339 1.233.884l.561 1.678 1.62-.54c.68-.22 1.421.14 1.641.819.221.679-.14 1.417-.82 1.637l-1.622.54 1.081 3.215 1.622-.539c.828-.268 1.705.322 1.705 1.225 0 .546-.34 1.055-.885 1.231zm-5.995-4.285l-3.34 1.117 1.079 3.218 3.341-1.116-1.08-3.219z" /></svg>
              </a>
              <a
                href={`https://fb.me/codetopekaorg`}
                className={cx(css`

              `, navItem)}
              >
                <svg id="fb-svg" alt="Facebook Group" className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
              </a>
              <a
                href={`https://www.meetup.com/Code-Topeka/`}
                className={cx(css`

              `, navItem)}
              >
                <svg id="meetup-svg" alt="Meetup Group" className={svgNav} viewBox="0 0 512 512" >
                <rect height="512" rx="15%" width="512" />
                <path d="m442 114c79 13 30 113 11 152-12 26-72 129-20 145 16 4 36 2 49 13 23 20 2 37-18 42-23 6-51 0-72-10-69-30-53-106-23-157 13-28 38-59 44-82 4-20-16-38-34-17-11 13-20 32-27 47-8 16-48 103-48 103-7 14-20 34-33 45-22 17-57 6-51-23 8-47 81-157 31-164-18-2-24 18-30 31-10 22-16 45-27 67-12 25-22 51-28 78-5 22-12 50-36 56-68 18-89-26-89-26-11-35-1-67 10-101 8-26 13-53 24-78 18-45 37-137 105-131 17 2 36 11 51 19 40 26 54-20 80-25 21-5 33 4 46 14 21 18 27 7 40 5 12-3 29-6 45-3z" fill="#fff"/>
                </svg>  
            </a>
            <a
              href={`https://github.com/CodeTopeka`}
              className={cx(css`
                
              `, navItem)}
            >
              <svg id="github-svg" alt="Github Repos" className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
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
    <a href={`https://scholarship.law.duke.edu/cgi/viewcontent.cgi?article=1280&context=lcp`}><img src={public_domain_small} alt="Public Domain" className={css`;margin-left: 20px; width:120px;margin-right: 30px;`} /></a>

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
        CodeTopeka.org:2020
            </span>
    </Link>

  </div>
      </div >
    )}
/>
)
