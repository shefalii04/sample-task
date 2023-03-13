import React,{useState, useEffect} from 'react'; 
import './Final.css'
 
function Final() { 
 const [data,setData]=useState() 
 useEffect(()=>{ 
 var request = new XMLHttpRequest(); 
 request.onreadystatechange = function() { 
 if (request.readyState === 4 && request.status === 200) { 
 const response=JSON.parse(request.response) 
 setData(response) 
 } 
 }; 
 request.open('GET', 'http://localhost:8080/data', true); 
 request.send(); 
 },[]) 
 
 useEffect(()=>{ 
 console.log(data) 
 },[data]) 
 return ( 
 <div className="datas"> 
    
    <table className='table'>
    <h1>This is the latest data!</h1>
        <tr>
            <td>{data && data.map(d=><p>{d.name}</p>)}</td>
            <td>{data && data.map(d=><p>{d.dob}</p>)}</td>
            <td>{data && data.map(d=><p>{d.email}</p>)}</td>
            <td>{data && data.map(d=><p>{d.mobile}</p>)}</td>
        </tr>
    </table>
 </div> 
 ); 
} 
 
export default Final; 
