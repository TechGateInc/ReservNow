import Link from "next/link";
import styles from "./popup.module.css";

export default function Popup(props) {
  return props.trigger ? (
    <div className={styles["popup-modal"]}>
      <div className={styles["popup-modal-inner"]}>
        <button
          className={styles["close-btn"]}
          onClick={() => props.setTrigger(false)}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nLWWWUrEQBCGP0V9c7vOzAiCJidQRvQhXkWZ6OByDhVP4XIZdXTE9m0kkZKONDG9ZLGgoEkX9aXTf1UF/LYExMAlcAM8aJf1BRABi7SwNWAMvAO5x6fACbBaF7IPvAYA8pJPgGEIYB44bQDIDc+AFJhzgdpCcsNHNsiBfpuuQBmwV3Xxkw4hufY3YN0EjS2BX8Chlreq2Fd6LwFmlhyixt86sUlYIIUNSjAFbBj7ieNUP3UWO44ue1TAlF6bFjnybKOr2xZQlXBgefbhyHMmQbeeC/0ENm1SBfoeiPi1BD4GqMcG6wdAxO/RDbIpqBcIukN34TafrhcAu5LA847EoHxiiDqSd+zIs4UupqklIHG8tSrBvAWLbhNVQTOdoE0LGpnHXgaeAtRT15+BlbJ6hv8wJnZtUk07BB3hGeVpy5NlwLFvlBcmk/Gl4Z3shABMk18nUaPI0weQGFHXn4uvY1IDMk+kuqULFz+QspZnUowLvizfAleslC5wfMAAAAAASUVORK5CYII=" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
