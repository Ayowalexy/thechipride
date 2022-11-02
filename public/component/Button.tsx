import { Button, ButtonProps, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface btnProps {
  width: string | number;
  height: string | number;
  others?: ButtonProps;
  children: ReactNode;
}

const IButton = ({
  width,
  height,
  children,
  others,
}: btnProps): JSX.Element => {
  const theme = useTheme();

  const { black } = theme.colors.brand;
  return (
    <Button 
        backgroundColor={black} 
        _hover={{
            backgroundColor: `rgba(0,0,0,0.7)`
        }} 
        color={"#fff"} 
        width={width} 
        height={height} 
        {...others}>
      {children}
    </Button>
  );
};


export default IButton