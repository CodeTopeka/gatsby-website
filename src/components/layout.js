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
  transition: 200ms;
  transition-timing-function: ease-in-out;
  fill: #12c92e !important;
  width: 35px;
  height: 35px;

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
              <svg id="slack-svg" className={svgNav} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"/></svg>
            </a>
            <a
              href={`https://fb.me/codetopekaorg`}
              className={cx(css`

              `, navItem)}
            >
              <svg id="fb-svg" className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a
              href={`https://github.com/CodeTopeka`}
              className={cx(css`
                
              `, navItem)}
            >
              <svg id="github-svg" className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
