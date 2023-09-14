import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Authorize {
  public async handle({ response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    /*   if (true) {
      return response.unauthorized({ error: "You're not autorizhed" })
    } */

    await next()
  }
}
