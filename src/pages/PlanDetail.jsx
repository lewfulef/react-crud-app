import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

export const PlanDetail = () => {
  const { sku } = useParams();
  const planSelected = data.plans.filter((plan) => plan.sku === sku);
  console.log(planSelected );
  return (
    <>
    <h1>{planSelected[0].name}</h1>
    <h1>{planSelected[0].price}</h1>
    <pl>{planSelected[0].description}</pl>
    </>
  );
};
