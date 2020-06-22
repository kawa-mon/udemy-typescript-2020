interface Engineer {
  name: string
  role: string
}

interface Blogger {
  name: string
  follower: number
}

// type EngineerBlogger = Engineer & Blogger
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
  name: 'quill',
  role: 'front-end',
  follower: 1000
}
