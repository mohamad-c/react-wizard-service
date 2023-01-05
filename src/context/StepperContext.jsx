import { createContext, useState } from "react";

export const StepperContext = createContext();


const StepperChildProvider = ({children}) =>{
  const [active, setActive] = useState(0);

  const nextStep = () =>{
    setActive((current) => (current < 3 ? current + 1 : current));
  }

  const prevStep = () =>{
    setActive((current) => (current > 0 ? current - 1 : current));
  }

  return(
    <StepperContext.Provider value={{active, nextStep, prevStep}}>
      {children}
    </StepperContext.Provider>
  )
}

export default StepperChildProvider
