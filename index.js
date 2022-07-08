const yaml = require("yaml");

module.exports.readVersion = (yamlFileContent) => yaml.parse(yamlFileContent, "utf8").spec.template.metadata.labels.appVersion;

module.exports.writeVersion = (yamlFileContent, version) => {
  const yamlFile = yaml.parse(yamlFileContent, "utf8");

  // write new values to yaml file
  if (yamlFile.spec.template.metadata.labels.hasOwnProperty('appVersion')) {
    yamlFile.spec.template.metadata.labels.appVersion = version;
  }

  let repositoryUri = yamlFile.spec.template.spec.containers[0].image.split(':');
  yamlFile.spec.template.spec.containers[0].image = repositoryUri[0] + ':' + version;

  return yaml.stringify(yamlFile, "utf8");
};
