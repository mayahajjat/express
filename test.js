const express = require('express')
var  app = express();
//var json= ('json')

app.get('/', function(req,res)
{
    res.send("start server")
})
app.get('/user',function(req,res)
{
    res.send("ward")
})

app.get('/fact/:num', function(req,res)
{
    //req.body -> payload for the request
    //req.params -> part from url 
    // console.log(req.params.num)
    // var myfact =fact(req.params.num)
    res.json("fib is" + req.params.num*2)
})

app.get('/multiply/:num', function(req, res) {
    const num = parseInt(req.params.num); // Parse the parameter to ensure it's a number
    const multiplicationTable = {};
    for (let i = 1; i <= 10; i++) {
        multiplicationTable[i] = num * i;
    }
    res.json(multiplicationTable); // Send JSON response with the multiplication table
})
app.get('/fib/:num', function(req, res) {
    const num = parseInt(req.params.num); // Parse the parameter to ensure it's a number

    let fibPrev = 0; // Initialize the Fibonacci number at index 0
    let fibCurr = 1; // Initialize the Fibonacci number at index 1

    // Calculate the Fibonacci number at the specified index
    for (let i = 2; i <= num; i++) {
        const fibNext = fibPrev + fibCurr; // Calculate the next Fibonacci number
        fibPrev = fibCurr; // Update fibPrev to current Fibonacci number
        fibCurr = fibNext; // Update fibCurr to next Fibonacci number
    }

    res.json({ fibNum: fibCurr }); // Send JSON response with the Fibonacci number at the specified index
});



app.get('/cumulativesum/:num', function(req, res) {
    const num = parseInt(req.params.num); // Parse the parameter to ensure it's a number
    let cumulativeSum = 0;
    for (let i = 1; i <= num; i++) {
        cumulativeSum += i; // Add current number to cumulative sum
    }
    res.json({ cumulativeSum: cumulativeSum }); // Send JSON response with the cumulative sum
});

app.get('/string/:ward', function(req, res) {
    const word = req.params.ward; // Get the word from the request
    const reversedWord = word.split('').reverse().join(''); // Reverse the word
    const same = word === reversedWord; // Check if the word is equal to its reverse
    res.json({ same: same }); // Send JSON response with the result
});

var server= app.listen(7000, function()
{
    var host = server.address().address // local one  
    var port = server.address().port
})