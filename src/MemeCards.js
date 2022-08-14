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
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button
              key={id}
              value={url}
              onClick={selectImage}
              variant="primary"
            >
              Create
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">***</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      {/* <Card className="cards">
        <Card.Title key={id}>{name}</Card.Title>
        <Card.Img src={url} variant="top" />
        <Card.Body>
          <Button key={id} value={url} onClick={selectImage} variant="primary">
            Create
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default MemeCards


