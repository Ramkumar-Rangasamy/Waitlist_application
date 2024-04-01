import React ,{useState}from 'react'

import './Sign.css';

import axios from 'axios'

import apply from './gif.gif';

export function Sign(){

    //usestate for storing the user mail for the waiting list
const [formData,setFormData]=useState({
    usermail:""
})

//setting auth 
const [auth,setAuth] = useState(false)

//use states for storing and displaying the users placed order
const [position,setPosition]=useState( );
const [referalLink,setReferalLink]=useState("")
const [mailId, setMailId] = useState("")
//form onchange function
const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}
//sumit function for the placing the order
const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:400/signup',formData)
        if(response.data.status==="success"){ 
            setAuth(true);
            setMailId(response.data.email);
            setPosition(response.data.listposition);
            setReferalLink(response.data.refreral)
                   }else{
            alert('failed to place booking please try again after')         

        }
    }catch(error){
console.log(error)
    }    
}

//function for the back button after successfull booking
const handleBackButton= (e)=>{
e.preventDefault();
try{
    setAuth(false);
}catch(error){
console.log(error);
}
}


//function for share button
const handleShare = async (e)=>{
e.preventDefault();
try{
    const updatedPosition  = position -1;
    const response = await axios.put('http://localhost:400/updateWaitingListPosition',{
        usermail:formData.usermail,
        newposition:updatedPosition
    })
    if(response.data.status==="success"){
        setPosition(updatedPosition);
    }else{
        alert("failed to update the position")
    }

}catch(error){
    console.log(error);
}
}
    return(
        <>
        { 
        auth ? 
        <div className='container text-center alert alert-danger mt-5'>
        <h1>congrats you have successfully placed your booking</h1>
        <h1>{mailId}</h1>
        <pre> <h2> you are in <mark>{position} th</mark>position</h2></pre>
        <h3> refer a friend and move ahead : <mark>{referalLink}</mark></h3>
        <button onClick={handleShare} >share</button>
        <button onClick={handleBackButton} className='bg-danger mx-5'>back</button>
        </div>
        : 
        <div  className="main_div text-center p-5">
         <h2 className="pl-5">Joining in list Page</h2>
           <form>
             <label>Email:</label>
             <input type="email" className="email col-8 col-lg-4 p-2 mb-3" placeholder='Enter the email' name="usermail" value={formData.usermail} onChange={handleChange}/>
             <button type="button" className="btn btn-success ml-5 mb-1 pl-4 pr-4"  onClick={handleSubmit}>Sign_up</button>
           </form>
           <img src={apply} className="col-8 col-sm-6 col-md-4 col-lg-2 p-5" />Loading Posistion
        </div>
                 
 }
        </>
    )
}






{/* <div  className="main_div text-center p-5">
         <h2 className="pl-5">Joining in list Page</h2>
           <form>
             <label>Email:</label>
             <input type="email" className="email col-8 col-lg-4 p-2 mb-3" placeholder='Enter the email '/>
             <button type="button" className="btn btn-success ml-5 mb-1 pl-4 pr-4">Sign_up</button>
           </form>
           <img src={apply} className="col-8 col-sm-6 col-md-4 col-lg-2 p-5" />Loading Posistion
        </div> */}