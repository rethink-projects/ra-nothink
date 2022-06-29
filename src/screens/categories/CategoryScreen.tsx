import React, { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import { Card, Loading } from "../../components";

// Context
import { useData } from "../../context/DataContext";

const CategoryScreen = () => {
  const { fetchSnnipets, snnipets, isLoading } = useData();
  const location = useLocation();

  const handleData = useCallback(async () => {
    const category_id = location.pathname.replace("/categories/", "");
    await fetchSnnipets(category_id);
  }, [fetchSnnipets, location.pathname]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <div>
      {isLoading && <Loading />}
      {snnipets.length <= 0 && !isLoading && (
        <Loading text="Nenhum Snnipet encontrado." />
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

export default CategoryScreen;
