import { NavLink } from "@mantine/core";
import type { FC } from "react";
import { NavLink as RouterLink } from "react-router";

const NAV_ITEMS = ["teams"];

export const Nav: FC = () => {
	return (
		<>
			{NAV_ITEMS.map((item) => {
				return (
					<NavLink
						key={item}
						component={RouterLink}
						to={`/${item}`}
						label={item}
						tt="capitalize"
						fw="bold"
					/>
				);
			})}
		</>
	);
};
