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
import {Pie} from 'react-chartjs-2';
  
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

const createPieData = (elements) =>{
    console.log(elements);
    return {
  labels: elements,
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: elements
    }
  ]
}}

export default function PieChart({elements,id,callModal}) {
    const data = createPieData(elements);
    return (
      <div onClick={()=>callModal(id)} style={{width:'50vw', margin:'auto', marginTop:'100px', marginBottom:'100px'}}>
        <Pie
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