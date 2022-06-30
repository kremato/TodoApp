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
      console.log("EROR");
    }
  };
};
