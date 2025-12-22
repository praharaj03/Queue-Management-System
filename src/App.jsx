import { useState } from "react";
import "./App.css"
import QueueForm from "./components/QueueForm";

export default function App(){
  const[queue, setQueue] = useState([])

  const addToQueue = (customer) => {

  };
  const updateStatus = (id, newStatus) => {

  };
  const remFromQueueove = (id) => {

  };


  
  return(
    <div className="app">
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>Display</h1>
      </main>
    </div>
  );
}