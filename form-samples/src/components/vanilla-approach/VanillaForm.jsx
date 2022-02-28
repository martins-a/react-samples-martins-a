import React, { useState } from "react";
import "./VanillaForm.css";

export default function VanillaForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [bio, setBio] = useState("");
  const [job, setJob] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("name", name);
    console.log("surname", surname);
    console.log("bio", bio);
    console.log("job", job);
  };

  return (
    <form className="vanilla-form" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Surname</label>
        <input
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          name="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Job</label>
        <select name="job" value={job} onChange={(e) => setJob(e.target.value)}>
          <option value={0}>Select</option>
          <option value={1}>Developer</option>
          <option value={2}>UX Designer</option>
          <option value={3}>QA tester</option>
          <option value={4}>Project Manager</option>
        </select>
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
