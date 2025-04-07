const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

router.get('/' ,getWorkouts)

//GET SINGLE WORKOUT
router.get('/:id' ,getWorkout)


//SINGLE POST
router.post('/' , createWorkout)
 
//POST SINGLE WORKOUT
router.delete('/:id' ,deleteWorkout)


//update WORKOUT
router.patch('/:id' ,updateWorkout)


module.exports = router