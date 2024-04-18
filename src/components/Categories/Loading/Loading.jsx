import "./Loading.css";
import { PropTypes } from "prop-types";

export default function Loading({ className }) {
  return (
    <div className="flex content-center w-full">
      <div className={"lds-ring " + (className || "")}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
};
