import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import { Team } from "./components/team/Team.tsx";
import { Teams } from "./components/teams/Teams.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="teams" element={<Teams />} />
					<Route path="teams/:teamId" element={<Team />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
