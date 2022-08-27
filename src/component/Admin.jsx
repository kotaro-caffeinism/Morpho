import React, { useState, useEffect } from "react";
// import axios from "axios"

function Admin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/students-result")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // useEffect(()=>{
  //   fetch('https://source.unsplash.com/random').then(data => setImage(data.url))
  // }, []);

  return (
    <>
      {console.log(data, "data")}
      {data
        ? data.map((val, i) => {
            console.log(val, "val");
            console.log(val.isPassed, "val");
            return (
              <div key={i}>
                <p>{val.id}</p>
                <p>{val.students_code}</p>
                <p>{String(val.isPassed)}</p>
              </div>
            );
          })
        : ""}
    </>
  );
}

export default Admin;
