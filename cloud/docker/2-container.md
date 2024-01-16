# DOCKER - CONTAINER

## I - Gérer les conteneurs

* création de conteneur
```
  docker run image:tag
```
cette commande permet de démarrer un conteneur sans le nommer, dans ce cas docker vas assigner un nom random au conteneur

pour assigner un nom au conteneur il faudrait ajouter l'option --name

```
  docker run --name mon_conteneurimage:tag
```
NB : si vous spécifier un nom de conteneur déja existant la commande échouera

* démarrer le conteneur en mode background

Parfois nous souhaitons faire tourner notre conteneur en arrière plan 
```
  docker run -d --name mon_conteneur image:tag
```

* démarrer un conteneur en exposant le port au système hôte

```
  docker run --name containerName -p 8087:8087 image_name
```

* pouvoir tous les conteneurs qui sont demarrés sur la machine
```
  docker ps
```
* afficher les logs d'un conteneur en cours 
```
  docker logs container_name -f
```

* se connecter à un conteneur
```
  docker exec -it container_name/or_id /bin/sh
```

* arrêter un conteneur
```
  docker stop container_name/or_id

```

* copier un fichier depuis ou vers un conteneur docker
```

```

* voir les variables d'environnement sur un conteneur
```
 docker exec -ti container_name_or_id env
 
```