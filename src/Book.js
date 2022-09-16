import React from "react";

const Book = (props) => {
  const { img, title, author, link } = props; //getting splited attributes and catching them accordingly to there name

  const eventhandler = (link) => {
    // function for opening book link while clicking
    console.log(link);
    window.open(link);
  };

  return (
    /* creating template*/
    <article className="book">
      <img src={img} alt=""></img>
      <h1 onClick={() => eventhandler(link)}>{title}</h1>
      <h3>{author}</h3>
    </article>
  );
};

export default Book;
