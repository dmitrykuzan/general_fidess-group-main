"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { mobileCheck } from "./functions/";
import { counter } from "./functions/counter";
import { burger } from "./functions/";
import { tabs } from "./functions/";
import { modals } from "./functions/";
import { formValidation } from "./components/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  modals();
  counter();
  burger();
  tabs(
    ".cosmetics__tabs",
    ".cosmetics__tabs-btn",
    ".cosmetics__tabs-info",
    "active"
  );
  formValidation();
});
