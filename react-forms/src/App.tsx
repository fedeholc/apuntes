import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <MyForm></MyForm>
    </>
  );
}

export function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "unemployed",
    favColor: "",
  });

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();  
    alert(JSON.stringify(formData, null, 2));
    console.log(formData);
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {

    const { name, value, type } = event.target;
    let checked: boolean;

    if (event.target instanceof HTMLInputElement) {
      checked = event.target.checked;
    }

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main>
      <h1>Form</h1>
      <form id="myForm">
        <label htmlFor="input-name">Name</label>
        <input
          id="input-name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.firstName}
        />
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <label htmlFor="input-comments">Comments</label>
        <textarea
          id="input-comments"
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
        />
        <label htmlFor="is-friendly">
          <input
            type="checkbox"
            id="is-friendly"
            checked={formData.isFriendly}
            onChange={handleChange}
            name="isFriendly"
          />
          Are you friendly?
        </label>
        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="input-unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="input-unemployed">Unemployed</label>
          <input
            type="radio"
            id="input-part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="input-part-time">Part-time</label>
          <input
            type="radio"
            id="input-full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="input-full-time">Full-time</label>
        </fieldset>
        <label htmlFor="fav-color">What is your favorite color?</label>
        <select
          id="fav-color"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
      <div>
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </main>
  );
}
