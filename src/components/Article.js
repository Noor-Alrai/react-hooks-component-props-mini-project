import React from "react";

function Article({title , date, preview, minutes}){
 
  const articleDate = date || "January 1, 1970";
  const coffeeCup =Math.ceil(minutes / 5);
  const coffeeEmoji = '☕️'.repeat(coffeeCup);
  const benBook = Math.ceil(minutes / 10);
  const benbookEmoji = '🍱'.repeat(benBook);
   const displayEmoj = minutes < 30 ? coffeeEmoji : benbookEmoji 
     return <article> 
              <h3>{title}</h3>
              <small>{articleDate}{displayEmoj} in read </small>
              <p>{preview}</p>
            </article>
}
export default Article;