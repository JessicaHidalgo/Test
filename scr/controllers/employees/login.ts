import express, {Request, Response} from 'express';
import {employees} from '../../fakeData/employee.json';
import {Employee} from '../../models/employee';

export default (req:Request,res:Response)=>{
     const findid : Employee = req.body;
     const log = employees.findIndex( e=>e.email == findid.email);
     
     if(log < 0){
        return res.sendStatus(404);
    }
    //Esta es mi referencia de mi password real
    const realemployees = employees[log];
    if (realemployees.password!==findid.password){
     return res.sendStatus(401);
    }else{
    return res.status(200).json(realemployees);
    }
}
