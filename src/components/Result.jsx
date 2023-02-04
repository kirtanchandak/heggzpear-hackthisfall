import { getQuery } from "../Services/Queries";
import { useEffect, useState } from "react";

function Result() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = getQuery();
    getData.then(
      function (response) {
        setData(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return data ? (
    <div>
      <h1>No. of documents {data.documents.length}</h1>

      {Object.keys(data.documents).map((item, index) => (
        <h1 key={index}>{data.documents[index].desciption}</h1>
      ))}
    </div>
  ) : (
    <div>Fetching</div>
  );
}

export default Result;
