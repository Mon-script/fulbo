import TablasEstantes from '../Component/estante/estante'
import "./Stockpag.css";
import { useState, useEffect } from "react";
import {Flex, message} from 'antd'
import ResponsiveCard from '../Component/cards/muestracard';


export const Stock = () => {
  return (
   <div style={{display: "Flex", flexWrap: "wrap"}}>
    <ResponsiveCard/>
    <ResponsiveCard/>
    <ResponsiveCard/>
    <ResponsiveCard/>
    <ResponsiveCard/>
    <ResponsiveCard/>
    <ResponsiveCard/>
   </div>
  )
};


