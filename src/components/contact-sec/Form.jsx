import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Hero-sec/Hero";
import "./Form.css";

const FORMSPARK_ACTION_URL = "https://submit-form.com/pqiFZpgM";

const MainForm = styled.form`
  color: white;
`;

const FormInp = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(198, 201, 216, 0.75);
  background-color: transparent;
  padding: 1.5em;
  margin-top: 4vh;
  font-family: inherit;
`;

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const onSSubmit = async (e) => {
    e.preventDefault();
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    alert("Form submitted");
  };
  return (
    <MainForm onSubmit={onSSubmit}>
      <input type="hidden" name="_append" value="false" />
      <input type="hidden" name="_redirect" value="https://arpitsachan.com" />
      <div className="mb-3">
        <FormInp
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <FormInp
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <FormInp
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Your Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          class="form-control form-area"
          id="exampleFormControlTextarea4"
          rows="3"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <br />
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </MainForm>
  );
};
