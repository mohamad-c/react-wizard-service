import './App.css'
import CreateStepper from './components/CreateStepper'
import StepperChildProvider from './context/StepperContext'

function App() {
  return (
    <div className="App">
      <StepperChildProvider>
        <CreateStepper />
      </StepperChildProvider>
    </div>
  )
}

export default App
