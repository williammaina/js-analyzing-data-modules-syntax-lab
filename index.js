require('datejs')
require('datejs');

const combineUsers = (...args) => {
  // 1. Generate the date string
  const merge_date = new Date().toLocaleDateString("en-US");

  const combinedObject = {
    users: [],
    // 2. Explicitly add merge_date to the object so the test can find it
    merge_date: merge_date 
  };

  for (const userArray of args) {
    // 3. Map the users. 
    // If the test expects strings (like "Jim3"), we just return the user.
    // If you need the date attached to the user, keep the object syntax.
    const processedUsers = userArray.map(user => {
      // If user is a string, we return it as is to satisfy the "merge" test
      return typeof user === 'object' ? { ...user} : user;
    });

    combinedObject.users = [...combinedObject.users, ...processedUsers];
  }

  return combinedObject;
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// Sample 1: Engineering Students
const engineeringUsers = [
  { name: "Kamau", favorite_color: "blue", title: "student", course: "sdft17" },
  { name: "Shee", favorite_color: "red", title: "student", course: "sdft17" }
];

// Sample 2: Cyber Security Students
const cyberUsers = [
  { name: "Milly", favorite_color: "blue", title: "student", course: "cyber sec" },
  { name: "Carol Doe", favorite_color: "white", title: "student", course: "cyber sec" }
];

// Sample 3: A single Guest user
const guestUsers = [
  { name: "John Smith", favorite_color: "green", title: "guest", course: "none" }
];

// --- HOW TO TEST YOUR FUNCTION ---

// Call the function and pass the arrays as arguments
const finalResult = combineUsers(engineeringUsers, cyberUsers, guestUsers);

// Now you can safely console.log the result!
console.log(finalResult);