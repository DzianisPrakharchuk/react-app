import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  // let classes = 'button'
  // if (isActive) classes += ' active'
  return (
    <button
    {...props}
      className={
        isActive ? `${classes.button} ${classes.ative}` : classes.button
      }
    >
      {children}
    </button>
  );
}
