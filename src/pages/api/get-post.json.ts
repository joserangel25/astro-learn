import type { APIRoute } from "astro"
import { getCollection, getEntry } from "astro:content"

export const prerender = false

export const GET: APIRoute = async (request) => {


  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')

  if (slug) {
    const blogPost = await getEntry('blog', slug)
    return new Response(JSON.stringify(blogPost ? blogPost : { ok: false, msg: 'No existe el post con el slug' + slug }), {
      status: blogPost ? 200 : 404,
      headers: {
        'Content-Type': 'apllication/json',
      },
    })
  }
  const posts = await getCollection('blog')

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'content-type': 'Application/json' },
  })
}