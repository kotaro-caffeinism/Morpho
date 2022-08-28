import React, { useState, useEffect } from "react";

function Admin() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/students-result")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h2>データ一覧</h2>
      {data
        ? data.map((val, i) => {
            return (
              <div key={i}>
                <p>{val.id}</p>
                <p>{val.students_code}</p>
                <p>{String(val.isPassed)}</p>
              </div>
            );
          })
        : ""}
      <h2>コメントを残す</h2>
      <form action="" method="POST">
        <label for="id">id</label>
        <input type="text" name="id" required />
        <label for="comment">コメント</label>
        <input type="text" name="comment" required />
        <input type="submit" value="Submit Comment" />
      </form>
    </>
  );
}

export default Admin;
