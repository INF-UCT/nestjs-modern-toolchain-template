.PHONY: install dev build lint format format-check test test-watch test-cov test-e2e clean

install:
	pnpm install

dev:
	pnpm run start:dev

build:
	pnpm run build

lint:
	pnpm run lint

format:
	pnpm run format

format-check:
	pnpm run format:check

test:
	pnpm test

test-watch:
	pnpm run test:watch

test-cov:
	pnpm run test:cov

test-e2e:
	pnpm run test:e2e

clean:
	rm -rf dist coverage node_modules
