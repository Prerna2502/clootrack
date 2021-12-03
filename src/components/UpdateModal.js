import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateBarDataById } from "../actions/barAction";
import { updatePieDataById } from "../actions/pieAction";

export default function UpdateModal({showModal,setShowModal,data}) {
    const [elements, setElements] = useState([]);
    const dispatch = useDispatch();
    const {barchart,piechart} = useSelector(state=>state);
    useEffect(()=>{
        if(data && data.elements){
            setElements(data.elements);
        }
    },[data])
    function handleOpenModal () {
      setShowModal(true);
    }
    
    function handleCloseModal () {
      setShowModal(false);
    }
    
    function saveModal () {
        console.log(data.type);
        if(data.type === "Bar"){
            const newData = barchart.map((val)=>{
                if(val.id===data.id){
                    return {
                        ...val,
                        elements
                    }
                }
                return{
                    ...val
                }
            });
            dispatch(updateBarDataById(newData));
            setShowModal(false);
        }
        else if(data.type === "Pie"){
            const newData = piechart.map((val)=>{
                if(val.id===data.id){
                    return {
                        ...val,
                        elements
                    }
                }
                return{
                    ...val
                }
            });
            dispatch(updatePieDataById(newData));
            setShowModal(false);
        }
    }
    
    function handleChange (e,i) {
        console.log(e);
        const value = e.target.value;
        const temp = elements.map((val,idx)=>{
            if(i===idx){
                return parseInt(value);
            }
            return val
        })
        console.log(temp);
        setElements(temp)
    }

      return (
        <div>
          <ReactModal 
             isOpen={showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={handleCloseModal}>Close Modal</button>
            {elements.map((val,i)=>{
                return <input type="number" value={val} onChange={(e)=>handleChange(e,i)}/>
            })}
            <button onClick={saveModal}>Save Modal</button>
          </ReactModal>
        </div>
      );
  }