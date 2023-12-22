import React, { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setUserData(result.data); // Set the user data
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authenticates</h2>
      {userData && <p>Welcome, {userData.username}!</p>}
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
