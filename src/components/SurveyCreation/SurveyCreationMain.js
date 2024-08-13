import React from "react";
import CreateSurvey from "./CreateSurvey";
import SurveyTitles from "../SurveyTitles/SurveyTitles";
import SelectSurevyType from "./SelectSurevyType";
import SelectSurveyFor from "./SelectSurveyFor";
import SurveyTime from "./SurveyTime";

const SurveyCreationMain = () => {
  const topic = [
    "Course Survey",
    "Instructor Survey",
    "Campus Facilities",
    "Campus Services",
    "Extracurricular Activites",
    "Overall",
    "Anonymous",
  ];
  const subSurvey = {
    "Course Survey": [
      "DataBase Management System",
      "Computer Networks",
      "Distributed Systems",
      "Theory Of Computation",
      "Programming in C",
      "Python Programming",
      "Object Oriented Programming",
    ],
    "Instructor Survey": [
      "John Smith",
      "Emily Johnson",
      "Michael Williams",
      "Sarah Davis",
      "Christopher Brown",
      "Jessica Miller",
      "Matthew Taylor",
      "Amanda Anderson",
      "David Martinez",
      "Jennifer Wilson",
    ],
    "Campus Facilities": ["Library", "Laboratory", "Support Services"],
    "Campus Services": [
      "Academics",
      "Transportation",
      "Security And Services",
      "IT facilities",
      "Recreational",
    ],
    "Extracurricular Activites": ["Events", "Clubs", "Support Activities"],
    Overall: ["Overall", "Campus"],
    Anonymous: ["Anonymous"],
  };
  const dept = [
    "Computer Science And Engineering",
    "Electronics And Communication Engineering",
    "Electrical And Electronics Engineering",
    "Information Technology",
    "Artificial Intelligence And Data Science",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
  const section = {
    "Computer Science And Engineering": [
      "I-CSE-A",
      "I-CSE-B",
      "I-CSE-C",
      "II-CSE-A",
      "II-CSE-B",
      "II-CSE-C",
      "III-CSE-A",
      "III-CSE-B",
      "III-CSE-C",
      "IV-CSE-A",
      "IV-CSE-B",
      "IV-CSE-C",
    ],
    "Electronics And Communication Engineering": [
      "I-ECE-A",
      "I-ECE-B",
      "I-ECE-C",
      "II-ECE-A",
      "II-ECE-B",
      "II-ECE-C",
      "III-ECE-A",
      "III-ECE-B",
      "III-ECE-C",
      "IV-ECE-A",
      "IV-ECE-B",
      "IV-ECE-C",
    ],
    "Electrical And Electronics Engineering": [
      "I-EEE-A",
      "I-EEE-B",
      "I-EEE-C",
      "II-EEE-A",
      "II-EEE-B",
      "II-EEE-C",
      "III-EEE-A",
      "III-EEE-B",
      "III-EEE-C",
      "IV-EEE-A",
      "IV-EEE-B",
      "IV-EEE-C",
    ],
    "Information Technology": [
      "I-IT-A",
      "I-IT-B",
      "I-IT-C",
      "II-IT-A",
      "II-IT-B",
      "II-IT-C",
      "III-IT-A",
      "III-IT-B",
      "III-IT-C",
      "IV-IT-A",
      "IV-IT-B",
      "IV-IT-C",
    ],
    "Artificial Intelligence And Data Science": [
      "I-AIDS-A",
      "I-AIDS-B",
      "I-AIDS-C",
      "II-AIDS-A",
      "II-AIDS-B",
      "II-AIDS-C",
      "III-AIDS-A",
      "III-AIDS-B",
      "III-AIDS-C",
      "IV-AIDS-A",
      "IV-AIDS-B",
      "IV-AIDS-C",
    ],
    "Mechanical Engineering": [
      "I-MECH-A",
      "I-MECH-B",
      "I-MECH-C",
      "II-MECH-A",
      "II-MECH-B",
      "II-MECH-C",
      "III-MECH-A",
      "III-MECH-B",
      "III-MECH-C",
      "IV-MECH-A",
      "IV-MECH-B",
      "IV-MECH-C",
    ],
  };

  return (
    <div>
      <div className="my-5">
        <SurveyTitles SubjectFaculty="Students" SubjectName="Survey Creation" />
      </div>
      <div className="shadow-effect mx-5">
        <SelectSurevyType topic={topic} subSurvey={subSurvey} />
        <SelectSurveyFor section={section} dept={dept} />
        <SurveyTime />
      </div>
      <CreateSurvey />
    </div>
  );
};

export default SurveyCreationMain;
