import { Card, Group, Image, Paper, Text } from "@mantine/core";

export default function PageOne() {
    return (
        <Paper>
            <Group grow>
                <Card withBorder shadow="md">
                    <Image
                        src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                        h={200}
                        alt="No way!"
                    />
                    <Text fw={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>
                </Card>
                <Card withBorder shadow="md">
                    <Image
                        src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                        h={200}
                        alt="No way!"
                    />
                    <Text fw={500} size="lg" mt="md">
                        You&apos;ve won a million dollars in cash!
                    </Text>
                </Card>
            </Group>
        </Paper>
    );
}
