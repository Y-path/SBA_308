
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
        
    
    const CourseInfo = {
        course_id: 451,
        name: "Introduction to JavaScript"
      };
      
    const AssignmentGroup = {
        id: 12345,
        name: "Fundamentals of JavaScript",
        course_id: 451,
        group_weight: 25,
        assignments: [
          {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
          },
          {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
          },
          {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
          }
        ]
      };



function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {

    if (CourseInfo.course_id !== AssignmentGroup.course_id) {
    throw new Error('Course IDs do not match');
  }
       }
try {
  getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
} catch (error) {
  console.error(error.message); 

}

function checkPointsPossible(AssignmentGroup) {
    for (const assignments of AssignmentGroup) {
      if (assignments.points_possible === 0) {
        throw new Error("Points possible cannot be 0.");
      }
    }
  }
    
  try {
    checkPointsPossible(AssignmentGroup.assignments);
    console.log("All points possible are valid.");
  } catch (error) {
    console.error(error.message);
    }


    function checkForNumbers(arr) {
        for (const obj of arr) {
          if (typeof obj.learner_id !== "number" ||
              typeof obj.assignment_id !== "number" ||
              typeof obj.submission.score !== "number")
               {
            return false;
          }
        }
        return true;
      }
      
      console.log(checkForNumbers(LearnerSubmissions));   



function getMatchingSubmissions(AssignmentGroup, LearnerSubmissions) {
    const matchingSubmissions = [];
  
    for (const assignments in AssignmentGroup.assignments) {
      for (const submission of LearnerSubmissions) {
        if (assignments.id === LearnerSubmissions.assignment_id) {
          matchingSubmissions.push(submission);
         }
         }
      break;
    }
    
    return matchingSubmissions;
    
  };  
  
  const result = getMatchingSubmissions(AssignmentGroup, LearnerSubmissions);
  console.log(result); 


let onlyMatchingEntries = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: { submitted_at: '2023-01-25', score: 47 }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: { submitted_at: '2023-02-12', score: 150 }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: { submitted_at: '2023-01-25', score: 400 }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: { submitted_at: '2023-01-24', score: 39 }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: { submitted_at: '2023-03-07', score: 140 }
  }
];
 
Object.keys(AssignmentGroup).forEach((key) => {
  console.log(key, AssignmentGroup[key]);
});

let newArrayEntries = onlyMatchingEntries.map(({
  assignment_id: id,
  ...rest
}) => ({
  id,
  ...rest
}));
 console.log(newArrayEntries);


// spent a long time trying to figure out this next part
// solution thanks to a combination of stack overflow and w3 schools

 function flatten(obj) {
  const flattened = {};

  function recurse(obj, prefix = '') {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        recurse(obj[key], prefix + key + '_');
      } else {
        flattened[prefix + key] = obj[key];
      }
    }
  }

  recurse(obj);
  return flattened;
}

const flattenedArray = newArrayEntries.map(item => flatten(item));
console.log(flattenedArray);


let assignments = Object.entries(AssignmentGroup.assignments);
console.log(assignments);










// I could not get any of the stuff below to work
// I hope this at least shows how hard I tried


// function getDueOrPastDueAssignments(assignments, flattenedArray) {
//     const result3 = [];
  
//     for (const assignment of assignments) {
//       const match = flattenedArray.find(item => item.id === assignment.id);
  
//       if (match) {
//         const dueDate = new Date(assignment.due_at);
//         const submittedDate = new Date(match.submitted_at);
  
//         if (submittedDate > dueDate || dueDate < new Date()) {
//           result3.push(assignment);
//         }
//       }
//     }
  
//     return result3;
//   };
//   const filter = getDueOrPastDueAssignments(assignments, flattenedArray); 
//   console.log(filter);
  

//  const flatten = (obj) => {
//   let res = [];
//   for (const [key, value] of Object.entries(obj)) {
//       if (typeof value === 'object') {
//           res = { ...res, ...flatten(value) };
//       } else {
//           res[key] = value;
//       }
//   }
//   return res;
// };

// const flattened = flatten(newArrayEntries);
// console.log(flattened);
 

//  function flatten(obj) {
//   const result = {};
//   for (const key of Object.keys(obj)) {
//     if (typeof obj[key] === 'object') {
//       const nested = flatten(obj[key]);
//       for (const nestedKey of Object.keys(nested)) {
//         result[`${nestedKey}`] = nested[nestedKey];
//       }
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };
// const flattened = flatten(newArrayEntries);
// console.log(flattened);


