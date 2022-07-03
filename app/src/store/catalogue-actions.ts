import { catalogueActions } from "./catalogue-slice";

export const fetchCatalogueData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_API}/catalogue`);

      if (!response.ok) {
        throw new Error("Could not fetch catalogue data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const catalogueData = await fetchData();
      dispatch(
        catalogueActions.replaceCatalogue({
          items: catalogueData || [],
        })
      );
    } catch (error) {
      console.log("Error occured when fetching catalogue data");
    }
  };
};

export const updateCatalogueData = (name: string) => {
  return async (dispatch: any) => {
    const sendRequest = async () => {
      const response = await fetch(`${import.meta.env.VITE_API}/catalogue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending new todo list failed.");
      }

      return response;
    };

    try {
      const response = await sendRequest();
      const data = await response.json();
      dispatch(catalogueActions.addCatalogueItem(data));
    } catch (error) {
      console.log("Error occured during todo list creation");
    }
  };
};
