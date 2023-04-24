docker run -p 6379:6379 redis

docker build -t manounni/nestjs-bmq .  
docker image push manounni/nestjs-bmq:latest

kubectl create deployment nestjs-bullmq --image=manounni/nestjs-bmq:latest --port 3000 --dry-run=client -o yaml > deployment.yaml

kubectl expose deployment nestjs-bullmq --type=NodePort --port 3000 --dry-run=client -o yaml > service.yaml

helm install nestjs-bmq .
helm upgrade nestjs-bmq .
helm dependency update

kubectl logs -l app=nestjs-bmq --follow
or for single pod
kubectl logs nestjs-bmq-747784b498-8f7vb
kubectl get po
kubectl get svc
