export GOBIN=$(shell pwd -P)/.bin

.PHONY: tools
tools:
	go install github.com/99designs/gqlgen

.PHONY: gen
gen:
	@${GOBIN}/gqlgen

.PHONY: build
build:
	go mod download
	CGO_ENABLED=0 go build -o ./.bin/server ./server

.PHONY: serve
serve:
	./.bin/server
