import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';
import {useSelector} from 'react-redux';
import Header from '../../components/molecules/Header';
import {getData} from '../../utils/asyncStorage';
import {Colors} from '../../utils/colors';
import Wizard1 from '../Wizard1';
import Wizard2 from '../Wizard2';
import Wizard3 from '../Wizard3';

const StepRegister = () => {
  const [statusFirstStep, setStatusFirstStep] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const loading = useSelector(state => state.loading);
  const numberStep = useSelector(state => state.numberStepActive);
  const stepCompleted = useSelector(state => state.stepCompleted);

  useEffect(() => {
    const get = () => {
      getData('@statusFirstStep').then(item => {
        setStatusFirstStep(!item);
      });
      getData('@activeStep').then(item => setActiveStep(item));
      getData('@isComplete').then(item => setIsComplete(item));
    };
    get();
  }, [loading, activeStep]);

  return (
    <View style={{flex: 1, backgroundColor: Colors.default}}>
      <View
        style={{
          flex: 1,
          borderRadius: 1000,
        }}>
        <Header title="Registration Form" subtitle="Bio and Region" />
        <ProgressSteps
          activeStep={numberStep}
          isComplete={stepCompleted}
          topOffset={20}
          activeStepNumColor="#fff">
          <ProgressStep
            removeBtnRow
            label="Bio and Region"
            errors={statusFirstStep}>
            <Wizard1 />
          </ProgressStep>
          <ProgressStep
            removeBtnRow
            label="Upload Image"
            errors={statusFirstStep}>
            <Wizard2 />
          </ProgressStep>
          <ProgressStep removeBtnRow label="Submit">
            <Wizard3 />
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};

export default StepRegister;

const styles = StyleSheet.create({});
