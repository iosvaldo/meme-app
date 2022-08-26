import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

function Home() {
  const [meme, setMeme] = useState({
    image: "https://media.giphy.com/media/VG76qPCdQQrh2cAQDz/giphy.gif"
  });
  const [memeArray, setMemeArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/memes")
      .then((res) => res.json())
      .then((memes) => setMemeArray(memes));
  }, []);

  let randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];

  function handleChange() {
    setMeme(randomMeme);
  }

  return (
    <div className="home-container d-grid gap-2">
      <Button
        className="page-btn"
        variant="danger"
        size="lg"
        onClick={handleChange}
      >
        Random Meme
      </Button>
      <img className="home-img" src={meme.image} alt="michael welcome gif" />
    </div>
  );
}

export default Home;
