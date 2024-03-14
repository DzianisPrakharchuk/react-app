import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Main paige
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Next
      </Button >
      <Button
        isActive={active === "effect"}
        onClick={() => onChange("effect")}
      >
       Effect
      </Button >
    </section>
  );
}
