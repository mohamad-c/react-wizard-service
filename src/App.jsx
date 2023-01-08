import "./App.css";
import CreateStepper from "./components/CreateStepper";
import ReqProvider from "./context/ReqContext";
import StepperChildProvider from "./context/StepperContext";

function App() {
  return (
    <div className="App">
      <StepperChildProvider>
        <ReqProvider>
          <CreateStepper />
        </ReqProvider>
      </StepperChildProvider>
    </div>
  );
}

export default App;
