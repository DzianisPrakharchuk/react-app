import React from "react";
export default function IntroSection() {
  return React.createElement(
    "section",
    null,
    [
      React.createElement("h1", { className: "centered", key: 1 }, "Main Infomation"),
      React.createElement(
        "h3",
        { className: "centered", style: { color: "#746" }, key: 2 },
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem numquam aliquam tempore tenetur in veniam,facere"
      )
    ]
    // return (
    // <section>
    //     <h1 className ="centered">Introduction</h1>
    //     <h3 className ="centered" style={{ color: '#746'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem numquam aliquam tempore tenetur in veniam,
    //      facere corrupti hic sed beatae ex nihil quia. Dicta suscipit adipisci eum minima ducimus?</h3>
    // </section>
  );
}
