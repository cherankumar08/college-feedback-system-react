import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SurveyTitles from "../components/SurveyTitles/SurveyTitles";
import SurveyTitle from "../components/SurveyTitle";

const DynamicReportTable = ({ endpoint }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      // Group data by email ID and subject name
      const groupedData = groupDataByEmailAndSubject(response.data);
      setData(groupedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to group data by email ID and subject name
  const groupDataByEmailAndSubject = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      if (!groupedData[item.StudentEmail]) {
        groupedData[item.StudentEmail] = {};
      }
      if (!groupedData[item.StudentEmail][item.SubjectName]) {
        groupedData[item.StudentEmail][item.SubjectName] = [];
      }
      groupedData[item.StudentEmail][item.SubjectName].push(item);
    });
    return groupedData;
  };

  return (
    <div>
      <SurveyTitle SurveyTitle="Individual Reports" />
      <Table
        striped
        responsive
        className="m-5"
        style={{ width: "1000px", height: "300px" }}
      >
        <thead>
          <tr>
            <th className="text-center">User Mail ID</th>
            <th className="text-center">Survey Name</th>
            <th className="text-center">Response</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((email) =>
            Object.keys(data[email]).map((subject) => (
              <React.Fragment key={email + subject}>
                {data[email][subject].map((row, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <td
                        scope="row"
                        className="text-center p-2"
                        rowSpan={data[email][subject].length}
                      >
                        {email}
                      </td>
                    )}
                    {index === 0 && (
                      <td
                        scope="row"
                        className="text-center"
                        rowSpan={data[email][subject].length}
                      >
                        {subject}
                      </td>
                    )}
                    <td className="text-center">{`Question Number ${row.QuestionNumber}-${row.selectedOption}`}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicReportTable;
