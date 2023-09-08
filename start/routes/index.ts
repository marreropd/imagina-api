import { coursesRoutes, AdminCoursesRoutes } from './api/courses'

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  coursesRoutes()
  AdminCoursesRoutes()
}).prefix('/api')
