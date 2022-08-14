import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function GifCards({gif}) {
  const [likes, setLikes] = useState (gif.likes)

  const {image} = gif

  function handleClick(e) {
    setLikes(likes => likes+1)
  }

  return (
    < >
      <Card >
        <Card.Img  variant="top" src={image} />
        <Card.Body>
          <Button variant="danger" onClick={handleClick}>
            ♡ {likes}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default GifCards