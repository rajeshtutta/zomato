# Monitoring Setup

We use `kube-prometheus-stack` to install Prometheus, Grafana, and AlertManager in the EKS cluster for comprehensive monitoring.

## Prerequisites
Ensure you have `helm` installed on your machine.

## Installation Commands

```bash
# 1. Add the prometheus-community helm repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

# 2. Update the local helm repository cache
helm repo update

# 3. Create a dedicated monitoring namespace
kubectl create namespace monitoring

# 4. Install the kube-prometheus-stack using our custom values
helm install prometheus prometheus-community/kube-prometheus-stack \
  --namespace monitoring \
  -f monitoring/prometheus-values.yaml
```

Once installed, Grafana will be exposed via the ALB Ingress at `grafana.yourdomain.com` (assuming DNS is configured). Log in using `admin` / `admin`.
