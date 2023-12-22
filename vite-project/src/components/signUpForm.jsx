import React from "react";

export default function SignUpForm({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  //   const [token, setToken] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sing Up!</h2>
      <h2>Sing Up!</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          UserName:{" "}
          <input
            type="password"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
