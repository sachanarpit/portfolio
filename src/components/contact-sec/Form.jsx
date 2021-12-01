import styled from "styled-components";
import { Button } from "../Hero-sec/Hero";
import "./Form.css";

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

const formTextArea = styled.textarea``;

export const ContactForm = () => {
  return (
    <MainForm>
      <div className="mb-3">
        <FormInp
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-3">
        <FormInp
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-3">
        <FormInp
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Your Subject"
        />
      </div>
      <div className="mb-3">
        <textarea
          class="form-control form-area"
          id="exampleFormControlTextarea4"
          rows="3"
          placeholder="Your Message"
        ></textarea>
      </div>
      <br />
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </MainForm>
  );
};
