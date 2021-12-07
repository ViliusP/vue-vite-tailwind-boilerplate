# To docker container
docker-up:
	docker-compose up --build

# To develop
up:
	sudo caddy stop
	sudo caddy start
	npm run serve

build-image:
	docker build -t user-portal-ui:latest -f Dockerfile .

production-run: 
	npm run build
	serve -s dist