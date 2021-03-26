import React from "react";
import ReactDOM from "react-dom";
const NavBar = React.lazy(() => import("navbar/NavBar"));

function App() {
  return (
    <React.Suspense fallback="Loading...">
      <NavBar />
    </React.Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
