// function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }

//   function liftWeights() {
//     console.log("Pump iron");
//   }
  
//   function swimFortyLaps() {
//     console.log("Swim 40 laps");
//   }

//   function Monday() {
//     exerciseRoutine(liftWeights)
//   }

//   function exerciseRoutine(postRunActivity) {
//     swimFortyLaps();
//     postRunActivity();
//   }

//   exerciseRoutine(()=>  console.log("Stretch! Work that core!"));
   
//  function morningRoutine(exercise) {
//     let breakfast

//     if (exercise === liftWeights) {
//         breakfast = "protein bar"
//     } else if(exercise === swimFortyLaps) {
//         breakfast = "kale smoothie"
//     } else {
//         breakfast = "granola"
//     }
//     exerciseRoutine(exercise);
//     return function() {
//         console.log(`Nom nom nom, this ${breakfast} is delicious!`)
//     }
//  }
// const afterExercise =  morningRoutine(swimFortyLaps)
// afterExercise()

function receivesAFunction(callback) {
       callback()
}
  function returnsANamedFunction(){
    return returnsANamedFunction
  }
  console.log(returnsANamedFunction())

  function returnsAnAnonymousFunction(){
    return (()=> {

    })
  }