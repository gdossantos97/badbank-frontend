import React from "react";
import Swal from 'sweetalert2';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';




const Deposit= () =>{
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] =  React.useState(0);
    const [button, setButton]     = React.useState(true);


    const f = new Intl.NumberFormat( 
            {
                style: 'currency',
                currency: 'USD',
            });
    const userBalance = f.format(balance);



    function DepositConfirmation() {


        const f = new Intl.NumberFormat(
           
                {
                    style: 'currency',
                    currency: 'USD',
                minimunFractionDigits: 1,
                });
        const currency = f.format(deposit);

            Swal.fire({
            title: 'Deposit',
            text: "Confirm deposit amount: " + currency,
            showCancelButton: true,
            cancelButtonText: 'Change',
            showDenyButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
        }).then((result) => {


            if (result.isConfirmed) {
                const NewBalance = Number(balance); 
                setBalance(NewBalance + deposit);
                setDeposit('');
                setButton(true);

                Swal.fire(
                    {   title: 'Deposit was Successful',
                    }
                );

            } else if (result.isDenied) {
            Swal.fire('Cancel Transaction', '', 'info');
            setDeposit('');
            setButton(true);
            }
        });
    };

    
    function HandleDeposit (e){
        if(e.currentTarget.value <= 0){
            setDeposit('');
            setButton(true)
        } else {
            setDeposit(Number(e.currentTarget.value));
            setButton(false) 
        };
    };


return(
        <Card
        bgcolor="success"
        header="Deposit"
        

        body={(  
            <>
            <h3>Balance : {userBalance}</h3>
            {/* <h1>{JSON.stringify(ctx)}</h1> */}

            <div>Deposit Amount</div>

            <input type="number" className="form-control" id="deposit" placeholder="$ Depoosit Amount" value={deposit}  onChange={HandleDeposit}/> 
            <br/>

            <button type="submit" className="btn btn-light" onClick={DepositConfirmation} disabled={button} >Complete Deposit</button>
            </>
            )}
        />
    );
}


export default Deposit




