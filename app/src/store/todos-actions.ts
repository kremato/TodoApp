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
      console.log("EROR");
    }
  };
};
