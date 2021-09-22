const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calc.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const CalcPackage = grpcObject.CalcPackage;


const client = new CalcPackage.Calc("localhost:40000", 
grpc.credentials.createInsecure())

client.Plus({
    "num1": 1,
    "num2": 1,
    "result": 000
}, (err, response) => {

    console.log("Recieved from server " + JSON.stringify(response))
})

