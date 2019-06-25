const router = require('express').Router()
const Exercise = require('../models/exercise.model')

router.get('/', (req,res)=> {
  Exercise.find()
  .then(exercises => res.json(exercises))
  .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', (req,res)=> {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date)

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  })
  newExercise.save()
    .then(()=> res.json(`Exercise Added`))
    .catch(err=>{
      console.error(err.message)
      res.status(400).json({msg: `SERVER ERROR`})
    })
})

router.get('/:id', (req,res)=>{
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .then(err=> res.status(400).json({msg: `SERVER ERROR`}))
})

router.delete('/:id', (req,res)=> {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/update/:id', (req, res)=> {
  Exercise.findById(req.params._id)
    .then(exercise=>{
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration)
      exercise.date = Date.parse(req.body.date)
      
      exercise.save()
        .then(()=> res.json(`Exercise Update`))
        .catch(err=> res.status(400).json(`SERVER ERROR:` + err))
    })

})

module.exports = router