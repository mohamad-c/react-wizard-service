import "./App.css";
import CreateStepper from "./components/CreateStepper";
import FormValidationProvider from "./context/FormValidationContext";
import ReqProvider from "./context/ReqContext";
import StepperChildProvider from "./context/StepperContext";

function App() {
  return (
    <div className="App">
      <StepperChildProvider>
        <ReqProvider>
          <FormValidationProvider>
            <CreateStepper />
          </FormValidationProvider>
        </ReqProvider>
      </StepperChildProvider>
    </div>
  );
}

export default App;
