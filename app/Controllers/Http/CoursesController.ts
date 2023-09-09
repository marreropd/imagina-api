import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DateService from 'App/Services/DateService'

export default class CoursesController {
  public async index({}: HttpContextContract) {
    return 'listing courses'
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    const dateTime = DateService.toDateTime()

    const formattedDate = DateService.toDate(dateTime)

    return `creating a course at ${formattedDate}`
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
