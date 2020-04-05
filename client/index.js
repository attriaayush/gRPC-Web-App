const { AddRequest, AddResponse } = require("./protos/calc_pb");
const { CalculatorClient } = require("./protos/calc_grpc_web_pb");

const client = new CalculatorClient("http://localhost:50551");

const request = new AddRequest();

request.setNum1(2);
request.setNum2(3);

client.add(request, {}, (err, response) => {
    console.log("Result of Add: ", response.getResult())
});