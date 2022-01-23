import React from "react";
import { Route, Routes } from "react-router-dom";

// layout
import RestaurantLayout from "../layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
        <Routes>
            <Route
                {...rest}
                element={(
                  <RestaurantLayout>
                      <Component />
                  </RestaurantLayout>
                )}
            />
        </Routes>
    </>
  );
}

export default RestaurantLayoutHoc;
