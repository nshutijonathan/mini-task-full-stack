import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const PhotoComponent = ({ photo, handleDelete }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link>
        <Card.Img src={photo.url} variant="top" lg={4} xl={3} />
      </Link>
      <Card.Body>
        <Link>
          <Card.Title as="div">
            <strong>{photo.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
      <Button variant="danger" onClick={() => handleDelete(photo.name)}>
        Delete
      </Button>
    </Card>
  );
};
export default PhotoComponent;
