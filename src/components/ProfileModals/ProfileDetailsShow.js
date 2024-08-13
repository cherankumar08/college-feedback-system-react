import React from "react";

const ProfileDetailsShow = () => {
  return <div>ProfileDetailsShow</div>;
};

export default ProfileDetailsShow;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStudentProfile } from "../../Slice/StudentProfileSlice";
// import { Col, Form, Row } from "react-bootstrap";
// import SurveyTitle from "../../components/SurveyTitle";

// const ProfileDetailsShow = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector(
//     (state) => state.ProfileDetailsShow
//   );

//   useEffect(() => {
//     dispatch(fetchStudentProfile());
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   // Display only the first student profile
//   const student = data && data.length > 0 ? data[0] : null;
//   return (
//     <div className="d-flex justify-content-center ms-3">
//       <div className=" ms-1 mt-2">
//         <div className="container mb-3">
//           <SurveyTitle SurveyTitle="Student Profile" />
//           <Form className="">
//             {student && (
//               <div>
//                 <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     controlId="formGridEmail"
//                     className="text-left mt-2 mb-2"
//                   >
//                     {/* Email */}
//                     <Form.Label className="Label-lft h5">Email</Form.Label>
//                     <Form.Control type="text" disabled value={student.email} />
//                   </Form.Group>

//                   <Form.Group
//                     as={Col}
//                     controlId="formGridPassword"
//                     className="text-left mt-2 mb-2"
//                   >
//                     <Form.Label className="Label-lft h5">
//                       Student Name
//                     </Form.Label>
//                     <Form.Control type="text" disabled value={student.name} />
//                   </Form.Group>
//                 </Row>

//                 <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     controlId="formGridEmail"
//                     className="text-left mt-2 mb-2"
//                   >
//                     {/* Email */}
//                     <Form.Label className="Label-lft h5 h5">Roll No</Form.Label>
//                     <Form.Control type="text" disabled value={student.rollNo} />
//                   </Form.Group>

//                   <Form.Group
//                     as={Col}
//                     controlId="formGridPassword"
//                     className="text-left mt-2 mb-2"
//                   >
//                     <Form.Label className="Label-lft h5">
//                       Register Number
//                     </Form.Label>
//                     <Form.Control
//                       type="text"
//                       disabled
//                       value={student.registerNumber}
//                     />
//                   </Form.Group>
//                 </Row>

//                 <Row className="mb-3 text-left mt-2 mb-2">
//                   <Form.Group as={Col} controlId="formGridCity">
//                     <Form.Label className="Label-lft h5">Degree</Form.Label>
//                     <Form.Control disabled type="text" value={student.degree} />
//                   </Form.Group>

//                   <Form.Group
//                     as={Col}
//                     controlId="formGridState"
//                     className="text-left mt-0 mb-2"
//                   >
//                     <Form.Label className="Label-lft h5 ">
//                       Department
//                     </Form.Label>
//                     <Form.Control disabled type="text" value={student.Dept} />
//                   </Form.Group>

//                   <Form.Group as={Col} controlId="formGridZip">
//                     <Form.Label className="Label-lft h5">Batch</Form.Label>
//                     <Form.Control disabled type="text" value={student.Batch} />
//                   </Form.Group>
//                 </Row>

//                 {/* Current Address */}
//                 <Form.Group
//                   className="mb-3 text-left mt-2 mb-2"
//                   controlId="formGridAddress1"
//                 >
//                   <Form.Label className="Label-lft h5">
//                     Current Address
//                   </Form.Label>
//                   <Form.Control
//                     disabled
//                     type="text"
//                     value={student.currentAddress}
//                   />
//                 </Form.Group>

//                 {/* Address */}
//                 <Form.Group
//                   className="mb-3 text-left mt-2 mb-2"
//                   controlId="formGridAddress2"
//                 >
//                   <Form.Label className="Label-lft h5">
//                     Permanent Address
//                   </Form.Label>
//                   <Form.Control
//                     disabled
//                     type="text"
//                     value={student.PermanentAddress}
//                   />
//                 </Form.Group>

//                 <Row className="mb-3">
//                   <Form.Group
//                     as={Col}
//                     controlId="formGridEmail"
//                     className="text-left mt-2 mb-2"
//                   >
//                     <Form.Label className="Label-lft h5">
//                       Phone Number
//                     </Form.Label>
//                     <Form.Control
//                       disabled
//                       type="text"
//                       value={student.PhoneNumber}
//                     />
//                   </Form.Group>
//                 </Row>

//                 <Row className="mb-3 text-left mt-2 mb-2">
//                   <Form.Group as={Col} controlId="formGridCity">
//                     <Form.Label className="Label-lft h5 ">
//                       Father's Name
//                     </Form.Label>

//                     <Form.Control
//                       disabled
//                       type="text"
//                       value={student.FatherName}
//                     />
//                   </Form.Group>

//                   <Form.Group
//                     as={Col}
//                     controlId="formGridState"
//                     className="text-left mt-0 mb-2"
//                   >
//                     <Form.Label className="Label-lft h5 ">
//                       Mother's Name
//                     </Form.Label>
//                     <Form.Control
//                       disabled
//                       type="text"
//                       value={student.MotherName}
//                     />
//                   </Form.Group>

//                   <Form.Group as={Col} controlId="formGridZip">
//                     <Form.Label className="Label-lft h5">
//                       Blood Group
//                     </Form.Label>
//                     <Form.Control
//                       disabled
//                       type="text"
//                       value={student.BloodGroup}
//                     />
//                   </Form.Group>
//                 </Row>
//               </div>
//             )}
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetailsShow;
