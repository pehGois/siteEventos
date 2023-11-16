import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'fzurtnj7',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-11-09'
})
export async function getContent() {
  try {
    const content = await client.fetch(`*[_type == 'content']{image -> {image{hotspot, asset->{url}}},body[0]{children[0]{text}}}`)
    console.log('GetContent foi executado')
    return content
  } catch (error) {
    console.log('Error fetching content:', error.message)
  }
}
export async function getGallery(){
  try {
    const carousel = await client.fetch(`*[_type == 'carousel']{imgCarousel[]->{image{asset->{url}}}}`)
    console.log('GetGallery foi executado')
    return carousel
  } catch (error){
    console.log('Error Fetching gallery: ', error.message)
  }
}
