// Create a function called processApplicants which processes a queue of applicants and remove those who do not meet all the requirements.
// Requirements:
// yearsExperience >= 2
// techStack = needs to have at least React experience
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require('../lib/Queue')

function processApplicants(queue) {
  let tempQueue = new Queue()
  const yearsExperience = 2
  const techStack = 'React'

  while(!applicants.isEmpty()){
    let currPerson = queue.dequeue()
    if(currPerson.yearsExperience >= yearsExperience){
      for(let i=0; i<currPerson.techStack.length;i++){
        if(currPerson.techStack[i] === techStack){
          tempQueue.enqueue(currPerson)
        }
      }
    }
  }

  while(!tempQueue.isEmpty()){
    applicants.enqueue(tempQueue.dequeue())
  }

  return applicants
}

const applicants = new Queue()
applicants.enqueue({ name: "John Smith", yearsExperience: 3, techStack: ['Angular', 'Node'] })
applicants.enqueue({ name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] })
applicants.enqueue({ name: "Joe Smith", yearsExperience: 1, techStack: ['React', 'Node'] })
applicants.enqueue({ name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] })

processApplicants(applicants)
console.log(applicants.printQueue())
// Expected output:
// { name: "Jane Smith", yearsExperience: 5, techStack: ['Node', 'React', 'Vue'] }
// { name: "Jack Smith", yearsExperience: 2, techStack: ['Node', 'MongoDB', 'React'] }
