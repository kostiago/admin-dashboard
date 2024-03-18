import styles from "./buttons.module.css";
import PropTypes from "prop-types";

const Button = ({
  className,
  rounded,
  children,
  variant,
  icon: Icon,
  ...props
}) => (
  <button
    className={`${styles.btn} ${className} 
        ${variant === "primary" ? styles.primary : ""}
        ${variant === "secondary" ? styles.secondary : ""}
        ${variant === "success" ? styles.success : ""}
        ${variant === "danger" ? styles.danger : ""}
        ${variant === "warning" ? styles.warning : ""}
        ${variant === "info" ? styles.info : ""}
        ${variant === "light" ? styles.light : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "addUser" ? styles.addUser : ""}
        ${variant === "primary-outline" ? styles.primaryOutline : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${variant === "dark" ? styles.dark : ""}
        ${rounded ? styles.rounded : ""}`}
    {...props}
  >
    {Icon && <Icon style={{ verticalAlign: "middle", marginRight: "5px" }} />}
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "addUser",
    "primaryoutline",
    "secondaryOutline",
    "sucessOutline",
    "dangerOutline",
    "warningOutline",
    "infoOutline",
    "lightOutline",
    "darkOutline",
  ]),
};

export default Button;
