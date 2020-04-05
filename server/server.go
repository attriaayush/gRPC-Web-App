package main

import (
	"context"
	"fmt"
	"log"
	"net"

	calcpb "github.com/attriaayush/grpc-calc/calcpb/protos"
	"google.golang.org/grpc"
)

type server struct{}

func (*server) Add(context context.Context, req *calcpb.AddRequest) (*calcpb.AddResponse, error) {
	fmt.Println("New Add request")

	num1 := req.GetNum1()
	num2 := req.GetNum2()

	sum := num1 + num2
	result := &calcpb.AddResponse{Result: sum}
	return result, nil
}

func main() {
	fmt.Println("Starting up the server")
	lis, err := net.Listen("tcp", "0.0.0.0:50551")

	if err != nil {
		log.Fatalf("Error while listening: %v", err)
	}

	s := grpc.NewServer()
	calcpb.RegisterCalculatorServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Error while serving: %v", err)
	}
}
