"use client";

import { AppShell, AppShellHeader, AppShellMain, ActionIcon, Image, Flex } from "@mantine/core";
import { ReactNode } from "react";
import HeaderComponent from "../features/shell/header";

type LayoutShellProps = {
    children: ReactNode;
};

export function LayoutShell({ children }: LayoutShellProps) {
    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShellHeader>
                <Flex h="100%" px="md" justify="space-between" align="center">
                    <ActionIcon size={40}>
                        <Image src="/images/light-header-logo.svg" alt="Logo" />
                    </ActionIcon>
                    <HeaderComponent />
                </Flex>
            </AppShellHeader>
            <AppShellMain>{children}</AppShellMain>
        </AppShell>
    );
}
