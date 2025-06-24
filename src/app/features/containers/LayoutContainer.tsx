import { Container } from "@mantine/core";
import React, { ReactNode } from "react";

export default function LayoutContainer({ children }: { children: ReactNode }): React.JSX.Element {
    return (
        <Container fluid p={0} m={0} h="100vh" w="100vw">
            {children}
        </Container>
    );
}
