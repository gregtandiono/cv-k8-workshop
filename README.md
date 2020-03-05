# ClearView K8 Workshop

You will be orchestrating a number of services in a microservice fashion! By adopting the api gateway pattern: https://microservices.io/patterns/apigateway.html

**Acceptance Criteria**:
- I should be able to build gateway, member, and product container image using docker compose
- I should be able to deploy all 3 application to a kubernetes cluster
- I should be able to query the member and product services through the gateway service in a kubernetes cluster

Bonus points for:
- Using configmap to manage your environment variables
- Utilizing multiple deployment objects