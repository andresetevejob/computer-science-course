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