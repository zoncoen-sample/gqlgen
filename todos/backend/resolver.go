package todos

import (
	"context"
	"errors"

	"github.com/google/uuid"
	"github.com/zoncoen-sample/gqlgen/todos/models"
)

// THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct {
	todos []*models.Todo
}

func (r *Resolver) Mutation() MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() QueryResolver {
	return &queryResolver{r}
}
func (r *Resolver) Todo() TodoResolver {
	return &todoResolver{r}
}

type mutationResolver struct{ *Resolver }

func (r *mutationResolver) Noop(ctx context.Context, input *models.NoopInput) (*models.NoopPayload, error) {
	return nil, nil
}

func (r *mutationResolver) CreateTodo(ctx context.Context, input models.CreateTodoInput) (*models.CreateTodoPayload, error) {
	todo := &models.Todo{
		ID:     uuid.New().String(),
		Text:   input.Text,
		UserID: input.UserID,
	}
	r.todos = append(r.todos, todo)
	return &models.CreateTodoPayload{
		ClientMutationID: input.ClientMutationID,
		Todo:             todo,
	}, nil
}

func (r *mutationResolver) DeleteTodo(ctx context.Context, input models.DeleteTodoInput) (*models.DeleteTodoPayload, error) {
	for i, todo := range r.todos {
		if todo.ID == input.ID {
			r.todos = append(r.todos[:i], r.todos[i+1:]...)
		}
	}
	return &models.DeleteTodoPayload{
		ClientMutationID: input.ClientMutationID,
		ID:               input.ID,
	}, nil
}

func (r *mutationResolver) ToggleTodo(ctx context.Context, input models.ToggleTodoInput) (*models.ToggleTodoPayload, error) {
	for i, todo := range r.todos {
		if todo.ID == input.ID {
			r.todos[i].Done = input.Done
		}
	}
	return &models.ToggleTodoPayload{
		ID:   input.ID,
		Done: input.Done,
	}, nil
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Node(ctx context.Context, id string) (models.Node, error) {
	for _, todo := range r.todos {
		todo := todo
		if todo.ID == id {
			return todo, nil
		}
	}
	return nil, errors.New("not found")
}

func (r *queryResolver) Todos(ctx context.Context, first int, after *string) (*models.TodoConnection, error) {
	todos := r.todos
	pageInfo := &models.PageInfo{}
	if after != nil {
		var found bool
		for i, todo := range todos {
			todo := todo
			if todo.ID == *after {
				found = true
				pageInfo.HasPreviousPage = true
				todos = todos[i+1:]
				break
			}
		}
		if !found {
			todos = todos[:0]
		}
	}
	if len(todos) > first {
		pageInfo.HasNextPage = true
		todos = todos[:first]
	}
	if len(todos) > 0 {
		pageInfo.StartCursor = &todos[0].ID
		pageInfo.EndCursor = &todos[len(todos)-1].ID
	}
	return &models.TodoConnection{
		PageInfo: pageInfo,
		Edges:    toTodoEdges(todos),
		Nodes:    todos,
	}, nil
}

func toTodoEdges(todos []*models.Todo) []*models.TodoEdge {
	edges := make([]*models.TodoEdge, len(todos))
	for i, todo := range todos {
		todo := todo
		edges[i] = &models.TodoEdge{
			Cursor: todo.ID,
			Node:   todo,
		}
	}
	return edges
}

type todoResolver struct{ *Resolver }

func (r *todoResolver) User(ctx context.Context, obj *models.Todo) (*models.User, error) {
	return &models.User{
		ID:   obj.UserID,
		Name: obj.UserID,
	}, nil
}
