import { createTheme, MantineColorsTuple } from "@mantine/core";

const primary: MantineColorsTuple = [
    "#e3f2fd",
    "#bbdefb",
    "#90caf9",
    "#64b5f6",
    "#42a5f5",
    "#2196f3",
    "#1e88e5",
    "#1976d2",
    "#1565c0",
    "#0d47a1",
];

export const theme = createTheme({
    fontFamily: "Raleway, san-serif",
    fontFamilyMonospace: "B612, monospace",
    primaryColor: "primary",
    colors: {
        primary,
    },
    components: {
        AppShell: {},
    },
});
