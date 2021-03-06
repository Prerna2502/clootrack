import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    registerables
  } from 'chart.js'
  import { Bar } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ...registerables
  )

const createBarData = (elements) => {
    console.log(elements);
    return {
  labels: elements,
  datasets: [
    {
      label:"Bar Chart",
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: elements
    }
  ]
}}

export default function BarChart({elements,id,callModal}) {
    console.log(elements);
    const data = createBarData(elements);
    return (
      <div onClick={()=>callModal(id)} style={{width:'50vw', margin:'auto', marginTop:'100px', marginBottom:'100px'}}>
        <Bar
          data={data}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <button onClick={()=>callModal(id)}>Update Me</button>
      </div>
    );
}