# 🚀 Zomato Pro: Enterprise DevOps Deployment on AWS

[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/rajeshtutta/zomato/actions)
[![AWS](https://img.shields.io/badge/AWS-EKS%20%26%20VPC-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![Terraform](https://img.shields.io/badge/IaC-Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

This repository contains a production-grade deployment of the Zomato React application. The project showcases a full-scale DevOps pipeline, including Infrastructure as Code (IaC), Containerization, Orchestration, and automated CI/CD.

🔗 **Live Demo:** [https://tankandpets.shop](https://tankandpets.shop)

---

## 🏗️ Architecture Design

The architecture is built for high availability and scalability within the AWS Cloud.

```mermaid
graph TD
    User((User)) -->|HTTPS| Route53[AWS Route53 DNS]
    Route53 -->|Alias| ALB[AWS Application Load Balancer]
    
    subgraph "AWS EKS Cluster (us-east-1)"
        ALB -->|Routing| Ingress[Kubernetes Ingress]
        Ingress -->|Service| K8sService[Frontend Service]
        K8sService -->|Port 80| Pods[React App Pods]
        
        subgraph "Private Subnets"
            Pods --- Nodes[4x t3.micro Worker Nodes]
        end
    end
    
    subgraph "CI/CD Pipeline"
        GitHub[GitHub Repo] -->|Action Trigger| GHActions[GitHub Actions]
        GHActions -->|Build Image| DockerHub[DockerHub Registry]
        DockerHub -->|Pull Image| Pods
        GHActions -->|Kubectl Apply| Ingress
    end
```

## 🛠️ Tech Stack & Tools

*   **Infrastructure:** Terraform (VPC, EKS, Subnets, IAM, NAT Gateway)
*   **Orchestration:** Amazon EKS (Kubernetes 1.28)
*   **Containerization:** Docker (Multi-stage builds)
*   **CI/CD:** GitHub Actions
*   **Networking:** AWS Load Balancer Controller (ALB)
*   **Security:** AWS Certificate Manager (ACM - SSL/TLS)
*   **DNS:** Route53

## 🚀 Key Features

*   ✅ **End-to-End Automation:** Fully automated deployment from code commit to production.
*   ✅ **Secure by Design:** Private subnets for compute nodes and HTTPS encryption for users.
*   ✅ **Cost Optimized:** Balanced for Free Tier using `t3.micro` nodes with scaled ENI capacity.
*   ✅ **Zero-Downtime:** Rolling updates ensure 100% availability during deployments.
*   ✅ **IaC Governance:** Entire infrastructure managed through version-controlled Terraform.

## 📁 Project Structure

```text
├── .github/workflows/   # CI/CD Pipeline (GitHub Actions)
├── aws-k8s/            # Kubernetes Manifests (Deployment, Ingress)
├── terraform/          # Infrastructure as Code (AWS Provisioning)
├── src/                # React Frontend Source Code
├── Dockerfile          # Multi-stage Docker Build
└── PROJECT_WALKTHROUGH.md # Detailed technical documentation
```

## 📝 How to Deploy

1.  **Infrastructure:** Initialize and apply Terraform.
    ```bash
    cd terraform
    terraform init
    terraform apply -auto-approve
    ```
2.  **Pipeline:** Add `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `DOCKER_USERNAME`, and `DOCKER_PASSWORD` to GitHub Secrets.
3.  **Push:** Push to `main` branch to trigger the automated deployment.

---

## 👨‍💻 Author

**Rajesh Tutta**  
*DevOps Engineer & Cloud Architect*

<img src="https://media.licdn.com/dms/image/v2/D5603AQHJB_lF1d9OSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718971147172?e=1735776000&v=beta&t=HC_e0eOufPvf8XQ0P7iI9GDm9hBSIh5FwQaGsL_8ivo" alt="Rajesh Tutta" width="120" style="border-radius:50%;">

---
© 2026 Rajesh Tutta. All rights reserved.
