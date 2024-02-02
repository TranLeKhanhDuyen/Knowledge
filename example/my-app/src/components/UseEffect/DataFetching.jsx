import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);

  // useEffect sẽ chạy khi component được mount và mỗi khi userId thay đổi
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error("Unable to download data!");
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error) {
        setData(null);
        setError("Unable to download data!");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Gọi hàm fetchData khi userId thay đổi hoặc component được mount

    // Cleanup function (chỉ chạy khi component unmount hoặc userId thay đổi)
    return () => {
      console.log("Cleanup - component unmount or userId change");
    };
  }, [userId]);

  return (
    <div>
      <label>
        User ID:
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && (
          <div>
            <h2>{data.name}</h2>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataFetching;
