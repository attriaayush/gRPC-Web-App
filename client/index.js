const { AddRequest, AddResponse } = require("./protos/calc_pb")
const { CalculatorClient } = require("./protos/calc_grpc_web_pb")
var client = new CalculatorClient('http://localhost:8080');

var request = new AddRequest()

request.setNum1(2)
request.setNum2(3)

client.add(request, {}, (err, response) => {
    console.log("Result of Add: ", response.getResult())
});