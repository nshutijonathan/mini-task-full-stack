import React, { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
const q = query(collection(db, "texts"), orderBy("timestamp", "desc"));
const Texts = () => {
  const [texts, setTexts] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTexts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
          timestamp: doc.data().timestamp.toDate(),
        }))
      );
    });
    localStorage.removeItem("texts");
    localStorage.setItem("texts", texts.length);
  }, [value, "texts"]);
  const submitHandler = (e) => {
    e.preventDefault();
    addDoc(collection(db, "texts"), {
      text: value,
      timestamp: serverTimestamp(),
    });
    setValue("");
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const handleDelete = (item) => {
    deleteDoc(doc(db, "texts", item.id));
  };
  return (
    <>
      <h1>Texts{texts.length}</h1>;
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            value={value}
            placeholder="enter your text"
            onChange={changeHandler}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" onClick={submitHandler}>
          Add Text
        </Button>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Texts</th>
              <th>Added on</th>
            </tr>
          </thead>
          <tbody>
            {texts.map((value, index) => {
              {
                console.log(
                  "value",
                  value["timestamp"],
                  value.item["timestamp"].toDate()
                );
              }
              return (
                <tr key={index}>
                  <td>{value.item.text}</td>
                  <td>
                    {value.item["timestamp"].toDate().toString().slice(0, 16)}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => handleDelete(value)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Form>
    </>
  );
};

export default Texts;
