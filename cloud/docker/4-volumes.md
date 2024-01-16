# DOCKER

I - Volumes

```
  Lorsqu'un conteneur docker est crée toutes les informations stocker dans le conteneur sont perdues lorsque le dernier s'arrête.
  Les volumes permettent de gérer la persistance des données au niveau du conteneur docker
  IL existe différents types de volumes sur docker qui sont :

  * volumes
  * mount
  * tmpfs
```

1 - volumes

```
  Avantages des Volumes Standards
  . Portabilité des Données : Les volumes peuvent être facilement déplacés ou partagés entre différents conteneurs, facilitant la portabilité des applications.

  . Indépendance et Sécurité : Comme ils sont gérés par Docker et isolés du système de fichiers de l'hôte, les volumes standards offrent une meilleure sécurité et réduisent les risques de conflits de fichiers.

  . Facilité de Sauvegarde et de Récupération : Les données dans les volumes standards peuvent être sauvegardées et récupérées indépendamment des conteneurs, ce qui simplifie les opérations de maintenance.

  . Gestion Centralisée : Docker fournit des commandes pour gérer les volumes, y compris la création, la suppression, la liste et l'inspection, centralisant ainsi la gestion des données.

```

2 - Bind Mount
```
 - IL rend accessible un dossier sur le systême hôte depuis le conteneur. 
```

3 - Tmpfs
```
 -  IL est temporaire et stocker dans la memoire du conteneur
```