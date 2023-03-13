import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';

function Form() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const HandleformSubmit = (event) => {
      (function validateBirthdate() {
        // get current date
        let currentDate = new Date();
        // get input date
        let input = document.getElementById("birthday").value;
        let birthdate = new Date(input);
        // return if age is over 18
        let diff = new Date(currentDate - birthdate)
        let age = Math.abs(diff.getUTCFullYear() - 1970);
        
        if(age < 18){
          alert("You are below 18!")
        }
      })();
        event.preventDefault();
        
        const dataSubmit = {name, dob, email, mobile};
        fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataSubmit)
        }).then(navigate('/final'));
      }

      return(
        <div className="App">
      <header className="App-header">
        <h1> Hello, please fill the form to proceed!! </h1>
        <form action='' method='POST' className='formData' onSubmit={HandleformSubmit}>
          <input type="text" placeholder='Enter your name' name='name' value={name} onChange={(event) => setName(event.target.value)} required></input>
          <input type="date" id='birthday' name="dob" max='01-04-2005' value={dob} onChange={(event) => setDob(event.target.value)} required></input>
          <input type="email" placeholder='Enter your Email' name="email" value={email} onChange={(event) => setEmail(event.target.value)} required></input>
          <input type="tel" pattern="[6-9]{1}[0-9]{9}"  placeholder='Enter your Number' name="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} required></input>
          <input type="submit"></input>
        </form>
        </header>
    </div>
    )
}

export default Form;