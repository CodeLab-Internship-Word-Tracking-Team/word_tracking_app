import React, { useState, useEffect } from 'react';
import '../App.css';

function Projects() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:3000/projects');

    let items = await data.json();
    items = items["projects"];
    setItems(items);
  }

  return (
    <div>
      {(Object.values(items)).map(item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.description}</h1>
          <h1>{item.progress["word count"]}</h1>
          <h1>{item.progress["word goal"]}</h1>
        </div>
      ))}
    </div>
  );
}

export default Projects;
