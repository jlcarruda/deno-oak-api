import { Application, isHttpError } from 'https://deno.land/x/oak/mod.ts';

import { httpErrorHandler } from './error-handler.ts'
import createRouter from './routes.ts';

const app = new Application();

const router = createRouter()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if(isHttpError(error)){
      httpErrorHandler(error)
    } else {
      throw error
    }
  }
})

app.use(router.routes())
app.use(router.allowedMethods())


await app.listen({ port: 3000 })