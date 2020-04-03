import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/style.scss"



const Products = () => {
    const data = useStaticQuery(graphql`
    query {
        allProductCsv {
            nodes {
                designer
                header
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                description
            }
        }
    }
    `)
    
    const productNodes = data.allProductCsv.nodes

    return (
            <div className="products">
                {productNodes.map(node => (
                    <div className="products-item">
                        <h1 className="products-header">{node.header}</h1>
                        <h2>{node.designer}</h2>
                        <p>{node.description}</p>
                        <Img
                            fluid={node.img.childImageSharp.fluid}
                            alt="{node.description}" />
                    </div>
                ))}
            </div>
    )
}

export default Products