const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calc.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const CalcPackage = grpcObject.CalcPackage;


const client = new CalcPackage.Calc("localhost:40000", 
grpc.credentials.createInsecure())

console.log(num1)



var result;
var NumberFieldOne = document.getElementById("num1");
var NumberFieldTwo = document.getElementById("num2");
var SignField = document.getElementById("sign");

document.getElementById("calculate").onclick = function func(){

    switch (SignField.value) {
        case '+':
            result = client.Plus({
                "num1": +NumberFieldOne.value,
                "num2": +NumberFieldTwo.value
            }, (err, response) => {
            
                console.log("Recieved from server " + JSON.stringify(response))
            });
            break;
        case '-':
            result = client.Minus({
                "num1": +NumberFieldOne.value,
                "num2": +NumberFieldTwo.value
            }, (err, response) => {
            
                console.log("Recieved from server " + JSON.stringify(response))
            });
            break;
        case '*':
            result = client.Mulpitly({
                "num1": +NumberFieldOne.value,
                "num2": +NumberFieldTwo.value
            }, (err, response) => {
            
                console.log("Recieved from server " + JSON.stringify(response))
            });
            break;
        case '/':
            result = client.Divide({
                "num1": +NumberFieldOne.value,
                "num2": +NumberFieldTwo.value
            }, (err, response) => {
            
                console.log("Recieved from server " + JSON.stringify(response))
            });
            break;
        }

    document.getElementById("result").innerHTML = result;
}
