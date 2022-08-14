import { FlexComponent } from "./Flex.types";

export const Flex: FlexComponent = ({
  children,
  alignItems,
  flexDirection,
  flexGrow,
  flexShrink,
  gap,
  justifyContent,
  ...props
}) => (
  <div
    style={{
      display: "flex",
      alignItems,
      flexDirection,
      flexGrow,
      flexShrink,
      gap,
      justifyContent,
    }}
    {...props}
  >
    {children}
  </div>
);
