import React from "react";
import { useState } from "react";

function Usestatehook() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <h2>Register</h2>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Name"
          autoComplete="off"
          value={formData.username}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="email"
          placeholder="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="password"
          placeholder="password"
          autoComplete="off"
          value={formData.password}
          onChange={handleInput}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          name="confirmPassword"
          placeholder="confirm-password"
          autoComplete="off"
          value={formData.confirmPassword}
          onChange={handleInput}
        />
      </div>

      <p>
        {`My name is ${formData.username} and my email is ${formData.email}`}
      </p>
    </>
  );
}

export default Usestatehook;
