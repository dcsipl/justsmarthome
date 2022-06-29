import React from 'react';
export default function Validation(values){
    let error={};
          
         if(!/\S+@\S+\.\S+/.test(values.gmail)){
            error.gmail="mail is invalid.."     
            }
            else if(/\S+@\S+\.\S+/.test(values.gmail)){
                error.gmail="Thank you for subscribing newsletter!"     
                }
    return error;
}