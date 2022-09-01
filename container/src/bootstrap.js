import * as React from "react";
import ReactDOM from "react-dom";
import { renderFn } from "header/HeaderComponent";

function App() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    // window.renderFn(ref.current);
    renderFn(ref.current);
  }, []);
  return (
    <>
      <div ref={ref}></div>
      <h1>Container</h1>
    </>
  );
}

window.containerContext = true;

ReactDOM.render(<App />, document.querySelector("#root"));
