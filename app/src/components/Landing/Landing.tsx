import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogueData } from "../../store/catalogue-actions";
import { IState } from "../../types/types";
import { Link } from "react-router-dom";

export const Landing = () => {
  const dispatch = useDispatch();
  const catalogue = useSelector((state: IState) => {
    return state.catalogue;
  });

  useEffect(() => {
    dispatch(fetchCatalogueData() as any);
  }, [dispatch]);

  return (
    <>
      <div>TODO LIST CATALOGUE</div>
      {catalogue.items.map((item) => {
        return (
          <Link to={`/catalogue/${item.id}`} key={uuidv4()}>
            <div>{item.name}</div>
          </Link>
        );
      })}
    </>
  );
};
