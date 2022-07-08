# K8s Deployment Image Version Updater

## Description

The K8s Deployment Image Version Updater can update a ```repository image uri``` and the pod label ```appVersion``` in kubernetes deployment yaml file.

## Install

- ```npm install @datenschleuder/k8s-deployment-version-updater```


## Usage

- add .versionrc file to your project folder if not exists
- add the following content to .versionrc file
```json
{
  "bumpFiles": [
    {
      "filename": "path/to/your/KubernetesDeployment.yml",
      "updater": "node_modules/@datenschleuder/k8s-deployment-version-updater"
    }
  ]
}
```
- execute on console ```yarn release --dry-run``` for testing
- and ```yarn release``` for changing the version
