import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBarDataById } from "../actions/barAction";
import { updatePieDataById } from "../actions/pieAction";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            <Modal show={showModal} onHide={()=>setShowModal(false)} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Click Save after changing the values:
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {elements.map((val,i)=>{
                    return <div><Row><input type="number" value={val} onChange={(e)=>handleChange(e,i)}/></Row><br/></div>
                    })}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={saveModal}>Save</Button>
                <Button onClick={handleCloseModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
      );
  }