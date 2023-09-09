import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 100).unique().notNullable()
      table.string('course_image').notNullable()
      table.date('next_start_date')
      table.date('bonus')
      table.integer('duration').defaultTo(60)
      table.integer('places_avaiables').defaultTo(5)
      table.boolean('is_limited_places').defaultTo(false)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
