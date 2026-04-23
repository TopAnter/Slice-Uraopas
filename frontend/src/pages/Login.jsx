import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login() {
  //valitse näkyykö kirjautuminen vai käyttäjän luonti
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  //saa API:n urlin
  const API = import.meta.env.VITE_API_URL;

  //formin usestate
  const [form, setForm] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    field: ""
  });

  //formin muuttuessa tallennetaan uudet arvot
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //formin lähettäminen
  const submit = async () => {
    const url = isRegister
      ? `${API}/api/auth/register`
      : `${API}/api/auth/login`;

    try {
      const res = await axios.post(url, form);

      // Tallennetaan käyttäjä (yksinkertainen versio)
      localStorage.setItem("user", JSON.stringify({
        username: form.username,
        field: form.field,
        points: 0
      }));

      navigate("/menu");
    } catch (err) {
      alert(err.response?.data?.error || "Virhe");
    }
  };

  return (
  <div className="login-container">
    <h1>{isRegister ? "Luo käyttäjä" : "Kirjaudu"}</h1>

    <input name="username" placeholder="Käyttäjänimi" onChange={handleChange} />
    <input name="password" type="password" placeholder="Salasana" onChange={handleChange} />

    {isRegister && (
      <>
        <input name="firstName" placeholder="Etunimi" onChange={handleChange} />
        <input name="lastName" placeholder="Sukunimi" onChange={handleChange} />
        <input name="age" placeholder="Ikä" onChange={handleChange} />
        <input name="field" placeholder="Ala" onChange={handleChange} />
      </>
    )}

    <button onClick={submit}>
      {isRegister ? "Rekisteröidy" : "Kirjaudu"}
    </button>

    <p onClick={() => setIsRegister(!isRegister)}>
      {isRegister ? "Onko jo käyttäjä?" : "Luo uusi käyttäjä"}
    </p>
  </div>
);
}