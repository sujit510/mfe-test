import * as React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div style={{ backgroundColor: "yellow", height: "50px", width: "100%" }} />
  );
}

const renderFn = (rootEle) => {
  ReactDOM.render(<App />, rootEle);
};

// window.renderFn = renderFn;

if (!window.containerContext) {
  renderFn(document.querySelector("#root"));
}

export { renderFn };
