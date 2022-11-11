import React from "react";
import Card from "./Card";
import contact from "../contacts";

function App() {
  console.log(contact[0]);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contact[0].name}
        src={contact[0].imgURL}
        alt="avatar_img"
        tel={contact[0].phone}
        email={contact[0].email}
      />
      <Card
        name={contact[1].name}
        src={contact[1].imgURL}
        alt="avatar_img"
        tel={contact[1].phone}
        email={contact[1].email}
      />
      <Card
        name={contact[2].name}
        src={contact[2].imgURL}
        alt="avatar_img"
        tel={contact[2].phone}
        email={contact[2].email}
      />
    </div>
  );
}

export default App;
