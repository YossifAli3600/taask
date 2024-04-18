import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { Fragment } from "react";
import Loading from "../Categories/Loading/Loading";

export default function Button({
  variant,
  children,
  to,
  className,
  onClick,
  type,
  isLoading,
  small,
  target,
  rel,
  title,
}) {
  return (
    <ButtonComponent
      variant={variant}
      className={className}
      onClick={onClick}
      type={type}
      isLoading={isLoading}
      small={small}
      title={title}
    >
      {children}
    </ButtonComponent>
  );
}



function ButtonComponent({
  variant,
  children,
  className,
  onClick,
  type,
  isLoading,
  small,
  title,
}) {
  let content = (
    <button
      className={`${styles.button} ${styles["button__" + (variant || "primary")]
        } ${className || ""} ${small ? styles.button__small : ""}
    `}
      type={type || "button"}
      onClick={onClick}
    >
      {!isLoading || (isLoading && !small) ? children : ''}{" "}
      {isLoading ? (
        <Loading


          className={`loading--small ${variant == "secondary" ? "" : "light"}`}
        />
      ) : (
        ""
      )}
    </button>
  );

  return (
    <Fragment>
      {title ? (
        <OverlayTrigger
          placement={"top"}
          overlay={
            <Tooltip id="tooltip" style={{ position: "fixed" }}>
              {title}
            </Tooltip>
          }
        >
          {content}
        </OverlayTrigger>
      ) : (
        content
      )}
    </Fragment>
  );
}

