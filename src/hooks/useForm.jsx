import { useState } from 'react';

export function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(index, event) {
    event && event.preventDefault();

    if (index < 0 || index >= steps.length) return;

    setCurrentStep(index);
  }

  const isLastStep = currentStep + 1 === steps.length;
  const isFirstStep = currentStep === 0;

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep,
    isFirstStep,
  };
}
