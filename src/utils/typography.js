// import Typography from "typography"
// import fairyGateTheme from "typography-theme-fairy-gates"

// const typography = new Typography(fairyGateTheme)

// export default typography





import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.linkColor = "black"
lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
      textDecoration: 'underline',
      color: '#667c7c',
      backgroundImage: 'none',
      textShadow: 'none'
  },
  'a:hover': {
      textDecoration: 'none',
      color: '#667c7c'

  },
})
  

const typography = new Typography(lincolnTheme)

export default typography
export const rhythm = typography.rhythm