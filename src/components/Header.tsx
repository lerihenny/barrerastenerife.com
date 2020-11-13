import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AppBar, Grid, Toolbar } from "@material-ui/core"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = "" }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/logo-white-3.png" }) {
        childImageSharp {
          fixed(height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link to="/">
          <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            alt={siteTitle}
          />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
