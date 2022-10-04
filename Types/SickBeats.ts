
interface ISickBeat {
    _createdAt?: string,
    _id?: string,
    _rev?: string,
    _type?: string,
    _updatedAt?: Date,
    artist?: string,
    cover?: cover,
    isTrending?: boolean,
    length?: number,
    plays?: number,
    releaseDate?: Date,
    title?: string
}

type cover = {
    asset?: image,
    photographer?: string

}

type image = {
    alt?: string,
    url?: string
}

export default ISickBeat;