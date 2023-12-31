import React from "react";
import ReactDOM from "react-dom/client";

// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import App from "./App";

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 설정

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
