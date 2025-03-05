import "./App.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/core/styles.css";
import {
	AppShell,
	Burger,
	Group,
	Image,
	MantineProvider,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router";
import styles from "./App.module.css";
import { Nav } from "./components/nav/Nav";
import { Team } from "./components/team/Team";
import { Teams } from "./components/teams/Teams";
import { TestComponent } from "./components/test";
import { theme } from "./theme";

function AppCore() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" gap="xs" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Image src="/nhl-logo.png" height="75%" />
					<Title order={3}>Hockey Manager 2025</Title>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p="md">
				<Nav />
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider theme={theme}>
				<AppCore />
			</MantineProvider>
		</QueryClientProvider>
	);
}

export default App;
