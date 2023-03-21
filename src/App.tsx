import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundaryComp from "components/error-boundary.comp";
import AppRoutes from "App.routes";

function App() {
  return (
    <ErrorBoundaryComp>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundaryComp>
  );
}

export default App;
