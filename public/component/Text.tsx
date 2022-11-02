import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  props?: TextProps;
  children: ReactNode;
}

export const Outfit = ({ props, children }: Props): JSX.Element => (
  <Text
    fontFamily="Outfit"
    fontWeight={400}
    fontStyle="normal"
    {...props}
  >
    {children}
  </Text>
);


export const Sora = ({ props, children }: Props): JSX.Element => (
    <Text
      fontFamily="Sora"
      fontWeight={600}
      {...props}
    >
      {children}
    </Text>
  );
  