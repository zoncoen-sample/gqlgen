package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
	"github.com/rs/cors"
	"github.com/zoncoen-sample/gqlgen/todos"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	mux := http.NewServeMux()
	mux.Handle("/", handler.Playground("GraphQL playground", "/query"))
	mux.Handle("/query", handler.GraphQL(todos.NewExecutableSchema(todos.Config{Resolvers: &todos.Resolver{}})))
	handler := cors.Default().Handler(mux)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe("localhost:"+port, handler))
}
