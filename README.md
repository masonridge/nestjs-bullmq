docker run -p 6379:6379 redis

docker build -t manounni/nestjs-bmq .  
docker image push manounni/nestjs-bmq:latest

helm upgrade nestjs-bmq .
