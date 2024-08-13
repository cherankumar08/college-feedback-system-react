const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/responses") {
    // Handle the POST request for responses
    req.body = { hello: "world" };
    next(); // Continue to the next middleware or route handler
  } else if (req.method === "PATCH" && req.path.startsWith("/coursequestions")) {
    // Handle the PUT request for updating questions
    console.log("Received PUT request to update question:", req.body);
    // You can process the request here, such as updating the data in your database
    // Then send an appropriate response
    res.status(200).json({ message: "Question updated successfully" });
  } else {
    // For other requests, pass them to the next middleware
    next();
  }
};

// const fs = require("fs");
// const path = require("path");

// module.exports = (req, res, next)=> {
//     if(req.method === "POST" && req.path === "/responses") {
//         req.body = {"hello":"world"};

//     }

//     next();
// }

// // const fs = require("fs");
// // const path = require("path");

// // module.exports = (req, res, next) => {
// //   if (req.method === "PUT" && req.path.startsWith("/coursequestions")) {
// //     // Handle the PUT request for updating questions
// //     // Assuming the request body contains the updated question data
// //     console.log("Received PUT request to update question:", req.body);
// //     // You can process the request here, such as updating the data in your database
// //     // Then send an appropriate response
// //     res.status(200).json({ message: "Question updated successfully" });
// //   } else {
// //     // For other requests, pass them to the next middleware
// //     next();
// //   }
// // };
