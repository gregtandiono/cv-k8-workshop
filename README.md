# ClearView K8 Workshop

Pre-requisite:
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Kubectl (Kube Control)](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux)
- [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)
- [NodeJS](https://nodejs.org/en/download/package-manager/)

You will be orchestrating a number of services in a microservice fashion! By adopting the api gateway pattern: https://microservices.io/patterns/apigateway.html

**Acceptance Criteria**:
- I should be able to build gateway, member, and product container image using docker compose
- I should be able to deploy all 3 application to a kubernetes cluster
- I should be able to query the member and product services through the gateway service in a kubernetes cluster

Bonus points for:
- Using configmap to manage your environment variables
- Utilizing multiple deployment objects

## Minikube Important Note!

If you're not planning to use docker hub to store your container image, and looking to build docker images directly into Minikube docker environment, do:
```bash
# Run this in your terminal
eval $(minikube docker-env)

# Verify
docker images
```

Keep in mind that this will only remain accessible on the current shell session. If you switch to a new tab or new session, you will need to re-run the `eval` command to access the cluster's docker environment.