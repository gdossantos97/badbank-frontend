import React from 'react';
import Card from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import BankImage from './images/bank.png';



const Home =() => {
   
    return(
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text= "We have absouletly no security"
            body={(<img src={BankImage} className="img-fluid" alt="Responsive image"/>)}
        
        />
    );
}
export default Home