import { useMantineColorScheme, Menu, MenuTarget, Button, MenuDropdown, MenuItem } from "@mantine/core";
import { ListIcon } from "@phosphor-icons/react";

export default function HeaderComponent() {
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    const toggleColorScheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <Menu position="bottom-end" closeOnItemClick={false}>
                <MenuTarget>
                    <Button variant="transparent">
                        <ListIcon size={24} />
                    </Button>
                </MenuTarget>
                <MenuDropdown>
                    <MenuItem onClick={toggleColorScheme} title="Toggle color scheme">
                        {colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
                    </MenuItem>
                </MenuDropdown>
            </Menu>
        </>
    );
}
