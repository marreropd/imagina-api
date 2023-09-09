import Route from '@ioc:Adonis/Core/Route'

export function coursesRoutes() {
  Route.resource('courses', 'CoursesController')
}

export function AdminCoursesRoutes() {
  Route.group(() => {
    Route.get('/', 'CoursesController.index')
    Route.get('/:id', 'CoursesController.show')
    Route.post('/', 'CoursesController.store')
    Route.put('/:id', 'CoursesController.update')
    Route.delete('/:id', 'CoursesController.destroy')
  })
    .prefix('/courses')
    .namespace('App/Controllers/Http/Admin')
    .prefix('admin')
}
