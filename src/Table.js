
// const dispatch = useDispatch();

// const [formData, setFormData] = useState({
//   email: "",
//   studentName: "",
//   rollNo: "",
//   registerNo: "",
//   degree: "",
//   department: "",
//   year: "",
//   currentAddress: "",
//   permanentAddress: "",
//   phoneNumber: "",
//   password: "",
//   fatherName: "",
//   motherName: "",
//   bloodGroup: "",
// });


// const handleClose = () => setShow(false);
// const [validated, setValidated] = useState(false);

// const handleChange = (e) => {
//   const { id, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [id]: value,
//   }));
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   if (form.checkValidity() === false) {
//     e.stopPropagation();
//   } else {
//     try {
//       await dispatch(addStudent(formData));
//       form.reset();
//     } catch (error) {
//       console.error("Error adding student:", error);
//     }
//   }
//   setValidated(true);
// };





// const dispatch = useDispatch();

// const [show, setShow] = useState(false);
// const [formData, setFormData] = useState({
//   email: "",
//   studentName: "",
//   rollNo: "",
//   registerNo: "",
//   degree: "",
//   department: "",
//   year: "",
//   currentAddress: "",
//   permanentAddress: "",
//   phoneNumber: "",
//   password: "",
//   fatherName: "",
//   motherName: "",
//   bloodGroup: "",
// });
// const [validated, setValidated] = useState(false);

// const handleClose = () => setShow(false);

// const handleShow = (e) => {
//   dispatch(addStudent(formData));
//   e.preventDefault();
//   const form = e.currentTarget;
//   if (form.checkValidity() === false) {
//     e.preventDefault();
//     e.stopPropagation();
//   } else {
//     setShow(true);
//   }
//   setValidated(true);
// };

// const handleChange = (e) => {
//   const { id, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [id]: value,
//   }));
// };









