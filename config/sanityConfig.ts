// @ts-ignore
import {createClient} from "next-sanity";
// @ts-ignore
import imageUrlBuilder from '@sanity/image-url'



const sanityClient = require('@sanity/client')
export const client = sanityClient({
    projectId: '6gx3781v',
    dataset: 'production',
    apiVersion: '2022-08-24', // use current UTC date - see "specifying API version"!
    useCdn: false, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}

// export default createClient({
//     projectId: "6gx3781v",
//     dataset: "production",
//     apiVersion: "2022-08-24",
//     useCdn: false
// });