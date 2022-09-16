import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
//booklist
import { menu } from "./books.js";
//book component
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {menu.map((xy) => {
        //getting 1 array from big one and nameing as xy
        return <Book key={xy.id} {...xy} />; //giving book component attribute with a unique id {...xy}is use to split and send property to componemt
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
