export type artworkType = {
    title: string;
    description: string;
    audience: string;
    imageUrl: string;
}

export type followersType = {
  name: string;
  userName: string;
  imageUrl: string;
  following: boolean;
}

export type boardsArtworkType = {
  _id: string,
  ownerUserName: string,
  ownerImageUrl: string,
  artImageUrl: string,
  isFavourited: boolean,
  isLiked: boolean,
}