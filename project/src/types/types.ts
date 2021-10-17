export type FilmType = {
  'name': string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'director': string,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'id': number,
  'is_favorite': boolean,
  'video_link': string,
  'preview_video_link': string
}

export type ReviewType = {
  id: number,
  user: {
    id: number,
    name: string
  },
  'rating': number,
  'comment': string,
  'date': string
}

export type PromoMovie = {
  title: string,
  genre: string,
  date: number
}
