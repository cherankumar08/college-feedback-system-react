import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { getInstructorSurveyResponses } from "../../../../../Slice/tableSlice";
import { useDispatch, useSelector } from "react-redux";
import SurveyTitle from "../../../../SurveyTitle";

const InstructorTable = () => {
  const { responseList } = useSelector((state) => state.response);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructorSurveyResponses());
  }, [dispatch]);

  return (
    <>
      <SurveyTitle SurveyTitle="Instructor Survey Reports" />
      <Table striped bordered hover className="my-5">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Instructor Name</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Question 4</th>
            <th>Question 5</th>
          </tr>
        </thead>
        <tbody>
          {responseList.map((response, index) => (
            <tr key={index}>
              <td className="text-center p-2">{response.StudentID}</td>
              <td className="text-center p-2">{response.Name}</td>
              <td className="text-center p-2">{response.Instructor}</td>
              <td className="text-center p-2">{response.Question1}</td>
              <td className="text-center p-2">{response.Question2}</td>
              <td className="text-center p-2">{response.Question3}</td>
              <td className="text-center p-2">{response.Question4}</td>
              <td className="text-center p-2">{response.Question5}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default InstructorTable;
