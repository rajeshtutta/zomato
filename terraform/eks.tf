module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 19.0"

  cluster_name    = var.cluster_name
  cluster_version = "1.29"

  vpc_id                         = module.vpc.vpc_id
  subnet_ids                     = module.vpc.private_subnets
  cluster_endpoint_public_access = true

  # Default configurations for all node groups
  eks_managed_node_group_defaults = {
    ami_type = "AL2_x86_64"
  }

  eks_managed_node_groups = {
    zomato_nodes = {
      name = "zomato-node-group"

      instance_types = ["t3.micro"]

      # Auto Scaling Group parameters
      min_size     = 2
      max_size     = 5
      desired_size = 4
    }
  }
}
