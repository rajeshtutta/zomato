# 📄 Full Technical Documentation: Zomato DevOps Project

## 1. Project Overview
This project demonstrates the deployment of a React-based Zomato clone application onto a production-grade AWS environment. It follows modern DevOps principles, utilizing Infrastructure as Code (IaC), Continuous Integration (CI), and Continuous Deployment (CD).

## 2. Infrastructure Architecture (AWS)
The infrastructure is provisioned using Terraform and resides in the `us-east-1` region.

### **Networking (VPC)**
*   **VPC CIDR:** `10.0.0.0/16`
*   **Subnets:** 
    *   2x Public Subnets (for NAT Gateway and Load Balancer)
    *   2x Private Subnets (for EKS Worker Nodes)
*   **Gateways:** 1x Internet Gateway, 1x NAT Gateway (for private subnet internet access).

### **Compute (EKS)**
*   **Cluster Name:** `zomato-eks-cluster`
*   **Kubernetes Version:** `1.28`
*   **Node Group:** Managed Node Group with **4x t3.micro** instances.
*   **Auto-Scaling:** Min: 2, Max: 5, Desired: 4.

## 3. Deployment Pipeline (GitHub Actions)
The CI/CD pipeline is defined in `.github/workflows/deploy.yml`.

### **Workflow Stages:**
1.  **Checkout:** Pulls the latest code from the `main` branch.
2.  **Docker Build:** Builds the production Docker image using a multi-stage process.
3.  **Docker Push:** Tags and pushes the image to DockerHub (`rajeshtutta123/zomato-frontend`).
4.  **K8s Update:** 
    *   Connects to AWS EKS.
    *   Updates the Kubernetes manifests with the new image tag.
    *   Applies changes using `kubectl apply`.

## 4. Containerization (Docker)
The `Dockerfile` uses a two-stage build to minimize image size:
*   **Stage 1 (Build):** Uses `node:18-alpine` to install dependencies and build the React static files.
*   **Stage 2 (Production):** Uses `nginx:alpine` to serve the static files on port 80.

## 5. Load Balancing & Security
*   **Ingress Controller:** Installed **AWS Load Balancer Controller** via Helm.
*   **ALB:** Provisioned an Application Load Balancer that routes traffic to the EKS pods.
*   **SSL/TLS:** Certificate managed by **AWS Certificate Manager (ACM)**.
*   **Traffic Flow:** User -> HTTPS (443) -> ALB -> Target Group (IP) -> Pods.

## 6. How to Manage the Cluster

### **Scaling the Application**
To increase the number of app instances:
```bash
kubectl scale deployment zomato-frontend --replicas=3 -n zomato
```

### **Viewing Logs**
To see real-time application logs:
```bash
kubectl logs -f -l app=zomato-frontend -n zomato
```

### **Manual Infrastructure Update**
If you change any Terraform files:
```bash
cd terraform
terraform plan
terraform apply -auto-approve
```

---
**Document Version:** 1.0.0  
**Last Updated:** May 2026  
**Author:** Rajesh Tutta
