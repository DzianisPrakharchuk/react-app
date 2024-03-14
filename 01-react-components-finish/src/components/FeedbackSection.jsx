import Button from "./Button/Button";
import { useState, useRef } from "react";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false)
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  console.log(input)
  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help"
  });
  //   const [name, setName] = useState("");
  //   const [hasError, setHasError] = useState(true)
  //   const [reason, setReason] = useState("help")

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0
    }));
  }

  function toggleError() {
    // setHasError((prev) => !prev)
  }

  return (
    <section style={{ marginBottom: "2rem" }}>
      <h3>Feedback</h3>
      <Button onClick={toggleError}>Toggle error</Button>
      <form style={{ marginTop: "2rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null
          }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Your reason</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggest</option>
        </select>
        {/* <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre> */}
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Send
        </Button>

        <hr />
        <StateVsRef />
      </form>
    </section>
  );
}
