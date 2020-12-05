import React from "react"
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core"
import ImageGallery from "react-image-gallery"
import PropertyFooter from "./PropertyFooter"
import { propertyImages } from "../../qraphql/queries"
import { imageSetBySize } from "../../utils"

interface Images {
  original: string
  thumbnail?: string
}

const Property = () => {
  const images: Array<Images> = []
  const srcImages = propertyImages()

  Object.values(srcImages).map(image =>
    images.push({
      original: image.childImageSharp.fluid.srcWebp,
      thumbnail: imageSetBySize(image.childImageSharp.fluid.srcSetWebp, "200w"),
    })
  )

  return (
    <>
      <Container>
        <Grid
          container
          spacing={3}
          justify="center"
          className="properties-container"
        >
          <Grid item xs={12}>
            <ImageGallery items={images} />
          </Grid>
          <Grid item xs={12}>
            <div className="property-data MuiPaper-elevation5">
              <h2 className="property-data-price">€ 100.000</h2>
              <hr />
              <h2 className="property-data-title">Casa bonita</h2>
              <h3 className="property-data-address">
                Los Abrigos - Granadilla de Abona
              </h3>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Card style={{ marginBottom: "20px" }}>
              <CardHeader title="Información básica" />
              <PropertyFooter detail={true} />
            </Card>

            <Card>
              <CardHeader title="Descripción" />
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sit amet diam sapien. Mauris eget vehicula quam.
                  Proin ut porta lorem. Praesent ac maximus nisi. Nulla orci
                  leo, feugiat eget turpis vitae, iaculis fringilla ante. In non
                  aliquet mauris. Etiam eu iaculis justo. Fusce facilisis
                  dapibus enim eu viverra. Cras vitae ante ut diam aliquam
                  tempor eu eget erat. Integer eget tincidunt libero. Curabitur
                  pretium rhoncus lectus, in scelerisque nulla consequat a.
                  Pellentesque ornare ultrices semper.
                </p>

                <p>
                  Vestibulum ut vulputate dolor. Pellentesque nec lorem nec
                  tortor commodo consectetur. Sed et ultricies eros. Duis dictum
                  consequat accumsan. In sed leo eleifend, ultricies mauris vel,
                  vulputate neque. Etiam faucibus quis lacus in pharetra.
                  Aliquam imperdiet tincidunt libero, sit amet consectetur
                  lectus semper nec. Nunc dignissim mi tristique diam consequat
                  dictum. Quisque dignissim varius tellus vitae viverra. Etiam
                  tincidunt sodales faucibus. Morbi ullamcorper quis metus eu
                  maximus. Fusce venenatis eget justo vel tempus. Donec
                  tincidunt leo non ipsum fringilla finibus.
                </p>

                <p>
                  Donec ac tempor ex. Pellentesque metus velit, tincidunt vitae
                  lorem non, auctor laoreet augue. Suspendisse potenti. Etiam
                  eget urna id risus maximus rhoncus. Aenean aliquam vel lectus
                  ut consequat. Sed tincidunt pharetra laoreet. Curabitur a
                  neque a mi blandit pulvinar vestibulum non ligula.
                </p>

                <p>
                  Fusce sapien justo, egestas at eros sed, auctor ornare quam.
                  Sed purus justo, auctor a faucibus rhoncus, maximus quis diam.
                  Nunc a scelerisque felis. Etiam vel turpis consequat, porta
                  est eu, sodales tortor. Vestibulum vulputate egestas
                  elementum. In sed semper arcu. Vestibulum eget mi non quam
                  fermentum imperdiet quis nec arcu. Nunc vel massa eget diam
                  malesuada mattis. Quisque elementum mi imperdiet, lobortis leo
                  quis, pulvinar arcu. Etiam congue, erat quis semper
                  pellentesque, lorem lectus volutpat mi, nec pellentesque erat
                  sem at elit. Maecenas ex magna, vehicula sit amet lacinia
                  lobortis, eleifend nec odio. Quisque pharetra at orci a
                  pellentesque. Etiam eu sem nec nisl efficitur efficitur sed id
                  elit. Pellentesque at quam molestie, lobortis augue id, mollis
                  quam.
                </p>

                <p>
                  Ut pharetra finibus odio, eu blandit quam iaculis et. Cras
                  semper varius vestibulum. Nam id viverra tellus, vitae
                  venenatis mi. Nullam ut rutrum nibh. Donec venenatis accumsan
                  vulputate. Etiam quis tempor justo. Suspendisse non diam
                  sapien. Vestibulum elit nisl, eleifend ac ante vitae, lacinia
                  pharetra est. Ut finibus nec nisl eu sollicitudin.{" "}
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Property
