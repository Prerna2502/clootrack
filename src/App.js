import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions/barAction';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import UpdateModal from './components/UpdateModal';

function App() {
  const [showModal,setShowModal] = useState(false);
  const [data,setData] = useState(null);
  const dispatch = useDispatch();
  const {barchart,piechart} = useSelector(state=>state);
  useEffect(() => {
    dispatch(fetchData());
  },[]);
  const callModal = (id) => {
    let type = id.substring(0,3)
    if(barchart && type === "Bar"){
      const item = barchart.find((val)=>val.id === id);
      setData(item);
      setShowModal(true)
    }
    else if(piechart && type === "Pie"){
      const item = piechart.find((val)=>val.id === id);
      setData(item);
      setShowModal(true)
    }
  }
  console.log(barchart);
  return (
    <div className="App">
      <div>
      {barchart && barchart.map((val)=>{
       return <BarChart elements={val.elements} callModal={callModal} id={val.id}/>
     })}
     </div>
     <div>
     {piechart && piechart.map((val)=>{
       return <PieChart elements={val.elements} callModal={callModal} id={val.id}/>
     })}
     </div> 
     <UpdateModal showModal={showModal} setShowModal={setShowModal} data={data}/>
    </div>
  );
}

export default App;
