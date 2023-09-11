import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import { DateTime } from 'luxon'
import _ from 'lodash'

export default class CoursesController {
  public async index({ response }: HttpContextContract) {
    const courses = await Course.all()

    return response.json(courses)
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    /*     const course = new Course() */

    const data = request.only([
      'title',
      'courseImage',
      'nextStartDate',
      'bonus',
      'placesAvaiables',
      'isLimitedPlaces',
    ])

    /*     await course.merge(data) */

    const course = await Course.create(data)

    return course
  }

  public async show({ response }: HttpContextContract) {
    const today = DateTime.now().toISODate()
    const twoMonthFromToday = DateTime.now().plus({ month: 2 }).toISODate()

    const courses = await Course.query()
      .where('next_start_date', '<=', `${twoMonthFromToday}`)
      .where('next_start_date', '>', `${today}`)

    const groupedByDate = _.groupBy(courses, ({ nextStartDate }) => nextStartDate)

    return response.json(groupedByDate)
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
