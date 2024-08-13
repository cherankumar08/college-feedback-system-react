// Runs as Module For Json-server
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "feedbackdata.json"));
const lowdashDB = router.db;

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// const endpoint = "coursequestions";
// const instructor = "instructorquestions";

function endpointSwitch(req, res, endpoint) {
    let nextIndex = lowdashDB.get(endpoint).size().value() + 1;

    if (Array.isArray(req.body)) {
      console.log("Detected List Of Objects for POST, Unwrapping...");

      req.body.forEach((element) => {
        element.id = nextIndex++;
        lowdashDB.get(endpoint).push(element).write();
      });
    } else {
      req.body.id = nextIndex++;
      lowdashDB.get(endpoint).push(req.body).write();
    }

    res.status(201).send(req.body);

}

server.post("/coursequestions", (req, res) =>
  endpointSwitch(req, res, "coursequestions")
);

server.post("/instructorquestions", (req, res) =>
  endpointSwitch(req, res, "instructorquestions")
);

// Campus facilities
server.post("/campusfacilities", (req, res) =>
  endpointSwitch(req, res, "campusfacilities")
);

// Campus Services
server.post("/campusServices", (req, res) =>
  endpointSwitch(req, res, "campusServices")
);

// extracurricularActivities Services
server.post("/extracurricularActivities", (req, res) =>
  endpointSwitch(req, res, "extracurricularActivities")
);

// SurveyOnSuggestionAndImprovements Services
server.post("/surveyOnSuggestion", (req, res) =>
  endpointSwitch(req, res, "surveyOnSuggestion")
);

// SurveyOnSuggestionAndImprovements Services
server.post("/overallexp", (req, res) =>
  endpointSwitch(req, res, "overallexp")
);



server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
