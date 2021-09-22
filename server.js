const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("calc.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const CalcPackage = grpcObject.CalcPackage;

const server = new grpc.server();
server.bind("0.0.0.0:40000", grpc.ServerCredentials.createInsecure());

server.addService(CalcPackage.Calc.service, 
    {
        "Plus": Plus,
        "Minus": Minus,
        "Multiply": Multiply,
        "Divide": Divide
    });

server.start();

function Plus(call, callback) {
   result = call.request.num1 + call.request.num2;
   callback(null, result);
}

function Minus(call, callback) {

}

function Multiply(call, callback) {

}

function Divide(call, callback) {

}