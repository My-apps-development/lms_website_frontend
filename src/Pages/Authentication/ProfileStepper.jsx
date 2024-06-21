import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstPage from './Pages/FirstPage';
import SecondPage from "./Pages/SecondPage"
import ThirdPage from './Pages/ThirdPage';
import { useNavigate } from 'react-router-dom';
import { infoMessage } from '../../Utils/NotificationManager';

const steps = ['Login Page', 'Complete Profile', 'Language Selection'];

export default function HorizontalLinearStepper() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [companyList, setCompanyList] = React.useState([])

  const [token, setToken] = React.useState("")

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (activeStep === steps.length - 1) {

      if (user?.approve == false) {
        navigate("/login")
        return infoMessage("Approval is pending, wait until our team get back to you...!")
      } else if (user?.status?.toLowerCase() === "inactive") {
        navigate("/login")
        return infoMessage("Your Account is Inactive,Connect with Our team to get back your profile")
      } else {
        navigate("/login")
        return infoMessage("Approval is pending, wait until our team get back to you...!")
      }

    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    console.log("clicked");
    if (!user?.status === "active" && !user?.approve) {
      return navigate("/login")
    }

  };

  const handleCompanyListChange = (list) => {
    setCompanyList(list)
  }

  // console.log(companyList);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper style={{color:"pink"}} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography style={{color:"pink"}} variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel style={{color:"pink"}} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }} className='h-[600px] text-center flex justify-center items-center font-semibold text-xl'>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} style={{ color: "#B32073" }}>Login</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <FirstPage token={setToken} onNext={handleNext} onCompanyListChange={handleCompanyListChange} />}
          {activeStep === 1 && <SecondPage token={token} onNext={handleNext} companyList={companyList} />}
          {activeStep === 2 && <ThirdPage token={token} />}
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={{ color: "#B32073" }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }} style={{ color: "#B32073" }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext} style={{ color: "#B32073" }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
