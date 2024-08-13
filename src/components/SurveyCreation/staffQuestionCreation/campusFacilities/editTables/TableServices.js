import React from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SurveyTitle from "../../../../SurveyTitle";
import SurveyTitles from "../../../../SurveyTitles/SurveyTitles";
import Button from "react-bootstrap/Button";
import ServicesEdit from "../editModals/ServicesEdit";



const TableServices = () => {
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

      <ServicesEdit show={modalShow} onHide={() => setModalShow(false)} />
    </Row>
  );
};

export default TableServices;




// const TableServices = () => {
//   const [modalShow, setModalShow] = React.useState(false);

//   const UpdateFunction = () => {
//     console.log("Edit is Working");
//     setModalShow(true);
//   };

//   return (
//     <>
//       <SurveyTitle SurveyTitle="Support Services" />

//       <Row className="justify-content-md-center my-5">
//         <Col xs lg="9">
//           <Table striped hover className="border-0">
//             <thead>
//               <tr>
//                 <th className="text-center">Question No</th>
//                 <th className="text-center">Question </th>
//                 <th className="text-center">Delete</th>
//                 <th className="text-center">Edit</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="text-center">1</td>
//                 <td className="text-center">Mark</td>
//                 <td className="text-center">
//                   <Button variant="danger" className="">
//                     <span>
//                       <i class="bi bi-trash3"></i>
//                     </span>
//                   </Button>
//                 </td>
//                 <td rowSpan={5} className="text-center mt-5">
//                   <Button
//                     variant="primary"
//                     className="mx-2"
//                     onClick={() => UpdateFunction()}
//                   >
//                     <span>
//                       <i class="bi bi-pencil-square"></i>
//                     </span>
//                   </Button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-center">2</td>
//                 <td className="text-center">Question </td>
//                 <td className="text-center">
//                   <Button variant="danger" className="">
//                     <span>
//                       <i class="bi bi-trash3"></i>
//                     </span>
//                   </Button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-center">3</td>
//                 <td className="text-center">Jacob</td>
//                 <td className="text-center">
//                   <Button variant="danger" className="">
//                     <span>
//                       <i class="bi bi-trash3"></i>
//                     </span>
//                   </Button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-center">4</td>
//                 <td className="text-center">Jacob</td>
//                 <td className="text-center">
//                   <Button variant="danger" className="">
//                     <span>
//                       <i class="bi bi-trash3"></i>
//                     </span>
//                   </Button>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-center">5</td>
//                 <td className="text-center">Jacob</td>
//                 <td className="text-center">
//                   <Button variant="danger" className="">
//                     <span>
//                       <i class="bi bi-trash3"></i>
//                     </span>
//                   </Button>
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </Col>
//       </Row>

//       <ServicesEdit show={modalShow} onHide={() => setModalShow(false)} />
//     </>
//   );
// };

// export default TableServices;

// import React from "react";
// import { Row, Col, Table, Button } from "react-bootstrap";