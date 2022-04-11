import newsAxios from './index'
import { Blog, BlogsCount } from './types'

export default {
  getBlogs() {
    return newsAxios.get<Blog[]>('/v3/blogs')
  },
  getBlogsCount() {
    return newsAxios.get<BlogsCount>('/v3/blogs/count')
  }
}
