---
title: "cert-manager-in-kubernetes"
date: "2025-11-13"
tags: ["Kubernetes", "Devops", "Guides"]
---

### Understanding Certificates and CRDs

In Kubernetes, a **certificate** is a digital document that verifies the identity of a service or user. Certificates are commonly used for securing communication between components in a cluster, ensuring data is encrypted and trusted. Tools like **cert-manager** help automate the creation, renewal, and management of these certificates, making it easier to maintain secure connections across your Kubernetes workloads.

A **CRD (CustomResourceDefinition)** allows users to extend the Kubernetes API by defining their own resource types. Once a CRD is applied, you can create and manage custom resources just like built-in Kubernetes resources (such as Pods or Services). cert-manager uses CRDs to define resources like `Certificate`, `Issuer`, and `ClusterIssuer`, which represent certificate-related configurations and workflows.

### cert-manager Installation

### Applying cert-manager CRDs Manually

Before installing **cert-manager**, it’s a good practice to apply its CustomResourceDefinitions (CRDs) manually. This ensures that any custom resources you create will remain intact even if you later remove or upgrade cert-manager.

To do this, first download the CRD file from the official cert-manager release repository:
`https://github.com/cert-manager/cert-manager/releases/download/v1.18.2/cert-manager.crds.yaml`

once download, apply this file using kubectl apply
kubectl apply -f /path/to/crd/file

this step is important to keep custom resources that user creates even when you remove cert-manager.

### Install cert-manager using helm
```bash
helm repo add jetstack https://charts.jetstack.io --force-update # force-update lets you skip the command helm repo reload

helm list # to verify cert-manager is added to helm list

helm install cert-manager --namespace cert-manager --version v1.18.2 jetstack/cert-manager # 1.18.2 is the latest version at the time, check what version is latest at time of installation
```

### Purging the cert-manager
This involves two steps

```shell
helm delete cert-manager --namespace cert-manager
```

```bash
kubectl delete -f /path/to/crd/file.yaml
```
---
### applying the manifests
1. cloudflare-api-token-secret, to create this you can either use command
```bash
kubectl create secret generic secret-name \
        --from-literal=secret_name='secret' \
        --namespace=your_namespace
```

or use kubectl apply to apply manifest.
```yaml
apiVersion: v1
kind: Secret
metadata:
    name: secret-name
    namespace: your-namespace
type: Opaque
stringData:
    secret-name: YOUR_SECRET
```
then use command...
```bash
kubectl apply -f /path/to/yaml/file.yaml
```
to apply the secret.
*NOTE*: Dont forget to either delete the secret.yaml file, or atleast remove the secret from stringData to not leak the secret


2. clusterIssuer, who will issue the cert to cluster
simply..
```bash
kubectl apply -f /path/to/clusterIssuer/file.yaml
```

3. Finally, wait for some time for letsencrypt to solve the dns-challenge and then apply the cert manifest.
```bash
kubectl apply -f /path/to/cert/file.yaml
```
---
## Final Steps
just use the wildcard cert in any ingress file.



### Understanding Certificates and CRDs

In Kubernetes, a **certificate** is a digital document that verifies the identity of a service or user. Certificates are used to secure communication between components in a cluster, ensuring data is encrypted and trusted. Tools like **cert-manager** help automate the creation, renewal, and management of these certificates, making it easier to maintain secure connections across your workloads.

A **CRD (CustomResourceDefinition)** allows users to extend the Kubernetes API by defining their own resource types. Once a CRD is applied, you can create and manage custom resources just like built-in Kubernetes resources (such as Pods or Services). cert-manager uses CRDs to define resources like `Certificate`, `Issuer`, and `ClusterIssuer`, which represent certificate-related configurations and workflows.

---

# cert-manager Installation

### Applying cert-manager CRDs Manually

Before installing **cert-manager**, it’s a good practice to apply its CustomResourceDefinitions (CRDs) manually. This ensures that any custom resources you create will remain intact even if you later remove or upgrade cert-manager.

To do this, first download the CRD file from the official cert-manager release repository:
```bash
wget https://github.com/cert-manager/cert-manager/releases/download/v1.18.2/cert-manager.crds.yaml
```

Once downloaded, apply the CRDs using `kubectl`:

```bash
kubectl apply -f /path/to/crd/file.yaml
```

This step is important to preserve any custom resources that users create, even if cert-manager is later removed.

---

### Install cert-manager using Helm

```bash
helm repo add jetstack https://charts.jetstack.io --force-update
# The --force-update flag ensures the repo is refreshed without requiring helm repo update

helm list
# Verify that cert-manager has been added to the Helm list

helm install cert-manager \
  --namespace cert-manager \
  --version v1.18.2 \
  jetstack/cert-manager
# v1.18.2 is the latest version at the time of writing; check for newer versions before installation

```

---

---

### Purging cert-manager

To completely remove cert-manager, perform the following two steps:

```bash
helm delete cert-manager --namespace cert-manager
kubectl delete -f /path/to/crd/file.yaml
```

---
### Applying the Manifests

#### 1. Create the Cloudflare API Token Secret

You can either create the secret directly using a command:

```bash
kubectl create secret generic secret-name \
  --from-literal=secret_name='secret' \
  --namespace=your-namespace
```

Or apply it using a YAML manifest:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: secret-name
  namespace: your-namespace
type: Opaque
stringData:
  secret-name: YOUR_SECRET
```

Apply the manifest with:

```bash
kubectl apply -f /path/to/secret.yaml
```

**Note:** After applying, either delete the `secret.yaml` file or remove the secret value from `stringData` to avoid leaking sensitive data.

---
#### 2. Apply the ClusterIssuer

The **ClusterIssuer** defines who will issue certificates for the cluster.

```bash
kubectl apply -f /path/to/clusterIssuer/file.yaml
```

---

#### 3. Apply the Certificate Manifest

Wait a few moments for **Let’s Encrypt** to solve the DNS challenge, then apply your certificate manifest:

```bash
kubectl apply -f /path/to/cert/file.yaml
```

## Final Steps

Once your certificate is issued, you can reference the **wildcard certificate** in any of your Ingress manifests to enable secure HTTPS connections across your Kubernetes services.

---

Would you like me to add syntax highlighting for YAML and shell commands (for example, using fenced code blocks with `yaml` or `bash` tags for a blog platform like Hugo or Jekyll)? It can make your post more visually polished.