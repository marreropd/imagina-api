import Route from '@ioc:Adonis/Core/Route'

export default function coursesRoutes() {
  Route.group(() => {
    Route.get('/', async () => {
      return { courses: 'world' }
    })

    Route.get('/:id', async ({ params }) => {
      return { course: params.id }
    })
  }).prefix('/courses')
}
