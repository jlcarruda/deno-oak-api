import { Status, HttpError } from 'https://deno.land/x/oak/mod.ts'

export function httpErrorHandler (error: HttpError): void {
  switch (error.status) {
    case Status.NotFound:

      break;
    case Status.Forbidden:

      break;
    case Status.Unauthorized:

      break;
    default:
      break;
  }
}