import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import { Loading } from "../../components";

//context
import { useData } from "../../context/DataContext";

export const CategoryScreen = () => {
  const { fetchSnnipets, snnipets, isLoading } = useData();
  const location = useLocation();

  const handleData = useCallback(async () => {
    const categoryId = location.pathname.replace("/categories/", "");
    await fetchSnnipets(categoryId);
  }, [fetchSnnipets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div>
      {isLoading && <Loading />}
      {snnipets.length <= 0 && !isLoading && (
        <Loading text="Nenhuma categoria encontrada." />
      )}
      {!isLoading && snnipets.length > 0 && (
        <div>
          {snnipets.map((snnipet, index) => (
            <div key={snnipet.id}>
              <p>{snnipet.title}</p>
              <p>{snnipet.category_id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
