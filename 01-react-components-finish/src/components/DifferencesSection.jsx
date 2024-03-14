import Button from "./Button/Button"; 
import { useState } from "react"; 
import { differences } from "../data"; 

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
      setContentType(type);
    }
  
  return (
    <section>
      <h3>Our Differences</h3>
      <Button style={{marginBottom: "2rem"}}
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Void
      </Button>
      <Button style={{marginBottom: "2rem"}}
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Conception
      </Button>
      <Button
        isActive={contentType === "program"}
        onClick={() => handleClick("program")}
      >
        Availability
      </Button>
      {!contentType && <p>Click on button</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}