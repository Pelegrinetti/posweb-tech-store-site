build:
	@docker compose build

setup:
	@docker compose up

start:
	@docker compose start

stop:
	@docker compose stop

restart:
	@make stop
	@make start
