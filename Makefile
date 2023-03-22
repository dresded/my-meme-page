.PHONY: dev \
				staging \
				prod \
				start

dev:
	npx vue-cli-service build --mode development --modern

staging:
	npx vue-cli-service build --mode staging --modern

prod:
	npx vue-cli-service build --mode production --modern

start:
	yarn serve