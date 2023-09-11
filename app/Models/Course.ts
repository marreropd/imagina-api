import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column({ columnName: 'course_image' })
  public courseImage: string

  @column({ columnName: 'next_start_date' })
  public nextStartDate: string

  @column()
  public bonus: string

  @column()
  public duration: number

  @column({ columnName: 'places_avaiables' })
  public placesAvaiables: number

  @column({ columnName: 'is_limited_places' })
  public isLimitedPlaces: boolean

  @column.dateTime({ autoCreate: true, columnName: 'created_at' })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updated_at' })
  public updatedAt: DateTime
}
