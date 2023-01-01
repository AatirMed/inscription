import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { AddPay } from "../store";

const EventAdd = () => {
    const store = useSelector(res => res.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
const {code} = useParams();
    const[ValueChange,setValueChange]=useState({
        Name: '',
        Population: 0,
        Capital: '',
        IndepYear: 0,
        img: ''
    },)

    const HandChangeInput = (event)=>{
        const {name,value}=event.target;
        setValueChange({...ValueChange,[name]:value})
    }
    
    
    // console.log(ValueChange)
    return(
        <div>
       <span>Name : </span> <input type='text' placeholder="Name" name='Name' onChange={HandChangeInput}/><br/><br/>
       <span>Population :</span> <input type='number' placeholder="Population" name='Population' onChange={HandChangeInput}/><br/><br/>
       <span>Capital : </span><input type='text' placeholder="Capital" name='Capital' onChange={HandChangeInput}/><br/><br/>
       <span>IndepYear : </span><input type='number' placeholder="IndepYear" name='IndepYear' onChange={HandChangeInput}/><br/><br/>
       <span>img : </span><input type='text' placeholder="img" name='img' onChange={HandChangeInput}/><br/><br/>
       <button onClick={()=>{
        const x =[...store.map(ele=>ele.code===parseInt(code)?{...ele,pays:[...ele.pays,{...ValueChange}]}:{...ele})]
        console.log(x)
        dispatch(AddPay([...x]))
        navigate('/Q5');

       }}>Add</button> <br/><br/>
       </div>
    )
}

export default EventAdd;
