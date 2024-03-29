export type Article = {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: Array<Launch>
  events: Array<Event>
}

type Launch = {
  id: string
  provider: string
}

type Event = {
  id: string
  provider: string
}

export type ArticleRequestParams = {
  params: {
    _start: number
    _limit: number
  }
}

export type NewsApiError = {
  code: number
  message: string
}

export type Blog = {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: Array<Launch>
  events: Array<Event>
}

export type BlogsCount = {
  count: number
}
