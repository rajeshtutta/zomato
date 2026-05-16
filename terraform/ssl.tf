module "acm" {
  source  = "terraform-aws-modules/acm/aws"
  version = "~> 5.0"

  domain_name = "tankandpets.shop"
  zone_id     = "Z0524155L02JKC3LDZZS"

  subject_alternative_names = [
    "*.tankandpets.shop"
  ]

  validation_method = "DNS"

  wait_for_validation = true
}

output "acm_certificate_arn" {
  value = module.acm.acm_certificate_arn
}
