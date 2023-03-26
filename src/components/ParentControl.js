import React, { useState,useCallback } from 'react'
import Title from './Title';
import Button from './Button';
import Count from './Count';

function ParentControl() {
    const [ageCount,setAgeCount] = useState(10);
    const [salaryCount,setSalaryCount] = useState(30000);

    const agehandler = useCallback(()=>{
        setAgeCount(ageCount+1);
    },[ageCount])
//use callabck return catched function 
    const salhandler = useCallback( ()=>{
        setSalaryCount(salaryCount+20000);
    },[salaryCount])

  return (
    <div>
        <Title />
        <Count text={'Age'} count = {ageCount}  />
        <Button handleclick={agehandler}>
            IncreaseAge
        </Button>
        <Count text={'Salary'} count = {salaryCount}  />
        <Button handleclick={salhandler}>
            IncreaseSalary
        </Button>
    </div>
  )
}

export default ParentControl