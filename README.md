# Each app is ready to development in local environment, you need to start both node js servers and the container of mongodb

- yarn install in server and client folder
- yarn start in server and client folder

(if obtain an error starting the backend part, check if container of mongodb is properly started with docker ps)

# MERN Docker Compose to deploy and final build

Run `make build` from root to build containers
Run `make run` from root to run containers with docker-compose
