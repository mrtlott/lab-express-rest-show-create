const express = require('express')
const logs = require(`../model/logs`)
const transactionRouter = express.Router()



// localhost:4001/budget/     4001 all end points 
transactionRouter.get(`/`, (req,res) =>{ 
    res.json(logs)
})


//gets single item
transactionRouter.get(`/:arrayIndex`, (req,res) =>{
    const{arrayIndex}=req.params
    res.json(logs[arrayIndex])
})

//post
transactionRouter.post('/',(req,res) =>{
    req.body.id = logs[logs.length -1].id + 1

    logs.push(req.body)
    
    res.json(logs[logs.length -1])
})

//show
transactionRouter.get('/:id', (req,res) =>{
    const { id } = req.params
    if(logs[id]){
        res.json(logs[id])

    }else{
        res.status(404).json({ error: "page not found" });

    }
})

module.exports = transactionRouter;