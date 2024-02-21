import clsx from "clsx";

interface IButton {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "danger" | "success" | "warning";
  variation?: "solid" | "outline" | "text";
}

export function Button({
  children,
  color = "primary",
  variation = "solid",
}: IButton) {
  return (
    <button
      className={clsx("rounded-md px-4 py-2", {
        "bg-primary text-white": color === "primary" && variation === "solid",
        "bg-secondary text-white":
          color === "secondary" && variation === "solid",
        "bg-warning text-white": color === "warning" && variation === "solid",
        "bg-success text-white": color === "success" && variation === "solid",
        "bg-danger text-white": color === "danger" && variation === "solid",
        "border-2 border-primary":
          color === "primary" && variation === "outline",
        "border-warning border-2":
          color === "warning" && variation === "outline",
        "border-success border-2":
          color === "success" && variation === "outline",
        "border-secondary border-2":
          color === "secondary" && variation === "outline",
        "border-danger border-2": color === "danger" && variation === "outline",
      })}
    >
      {children}
    </button>
  );
}
