# TP VOLUMES


Prerequis : cloner le depot : 

## 1 - Bind volumes

 a - Lancer la commande suivante 

 ```
  - docker run --rm -v your_path:/data/ --name app-java -p 8087:8087 docker.io/andrenextu/app-java:1.0.0

 ```

 b - Transférer une image sur l'application


 c - Arrêter le conteneur puis supprimer le 

 d - Relancer la commande au point a, on constate que l'image persiste même après la suppression du conteneur


 ## 2 - Mount volumes

 a - Créer un volumes

 ```
   docker create volume myapp-java
 ```

 b - Démarrer le conteneur

 ```
  - docker run --rm -v myapp-java:/data/ --name app-java -p 8087:8087 docker.io/andrenextu/app-java:1.0.0 
 ```

 c - Arrêter le conteneur (une suppression du conteneur aura lieu à cause de l'option rm)