import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from "react-bootstrap/CardGroup";

function MemeCards({meme, selectImage}) {
  const {name, id, url} = meme

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title key={id}>{name}</Card.Title>
            <Button
              key={id}
              value={url}
              onClick={selectImage}
              variant="danger red"
            >
              Create
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default MemeCards


