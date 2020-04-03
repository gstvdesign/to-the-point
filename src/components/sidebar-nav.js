import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/style.scss"
import { Link } from "gatsby"



const SidebarNav = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      } 
    }
  `)
  return (
    <div>
      <sidebar>
        <div className="brand">
          <Link to="/">
            <Img className="brand-logo"
              fluid={data.file.childImageSharp.fluid}
              alt="Marca"
          />
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/sobre/">Sobre</Link>
            <Link to="/contato/">Contato</Link>
          </nav>
        </div>
      </sidebar>
    </div>
    )
  }


export default SidebarNav