// const results = onlyMatchingEntries.map(item1 => {
//   const matchingItem = assignments.find(item2 => item2.id === item1.assignment_id);
//   return {
//     ...item1,
//     ...matchingItem
//   };
// });

// console.log(results); 


// const results = [];

// for (const assignment in AssignmentGroup) {
//   const submission = LearnerSubmissions.find(a => a.id === assignment.assignment_id);

//   if (submission) {
//     const submittedDate = new Date(submission.submitted_at);
//     const dueDate = new Date(assignment.due_at);

//     if (submittedDate <= dueDate) {
//       results.push({
//         submissionId: submission.assignment_id,
//         isLate: true
//       });
//     } else {
//       results.push({
//         submissionId: submission.assignment_id,
//         isLate: false
//       });
//     }
//   }
// }

// console.log(results);



// for (let key in AssignmentGroup) {
//   if (AssignmentGroup.hasOwnProperty(key)) {
//     console.log(key, AssignmentGroup[key]);
//   }
// }



// const dates = [];

// onlyMatchingEntries.forEach(item => {
//   if (item.details && item.details.submitted_at) {
//     dates.push(new Date(item.details.submitted_at));
//   }
// });

// console.log(dates);


//   function getDueDates(AssignmentGroup, LearnerSubmissions) {
//     const dueDates = [];
  
//     for (const assignments in AssignmentGroup.assignments[0,1,2].due_at) {
//       for (const submission in LearnerSubmissions.submission.submitted_at) {
//         if (assignments.due_at >= submission.submitted_at) {
//           dueDates.push(submission);
//          }
//          }
//       break;
//     }
    
//     return dueDates;
    
//   };  
  
//   const resultB = getDueDates(AssignmentGroup, LearnerSubmissions);
//   console.log(resultB); 


//   function flattenObjects(AssignmentGroup, LearnerSubmissions) {
//     const resultB = [];
  
//     for (const key in AssignmentGroup) {
//       result.push([key, AssignmentGroup[key]]);
//     }
  
//     for (const key in LearnerSubmissions) {
//       result.push([key, LearnerSubmissions[key]]);
//     }
  
//     return resultB;
//   }
  
   
//   console.log(flattenObjects(AssignmentGroup, LearnerSubmissions));


//   function compareObjects(AssignmentGroup, LearnerSubmissions) {
//     const result2 = [];
  
//     for (const key in AssignmentGroup(assignments)) {
//       if (LearnerSubmissions.hasOwnProperty(key)) {
//         if (typeof AssignmentGroup.assignments[key] === 'string' && typeof LearnerSubmissions[key] === 'string') {
//           if (AssignmentGroup.assignments[key] >= LearnerSubmissions[key]) {
//             result.push(AssignmentGroup.assignments[key]);
//           } else {
//             result.push(LearnerSubmissions[key]);
//           }
//         }
//       }
//     }
  
//     return result2;
//   }
//   const dueOrPastDue = compareObjects(AssignmentGroup, LearnerSubmissions);
// console.log(dueOrPastDue); 



// const combinedData = LearnerSubmissions.map(learner => {
//   if (Array.isArray(AssignmentGroup)) {
    
//     const matchingScore = AssignmentGroup.find(score => score.id === learner.id);
  
//   return {
//     ...learner,
//     score: matchingScore ? matchingScore.score : null
//   };
// } else {
//   console.log(null)
// }
// });
// console.log(combinedData);


//   function getDueOrPastDue(LearnerSubmissions, AssignmentGroup) {
//     const dueOrPastDue = [];
  
//     for (const submission of LearnerSubmissions) {
//       const dueDate = new Date(AssignmentGroup[submission.id].due_at);
//       const submittedDate = new Date(submission.submitted_at);
  
//       if (submittedDate >= dueDate) {
//         pastDueSubmissions.push(submission);
//       }
//     }
  
//     return dueOrPastDue;
//   }

//     const due = getDueOrPastDue(LearnerSubmissions, AssignmentGroup);
//     console.log(due);


//     LearnerSubmissions.forEach(submission => {
      
//       const dueDate = new Date(AssignmentGroup.find(assignments => assignments.id === submission.assignment_id).due_at);
//       const submittedDate = new Date(submission.submitted_at);
  
//       if (submittedDate > dueDate) {
//         dueOrPastDue.push(submission);
//       }
//     });
  
//     return dueOrPastDue;
//   }


//   function getDueAndPastDue(AssignmentGroup, LearnerSubmissions) {
//     const dueAndPastDue = [];
  
