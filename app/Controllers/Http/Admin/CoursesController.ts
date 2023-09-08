import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CoursesController {
  public async index({}: HttpContextContract) {
    return 'adming get all courses'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
