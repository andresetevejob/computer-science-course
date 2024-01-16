# Docker

## I - Architecture de la plateforme Docker

 ![alt text for screen readers](/cloud/docker/images/architecture_docker.png)


## II - Les différents composants

1 - docker client
```

Le client Docker (docker) est le principal moyen par lequel de nombreux  utilisateurs de Docker interagissent avec Docker. Lorsque vous utilisez des commandes telles que docker run, le client envoie ces commandes à dockerd, qui les exécute. La commande docker utilise l'API Docker.

```

2 - docker host (daemon)

```
Le daemon Docker (dockerd) écoute les demandes d'API Docker et gère les objets Docker tels que les images, les conteneurs, les réseaux et les volumes.

```

3 - docker hub
```
Docker Hub est un registre public que tout le monde peut utiliser, et Docker est configuré pour rechercher des images sur Docker Hub par défaut

```
## III - Worflow d'une commande docker run

![alt text for screen readers](/cloud/docker/images/workflow-docker-run.png)

## IV - Communiquer avec un client docker depuis curl

 - curl -s --unix-socket /var/run/docker.sock -H 'Content-Type: application/json' http://localhost/containers/json | jq

- curl -s --unix-socket /var/run/docker.sock -H 'Content-Type: application/json' http://localhost/containers/543d296c04eb16287dead09077592e1cb321f26fce50547618f87c74b0d449f5/json | jq

-  curl -s --unix-socket /var/run/docker.sock http://localhost/version | jq

- curl -s --unix-socket /var/run/docker.sock http://localhost/info | jq

- curl -s -X POST --unix-socket /var/run/docker.sock -H 'Content-Type: application/json' http://localhost/containers/543d296c04eb16287dead09077592e1cb321f26fce50547618f87c74b0d449f5/start

- curl -s -X POST --unix-socket /var/run/docker.sock -d '{"Image":"nginx:latest"}' -H 'Content-Type: application/json' http://localhost/containers/create?name=nginx | jq


sources : 
 * https://mac-blog.org.ua/docker-api/
 * Unix sockets vs TCP  : https://www.baeldung.com/linux/unix-vs-tcp-ip-sockets