//     dates.forEach(date => {
//       date.assignments.forEach(assignments => {
//         const assignments = new Date(AssignmentGroup.assignments);
//         const submission = new Date(LearnerSubmissions.submission);
  
//         if (submitted_at > due_at || submitted_at.getTime() === due_at.getTime()) {
//           dueAndPastDue.push(assignments, submission);
//         }
//       });
//     });
  
//     return dueAndPastDue;
//   }
  
  
//   const due = getDueAndPastDue(AssignmentGroup, LearnerSubmissions);
//   console.log(due); 


//   function getDueAndPastDue(AssignmentGroup, LearnerSubmissions) {
//     const result2 = [];
  
//     for (const assignments in AssignmentGroup) {
//       for (const submission of LearnerSubmissions) {
//         if (assignments.due_at <= submission.submitted_at) {
//           const due_at = new Date(assignments.due_at);
//           const submitted_at = new Date(submission.submitted_at);
  
//           if (submitted_at > due_at) {
//             result2.push(assignments);
//           }
//           break; cd -
//         }
//       }
//     }
  
//     return result2;
//   }
  
   
//   const result2 = getDueAndPastDue(AssignmentGroup, LearnerSubmissions);
//   console.log(result2);

//   function getDueAndPastDue(LearnerSubmissions, AssignmentGroup) {
//     const result2 = [];
  
//     for (let i = 0; i < LearnerSubmissions.length; i++) {
//       const submittedDate = new Date(LearnerSubmissions[i]);
//       const dueDate = new Date(AssignmentGroup[i]);
  
//       if (submittedDate > dueDate) {
//         result.push({
//           LearnerSubmissions: LearnerSubmissions[i],
//           AssignmentGroup: AssignmentGroup[i],
//           status: "Past Due"
//         });
//       } else if (submittedDate <= dueDate) {
//         result.push({
//           LearnerSubmissions: LearnerSubmissions[i],
//           AssignmentGroup: AssignmentGroup[i],
//           status: "Due"
//         });
//       }
//     }
  
//     return result2;
//   }

//   const result2 = getDueAndPastDue(AssignmentGroup, LearnerSubmissions);
//   console.log(result2); 

//   function getDueAndPastDue(AssignmentGroup, LearnerSubmissions) {
//     const result2 = [];
  
//     for (const submission in LearnerSubmissions) {
//       const submittedAt = new Date(submission.submitted_at);
  
//       for (const due_at in AssignmentGroup.assignments) {
//         const dueAt = new Date(due_at);
  
//         if (submittedAt > dueAt) {
//           result.push({
//             submission,
//             due_at,
//             status: "Past Due"
//           });
//         } else if (submittedAt <= dueAt) {
//           result.push({
//             submission,
//             due_at,
//             status: "Due"
//           });
//         }
//       }
//     }
  
//     return result2;
//   }

//   const result2 = getDueAndPastDue(AssignmentGroup, LearnerSubmissions);
//   console.log(result2); 

//   function getDueAssignments(AssignmentGroup, LearnerSubmissions) {
//     const dueAssignments = [];
  
//     for (const assignments in AssignmentGroup.assignments) {
//       const dueDate = new Date(assignments(due_at));
  
//       for (const submission of LearnerSubmissions) {
//         const submittedDate = new Date(submission.submitted_at);
  
//         if (dueDate >= submittedDate) {
//           dueAssignments.push(submission);
//           break; 
//         }
//       }
//     }
  
//     return dueAssignments;
//   }  
//   const result2 = getDueAssignments(AssignmentGroup, LearnerSubmissions);
//   console.log(result2); 


//   function getOnlyDue(AssignmentGroup, LearnerSubmissions) {
//       const onlyDue = [];
//       for (const assignments in AssignmentGroup.assignments) {
//         for (const submission in LearnerSubmissions.submission) {
//         if (assignments.due_at <= submission.submitted_at) {
//             onlyDue.push(submission);
//         }
//   }
// break;
//       }
//       return onlyDue;
//   };
//   const result2 = getOnlyDue(AssignmentGroup, LearnerSubmissions);
//   console.log(result2);
      

//       const filteredArray = LearnerSubmissions.filter(item1 => {
//         return AssignmentGroup.keys().some(item2 => item1.assignment_id === item2.id);
//       });
      
//       console.log(filteredArray);

//      if LearnerSubmissions(assignment_id === AssignmentGroup.assignments[id])
  
      
//     function compareDates(AssignmentGroup, LearnerSubmissions) {
//         const results = [];

    
    
     
      
  // Below is just commented out assignment info I did not use

  
    // here, we would process this data to achieve the desired result.
//     const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  
  
