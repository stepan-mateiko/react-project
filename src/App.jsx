import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import EnterPage from "./components/pages/EnterPage";
import MainPage from "./components/pages/MainPage";
import ItemPage from "./components/pages/ItemPage";
import ROUTES from "./constants/routes";

const App = () => {
  const [id, setId] = useState("");
  return (
    <Routes>
      <Route path={ROUTES.ENTER} element={<EnterPage setId={setId} />} exact />
      <Route path={ROUTES.MAIN} element={<MainPage id={id} setId={setId} />} />
      <Route
        path={ROUTES.CHARACTERS}
        element={<ItemPage setId={setId} elem={id} />}
      />
      <Route
        path={ROUTES.EVENTS}
        element={<ItemPage setId={setId} elem={id} />}
      />
      <Route
        path={ROUTES.COMICS}
        element={<ItemPage setId={setId} elem={id} />}
      />
      <Route
        path={ROUTES.SERIES}
        element={<ItemPage setId={setId} elem={id} />}
      />
    </Routes>
  );
};

export default App;
