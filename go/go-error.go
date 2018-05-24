package main

import (
	"context"
	"fmt"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func handler(ctx context.Context, request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	ts := time.Now().Nanosecond()
	if ts%2 == 0 {
		return &events.APIGatewayProxyResponse{StatusCode: 200, Body: "success"}, nil
	}
	return nil, fmt.Errorf("function error")
}

func main() {
	// Make the handler available for Remote Procedure Call by AWS Lambda
	lambda.Start(handler)
}
