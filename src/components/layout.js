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
  color: #84d1a6;
  
  &:hover {
    text-decoration: underline;
    text-decoration-color: #84d1a6;
  }
`

const svgNav = css`
  transition: 200ms;
  transition-timing-function: ease-in-out;
  fill: #84d1a6 !important;
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
        <Helmet defaultTitle={`Holm School`} titleTemplate={`%s | Holm School`}>
          <meta name="twitter:site" content="@HolmSchool" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Holm School" />
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
              `} alt="Green Key and Blue Key Logo"/>
              <span className={css`
                font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                font-size: 2em;
                color: #84d1a6;
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
                Holm.School
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
              to={`/curriculum/`}
              activeClassName={cx(current)}
              className={cx(css`
                
              `, navItem)}
            >
              Curriculum
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
              href={`https://spectrum.chat/holmschool`}
              className={cx(css`
                
              `, navItem)}
            >
              Spectrum
            </a>
            <a
              href={`https://holmschool.slack.com`}
              className={cx(css`
                
              `, navItem)}
            >
              Slack
            </a>
            {/* <a
              href={`https://twitter.com/HolmSchool`}
              className={cx(css`

              `, navItem)}
            >
              <svg className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a
              href={`https://www.facebook.com/Holm-School-2196441863740478/`}
              className={cx(css`

              `, navItem)}
            >
              <svg className={svgNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a> */}
            <a
              href={`https://github.com/HolmSchool`}
              className={cx(css`
                
              `, navItem)}
            >
              <svg className={svgNav} id="github-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
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
          <a href="https://www.negativland.com/news/wp-content/uploads/text/negativland-two_relationships_essay.pdf"><img src={public_domain_small} alt="Public Domain" className={css`;margin-left: 20px; width:120px;margin-right: 30px;`}/></a>

          <Link to={'/'} className={css`text-decoration: none;`}>
            <span className={css`
                font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
                font-size: 1.0em;
                color: #84d1a6;
                transition: 150ms;
                transition-timing-function: ease-in-out;
                vertical-align: top;
                display: inline;
                

                &:hover {
                  color: #667c7c;
                }

                


              `}>
                Holm.School:2019
            </span>
          </Link>
          
        </div>
      </div>
    )}
  />
)