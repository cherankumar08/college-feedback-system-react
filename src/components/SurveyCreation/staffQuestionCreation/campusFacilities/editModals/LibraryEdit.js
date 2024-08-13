import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { UpdateQuestionToServer } from "../../../../../Slice/staffServicesSlice";

const LibraryEdit = (props) => {
  // // const { selectedQuestion } = useSelector((state) => state.question);
  // const { selectedQuestion } = useSelector((state) => state.staffServices);

  // // Setting the Libarry States
  // const [LibQn1, setLibQn1] = useState("");
  // const [LibQn2, setLibQn2] = useState("");
  // const [LibQn3, setLibQn3] = useState("");
  // const [LibQn4, setLibQn4] = useState("");
  // const [LibQn5, setLibQn5] = useState("");
  // const [id, setID] = useState(0);

  // const dispatch = useDispatch();

  // const UpdateLib = () => {
  //   const id = selectedQuestion.id;
  //   try {
  //     const questions = {
  //       id,
  //       LibQn1,
  //       LibQn2,
  //       LibQn3,
  //       LibQn4,
  //       LibQn5,
  //     };
  //     dispatch(UpdateQuestionToServer(...questions));
  //   } catch (error) {
  //     console.log("Hello world!");
  //   }
  //   props.onHide();

  //   // dispatchEvent(UpdateQuestionToServer({id,question}));
  // };

  // useEffect(() => {
  //   if (Object.keys(selectedQuestion).length !== 0) {
  //     setLibQn1(selectedQuestion.LibQn1);
  //     setLibQn2(selectedQuestion.LibQn2);
  //     setLibQn3(selectedQuestion.LibQn3);
  //     setLibQn4(selectedQuestion.LibQn4);
  //     setLibQn5(selectedQuestion.LibQn5);
  //     setID(selectedQuestion.id);
  //   }
  // }, [selectedQuestion]);

  // const [modalShow, setModalShow] = React.useState(false);

  const { selectedQuestion } = useSelector((state) => state.staffServices);

  const [LibQn1, setLibQn1] = useState("");
  const [LibQn2, setLibQn2] = useState("");
  const [LibQn3, setLibQn3] = useState("");
  const [LibQn4, setLibQn4] = useState("");
  const [LibQn5, setLibQn5] = useState("");
  const [id, setID] = useState(0);

  const dispatch = useDispatch();

  const UpdateLib = () => {
    const updatedQuestion = {
      ...selectedQuestion,
      LibQn1,
      LibQn2,
      LibQn3,
      LibQn4,
      LibQn5,
    };

    dispatch(UpdateQuestionToServer(updatedQuestion));
    props.onHide();
  };

  useEffect(() => {
    if (selectedQuestion) {
      setLibQn1(selectedQuestion.LibQn1);
      setLibQn2(selectedQuestion.LibQn2);
      setLibQn3(selectedQuestion.LibQn3);
      setLibQn4(selectedQuestion.LibQn4);
      setLibQn5(selectedQuestion.LibQn5);
      setID(selectedQuestion.id);
    }
  }, [selectedQuestion]);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Library Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Question 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Question"
                  value={LibQn1}
                  onChange={(e) => setLibQn1(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Question 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Question"
                  value={LibQn2}
                  onChange={(e) => setLibQn2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Question 3</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Question"
                  value={LibQn3}
                  onChange={(e) => setLibQn3(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Question 4</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Question"
                  value={LibQn4}
                  onChange={(e) => setLibQn4(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Question 5</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Question"
                  value={LibQn5}
                  onChange={(e) => setLibQn5(e.target.value)}
                />
              </Form.Group>
            </Form>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={UpdateLib}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LibraryEdit;
