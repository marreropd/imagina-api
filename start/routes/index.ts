import coursesRoutes from './api/courses'

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  coursesRoutes()
}).prefix('/api')
