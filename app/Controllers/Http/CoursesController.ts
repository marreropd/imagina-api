import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CoursesController {
  public async index({}: HttpContextContract) {
    return 'listing courses'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    return 'store'
  }

  public async show({ params }: HttpContextContract) {
    return `show with params ${params}`
  }

  public async edit({}: HttpContextContract) {
    return 'edit'
  }

  public async update({ params }: HttpContextContract) {
    return `update show with params ${params}`
  }

  public async destroy({ params }: HttpContextContract) {
    return 'delete'
  }
}
