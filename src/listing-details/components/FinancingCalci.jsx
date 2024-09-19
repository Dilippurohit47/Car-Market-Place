import InputField from "@/add-listing/components/inputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const FinancingCalci = ({ carDetails }) => {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
const [monthlyPayment,setMonthlyPayment] = useState(0)
  const calculateMonthlyPayment = () => {
    const principle = carPrice - downPayment;
    const monthlyInterestRate = interestRate / 1200;

    const MonthlyPayment =
      (principle *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
      setMonthlyPayment(MonthlyPayment)
  };

  return (
    <div className="p-10 border rounded-xl shadow-md">
      <h2 className="font-bold text-2xl">Financial Calculator</h2>

      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label> Price $</label>
          <Input type="number" onChange={(e) => setCarPrice(e.target.value)} />
        </div>
        <div className="w-full">
          <label>Interest Rate </label>
          <Input
            type="number"
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label> Loan Term (Months)</label>
          <Input type="number" onChange={(e) => setLoanTerm(e.target.value)} />
        </div>
        <div className="w-full">
          <label>Down Payment </label>
          <Input
            type="number"
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
      </div>
      <h2 className="font-bold text-2xl mt-3">Your monthly payment is : ${monthlyPayment.toFixed(2)}</h2>
      <Button onClick={calculateMonthlyPayment} className="w-full mt-5">
        Calculate
      </Button>
    </div>
  );
};

export default FinancingCalci;
