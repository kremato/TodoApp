import { todosActions } from "./todos-slice";

export const fetchTodosData = (id: string) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/catalogue/${id}/todos`
      );

      if (!response.ok) {
        throw new Error(`Could not fetch catalogue/${id} data!`);
      }

      const data = await response.json();

      return data;
    };

    try {
      const todosData = await fetchData();

      dispatch(
        todosActions.replaceTodos({
          items: todosData || [],
        })
      );
    } catch (error) {
      console.log("Error ocuured when fetching items for todo list");
    }
  };
};

export const deleleTodoItem = (catalogueId: string, todoId: string) => {
  return async (dispatch: any) => {
    const deleteTodoData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/catalogue/${catalogueId}/todos/${todoId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Could not delete catalogue/${catalogueId}/todos/${todoId} data!`
        );
      }
    };

    try {
      await deleteTodoData();
      dispatch(
        todosActions.removeTodo({
          todoId,
        })
      );
    } catch (error) {
      console.log("Error ocuured when removing todo item from todo list");
    }
  };
};

export const updateTodoItem = (
  catalogueId: string,
  todoId: string,
  completed: boolean
) => {
  return async (dispatch: any) => {
    const updateTodoData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/catalogue/${catalogueId}/todos/${todoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            completed,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Could not update catalogue/${catalogueId}/todos/${todoId} data!`
        );
      }
    };

    try {
      await updateTodoData();
      dispatch(
        todosActions.updateTodo({
          todoId,
        })
      );
    } catch (error) {
      console.log("Error ocuured when updating todo item in todo list");
    }
  };
};

export const addNewTodoItem = (
  catalogueId: string,
  title: string,
  content: string,
  deadline: Date
) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/catalogue/${catalogueId}/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
            deadline: deadline.getTime(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Could not add new item to catalogue/${catalogueId}/todos data!`
        );
      }

      return response;
    };

    try {
      const response = await sendRequest();
      const data = await response.json();
      console.log("Dispatch todo action");
      dispatch(
        todosActions.addNewTodo({
          data,
        })
      );
    } catch (error) {
      console.log("Error occured when adding new item to todo list");
    }
  };
};
