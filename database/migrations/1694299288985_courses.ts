import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 100).unique().notNullable()
      table.string('course_image').notNullable()
      table.dateTime('next_start_date')
      table.string('bonus')
      table.integer('duration').defaultTo(60)
      table.integer('places_avaiables').defaultTo(5)
      table.boolean('is_limited_places').defaultTo(false)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        {
          title: 'Curso Online de Excel Intermedio',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Power BI Avanzado',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Excel',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Power BI',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/900px-New_Power_BI_Logo.svg.png?20210102182532',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Dynamics Business Central',
          course_image:
            'https://www.waldo.be/wp-content/uploads/2021/11/business-central-logo-300x300.png',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Sharepoint Avanzado',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Python',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/182px-Python-logo-notext.svg.png',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 30,
          places_avaiables: 12,
          is_limited_places: true,
        },
        // 21 jan
        {
          title: 'Curso Online de Kotlin',
          course_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp-Mgoi8FXtDIVIFWPNc4j9Hu6vXGYY_ejzmSVFVjiw&s',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
        {
          title: 'Curso Online de Kotlin Avanzado',
          course_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp-Mgoi8FXtDIVIFWPNc4j9Hu6vXGYY_ejzmSVFVjiw&s',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },

        {
          title: 'Curso Online de C# 11 Avanzado',
          course_image: 'https://thinkotb.b-cdn.net/wp-content/uploads/2023/01/c-4.svg',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },

        {
          title: 'Curso Online de React Native',
          course_image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207',
          next_start_date: new Date('2023-10-03'),
          bonus: '100%',
          duration: 60,
          places_avaiables: 5,
          is_limited_places: true,
        },
      ])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
