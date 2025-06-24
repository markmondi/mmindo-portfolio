import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { LayoutShell } from "./components/LayoutShell";
import { theme } from "./features/themes/theme";
import LayoutContainer from "./features/containers/LayoutContainer";

export const metadata = {
    title: "Mark Mindo | Portfolio",
    description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" {...mantineHtmlProps}>
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider theme={theme}>
                    <LayoutShell>
                        <LayoutContainer>{children}</LayoutContainer>
                    </LayoutShell>
                </MantineProvider>
            </body>
        </html>
    );
}
