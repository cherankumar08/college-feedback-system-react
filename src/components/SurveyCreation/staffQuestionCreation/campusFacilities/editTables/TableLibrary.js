import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SurveyTitle from "../../../../SurveyTitle";
import SurveyTitles from "../../../../SurveyTitles/SurveyTitles";
import Button from "react-bootstrap/Button";
import LibraryEdit from "../editModals/LibraryEdit";

const TableLibrary = () => {
  const [modalShow, setModalShow] = React.useState(false);
  // Assuming data is an array of objects with properties like questionNo, question, etc.
  const data = [
    { questionNo: 1, question: "What is your name?" },
    { questionNo: 2, question: "How old are you?" },
    { questionNo: 3, question: "Where are you from?" },
    { questionNo: 4, question: "Where are you from?" },
    { questionNo: 5, question: "Where are you from?" },
    // Add more objects as needed
  ];

  const handleDelete = (index) => {
    // alert(`Question ${index + 1} has been deleted`);
  };

  const handleEdit = () => {
    setModalShow(true);
  };

  return (
    <Row className="justify-content-md-center my-5">
      <Col xs lg="9">
        <Table striped hover className="border-0">
          <thead>
            <tr>
              <th className="text-center">Question No</th>
              <th className="text-center">Question</th>
              <th className="text-center">Delete</th>
              <th className="text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="text-center">{item.questionNo}</td>
                <td className="text-center">{item.question}</td>
                <td className="text-center">
                  <Button variant="danger" onClick={() => handleDelete(index)}>
                    <span>
                      <i className="bi bi-trash3"></i>
                    </span>
                  </Button>
                </td>
                {index === 0 && ( // Render edit button only for the first row
                  <td rowSpan={data.length} className="text-center">
                    <Button
                      variant="primary"
                      className="mx-2"
                      onClick={() => handleEdit()}
                    >
                      <span>
                        <i className="bi bi-pencil-square"></i>
                      </span>
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>

      <LibraryEdit show={modalShow} onHide={() => setModalShow(false)} />
    </Row>
  );
};

export default TableLibrary;
