import styled from 'styled-components';
import StepFinishedIcon from '../../assets/step-finished.svg';

const TopFormBar = styled.div`
  padding: 22px 32px;
  background: #f4f4f4;
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const FormStepLabel = styled.div`
  background: url(${StepFinishedIcon}) no-repeat center left;
  padding-left: 32px;
`;

export default function CustomForm({ step, stepTitle }) {
  return (
    <>
      <TopFormBar>
        <FormStepLabel key={stepTitle}>{stepTitle}</FormStepLabel>
      </TopFormBar>
    </>
  );
}
