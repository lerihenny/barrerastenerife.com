import React from "react"
import Img, { FluidObject } from "gatsby-image"
import { Card } from "@material-ui/core"
import PropertyDescription from "./PropertyDescription"
import PropertyFooter from "./PropertyFooter"

interface Props {
  image: FluidObject
  price: string
  title: string
  address: string
}

const PropertyCard = ({ image, price, title, address }: Props) => {
  return (
    <Card>
      <div className="property-card-media">
        <Img fluid={image} alt="" className="img-responsive crop-center" />
      </div>
      <PropertyDescription price={price} title={title} address={address} />
      <PropertyFooter />
    </Card>
  )
}

export default PropertyCard
