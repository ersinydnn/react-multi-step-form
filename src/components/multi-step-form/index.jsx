import React, { useState } from "react";
import Sidebar from "../sidebar";
import { Steps } from "./steps";
import * as S from "./styled";

function MultiStepForm() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });
  const [activeStep, setActiveStep] = useState("step1");
  const ActiveStep = Steps[activeStep].component;

  const handleStepSubmit = (stepId, nextStepId, stepData) => {
    setFormData({
      ...formData,
      [stepId]: stepData,
    });
    setActiveStep(nextStepId);
  };

  const handleBack = () => {
    const currentNumber = Number(activeStep.slice(-1));
    setActiveStep(`step${currentNumber - 1}`);
  };

  return (
    <S.MultiStepForm>
      <Sidebar activeStep={activeStep} />
      <ActiveStep
        {...Steps[activeStep]}
        onStepSubmit={handleStepSubmit}
        formData={formData}
        handleBack={handleBack}
      />
    </S.MultiStepForm>
  );
}

export default MultiStepForm;
