package todos

import (
	"context"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/google/uuid"
	"github.com/zoncoen-sample/gqlgen/todos/models"
)

func TestQueryResolver_Todos(t *testing.T) {
	todos := []*models.Todo{
		&models.Todo{
			ID:   uuid.New().String(),
			Text: "1",
		},
		&models.Todo{
			ID:   uuid.New().String(),
			Text: "2",
		},
		&models.Todo{
			ID:   uuid.New().String(),
			Text: "3",
		},
	}
	invalidID := uuid.New().String()
	tests := map[string]struct {
		todos  []*models.Todo
		first  int
		after  *string
		expect *models.TodoConnection
	}{
		"all": {
			todos: todos,
			first: len(todos) + 1,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{
					StartCursor: &todos[0].ID,
					EndCursor:   &todos[len(todos)-1].ID,
				},
				Edges: toTodoEdges(todos),
			},
		},
		"has next": {
			todos: todos,
			first: 1,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{
					HasNextPage: true,
					StartCursor: &todos[0].ID,
					EndCursor:   &todos[0].ID,
				},
				Edges: toTodoEdges(todos[0:1]),
			},
		},
		"has next and previous": {
			todos: todos,
			first: 1,
			after: &todos[0].ID,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{
					HasNextPage:     true,
					HasPreviousPage: true,
					StartCursor:     &todos[1].ID,
					EndCursor:       &todos[1].ID,
				},
				Edges: toTodoEdges(todos[1:2]),
			},
		},
		"has previous": {
			todos: todos,
			first: 1,
			after: &todos[1].ID,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{
					HasPreviousPage: true,
					StartCursor:     &todos[2].ID,
					EndCursor:       &todos[2].ID,
				},
				Edges: toTodoEdges(todos[2:3]),
			},
		},
		"empty": {
			first: 1,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{},
				Edges:    []*models.TodoEdge{},
			},
		},
		"first is 0": {
			todos: todos,
			first: 0,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{
					HasNextPage: true,
				},
				Edges: []*models.TodoEdge{},
			},
		},
		"invalid after": {
			todos: todos,
			first: 1,
			after: &invalidID,
			expect: &models.TodoConnection{
				PageInfo: &models.PageInfo{},
				Edges:    []*models.TodoEdge{},
			},
		},
	}
	for name, test := range tests {
		test := test
		t.Run(name, func(t *testing.T) {
			r := &queryResolver{
				Resolver: &Resolver{
					todos: test.todos,
				},
			}
			got, err := r.Todos(context.Background(), test.first, test.after)
			if err != nil {
				t.Fatalf("unexpected error: %s", err)
			}
			if diff := cmp.Diff(test.expect, got); diff != "" {
				t.Errorf("differs: (-want +got)\n%s", diff)
			}
		})
	}
}
