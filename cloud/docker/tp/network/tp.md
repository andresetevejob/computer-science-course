docker run -rm --name mongodb --network mynet -p 27018:27017 mongo:latest

docker run -rm --name ds --network mynet -p -p 8087:8087 docker.io/andrenextu/app-java:1.0.0