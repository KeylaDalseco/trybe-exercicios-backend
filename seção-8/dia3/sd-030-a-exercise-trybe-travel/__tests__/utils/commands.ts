const dockerFind = (partialName: string) => `$(docker ps -qaf name=${partialName})`;

const docker = {
  rm: (containerName: string) => `docker rm -vf ${dockerFind(containerName)}`,
  exec: (containerName: string, command: string, firstLevel = true) =>
    `docker exec ${dockerFind(containerName)} /bin/sh -c ${firstLevel ? `'${command}'` : `"${command}"`}`,
  logs: (containerName: string) => `docker logs ${dockerFind(containerName)}`
};

const dind = {
  exec: (contextName: string, command: string) => docker.exec(contextName, command),
  compose: {
    exec: (contextName: string, composeApp: string, command: string) =>
      docker.exec(
        contextName,
        docker.exec(
          composeApp,
          command,
          false
        )
      ),
    logs: (contextName: string, composeApp: string) =>
      docker.exec(
        contextName,
        docker.logs(composeApp)
      )
  }
}

export {
  dockerFind,
  docker,
  dind,
}
