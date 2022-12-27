import imageURLBuilder from '@sanity/image-url'
import { config } from './sanityClient.js'

const builder = imageURLBuilder(config)

export default function urlForImage(source) {
  return builder.image(source)
}