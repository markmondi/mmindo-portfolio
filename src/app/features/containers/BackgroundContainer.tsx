import { BackgroundImage } from "@mantine/core";
import { ReactNode } from "react";

type BackgroundContainerProps = {
    children: ReactNode;
    src?: string;
};

export default function BackgroundContainer({ children, src }: BackgroundContainerProps) {
    return (
        <BackgroundImage
            src={src ?? "/images/page-one-background-image.png"}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            {children}
        </BackgroundImage>
    );
}
