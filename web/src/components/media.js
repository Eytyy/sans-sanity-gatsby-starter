import React from "react"
import Gallery from "./gallery"
import Video from "./video"
import Figure from "./figure"

const Media = ({ data }) => {
  console.log(data)
  if (data.length === 0) {
    return null
  }
  if (data.length > 1) {
    return <Gallery slides={data} />
  }
  const singleAsset = data[0]
  return data.length > 1 ? (
    <Gallery />
  ) : singleAsset.__typename === "SanityVideoEmbed" ? (
    <Video data={singleAsset} />
  ) : (
    <Figure image={singleAsset} />
  )
}

export default Media
