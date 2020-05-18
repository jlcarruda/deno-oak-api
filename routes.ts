import { Router } from 'https://deno.land/x/oak/mod.ts'

export default function createRouter (): Router {
  const router = new Router();
  router
    .get('/', ctx => {
      ctx.response.body = "Hello World"
    })
    .get('/book', ctx => {
      ctx.response.body = "Book Page"
    })

  return router
}