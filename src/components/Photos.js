import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PhotoComponent from "./PhotoComponent";

import Loader from "./Loader";
const BASE_API_UL = process.env.REACT_APP_PHOTOS_BASE_API_UL;

const Photos = () => {
  const [pic, setPic] = useState();
  const [allPics, setAllPics] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/");
    }
    getAllPics();
    localStorage.removeItem("photos");
    localStorage.setItem("photos", allPics.length);
  }, [allPics, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pic", pic);
    try {
      await axios.post(BASE_API_UL + "addPicture", formData);
    } catch (error) {
      return error.message;
    }
  };
  const handleChange = (e) => {
    setPic(e.target.files[0]);
  };
  const getAllPics = async () => {
    try {
      const { data } = await axios.get(BASE_API_UL + "pictures");
      setAllPics(data);
    } catch (error) {
      return error.message;
    }
  };
  const handleDelete = async (name) => {
    try {
      await axios.delete(BASE_API_UL + "delete", {
        data: { name: name },
      });
      getAllPics();
    } catch (error) {
      return error.message;
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button>upload</button>
      </form>
      <Row>
        {allPics.length < 1 ? (
          <Loader />
        ) : (
          allPics.map((photo, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <PhotoComponent photo={photo} handleDelete={handleDelete} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default Photos;
