import { Router } from 'express';
import { addLectureToCourseById, createCourse, deleteCourseById, getAllCourses, getLecturesByCourseId, updateCourseById } from '../controllers/course.controller.js';
import { authorizeRoles, isLoggedIn } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js';
const router = Router();


router
  .route('/') // home page url of course
  .get(getAllCourses)
  .post(
    isLoggedIn,
    authorizeRoles('ADMIN'),
    upload.single('thumbnail'),
    createCourse
  )
//    .delete(isLoggedIn, authorizeRoles('ADMIN'), removeLectureFromCourse);

   


router
  .route('/:id')
  .get(
    isLoggedIn,
    getLecturesByCourseId
  )
  .post(
    isLoggedIn,
    authorizeRoles('ADMIN'),
    upload.single('lecture'),
    addLectureToCourseById
  )
  .put(
    isLoggedIn,
    authorizeRoles('ADMIN'), 
    updateCourseById
  )
  .delete(
    isLoggedIn,
    deleteCourseById
  );




export default router;