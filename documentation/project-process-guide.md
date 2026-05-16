# 📘 Project Process Guide: Step-by-Step Deployment

*This document explains the exact lifecycle of the Zomato DevOps project.*

---

## Phase 1: Local Development & Containerization
1.  **Code Analysis:** Reviewed the React application structure and dependencies.
2.  **Dockerization:** Created a multi-stage `Dockerfile`.
    *   **Build Stage:** Node.js environment to build static React assets.
    *   **Serve Stage:** Nginx Alpine image for lightweight, fast serving of the app.
3.  **Local Testing:** Verified the container locally before pushing to the cloud.

## Phase 2: Infrastructure as Code (Terraform)
1.  **VPC Design:** Defined a secure network with public and private subnets.
2.  **NAT Gateway:** Configured a NAT gateway to allow private nodes to download updates securely.
3.  **EKS Provisioning:** Used Terraform modules to create a production-grade Kubernetes cluster.
4.  **Scaling Configuration:** Set up Managed Node Groups with Auto Scaling capabilities.

## Phase 3: Kubernetes Setup & Routing
1.  **ALB Controller:** Installed the AWS Load Balancer Controller using Helm to allow Kubernetes to talk to AWS networking.
2.  **Ingress Mapping:** Created an `ingress.yaml` file to map your domain `tankandpets.shop` to the internal frontend service.
3.  **Scaling Fix:** Identified "Pending" pod issues due to ENI limits on `t3.micro`. Resolved by scaling the cluster to 4 nodes.

## Phase 4: CI/CD Pipeline (GitHub Actions)
1.  **Workflow Definition:** Created `.github/workflows/deploy.yml`.
2.  **Secret Management:** Configured GitHub Secrets for AWS and DockerHub credentials.
3.  **Deployment Logic:** Set up `kubectl` context to automatically update the EKS deployment with the latest Docker image tag on every commit.

## Phase 5: Security & Finalization
1.  **SSL/TLS (HTTPS):** Integrated AWS Certificate Manager (ACM).
2.  **DNS Mapping:** Pointed Route53 CNAME and Alias records to the AWS Load Balancer.
3.  **Monitoring:** Attempted "Ultra-Lite" monitoring installation to provide visibility into cluster health.
4.  **Documentation:** Created the README, Walkthrough, and Presentation guides.

---

**Project Complete!** 🏁
