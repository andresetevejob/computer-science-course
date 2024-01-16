# DOCKER

I - Historique

 ![alt text for screen readers](/cloud/docker/images/container_history.png)





 II - Presentation

 ```
  Selon la firme de recherche sur l'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n'importe quel serveur ». Il ne s'agit pas de virtualisation, mais de conteneurisation, une forme plus légère qui s'appuie sur certaines parties de la machine hôte pour son fonctionnement. 
  Cette approche permet d'accroître la flexibilité et la portabilité d’exécution d'une application, laquelle va pouvoir tourner de façon fiable et prévisible sur une grande variété de machines hôtes, que ce soit sur la machine locale, un cloud privé ou public, une machine nue.
 ```
 III - Docker vs Machine virtuelle

![alt text for screen readers](/cloud/docker/images/docker-virtual_machine.png)


 IV - Problèmes solutionner Docker

 1 - Gestion applicatives avant et avec docker dans un système d'exploitation

![alt text for screen readers](/cloud/docker/images/os-before-docker.png)

![alt text for screen readers](/cloud/docker/images/os-with-docker.png)



 V - Configuration des environnements
 
 ```
 - Avant docker
 ```
 ![alt text for screen readers](/cloud/docker/images/conf-before-docker.png)

```
 - Après Docker
```
 ![alt text for screen readers](/cloud/docker/images/conf-after-docker.md.png)

 
 VI - Différénces entres conteneurs et images
 - Une image est une collection de couche de fichier système avec quelque métadonnées.
 - Un container quant à lui est une instance d’image.

Si nous nous référons à la programmation oriente objet,nous pouvons dire qu’une image est une classe et un container,une instance d’image.
 
![alt text for screen readers](/cloud/docker/images/img-vs-cont.png)

 