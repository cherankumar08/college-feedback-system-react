// import React from "react";
// // import adduser from "./adduser";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { useState } from "react";
// import FormAddUser from "./FormAddUser";
// import Formuser from "./Formuser";
// import { useDispatch, useSelector } from "react-redux";
// import { removeUser } from "./Slice/Slice";
// // import setSe
// function UserAdd() {
//   const [modalShow, setModalShow] = React.useState(false);
//   const { userSet } = useSelector((state) => state.users);
//   const dispatch = useDispatch();
//   let editUser = (user) => {
//     // dispatch(setSelectedUser(user));
//     setModalShow(true);
//   };
//   let deleteUser = (user) => {
//     dispatch(removeUser(user));
//   };
//   return (
//     <div>
//       {" "}
//       <Formuser />
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userSet &&
//             userSet.map((user, index) => (
//               <tr Key={user.uid}>
//                 <td>{index + 1}</td>
//                 <td>{user.username}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   <Button variant="info" onClick={() => editUser(user)}>
//                     Edit
//                   </Button>
//                 </td>
//                 <td>
//                   <Button variant="danger" onClick={() => deleteUser(user)}>
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default UserAdd;
