import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

// const TopSmall = styled.View`
//   margin-top: 4px;
// `;
// const TopMedium = styled.View`
//   margin-top: 8px;
// `;
// const TopLarge = styled.View`
//   margin-top: 8px;
// `;
// const LeftSmall = styled.View`
//   margin-left: 4px;
// `;
// const LeftMedium = styled.View`
//   margin-left: 8px;
// `;
// const LeftLarge = styled.View`
//   margin-left: 16px;
// `;

// export const Spacer = ({ variant }) => {
//   if (variant === "top.medium") {
//     return <TopMedium />;
//   }
//   if (variant === "top.large") {
//     return <TopLarge />;
//   }
//   if (variant === "left.small") {
//     return <LeftSmall />;
//   }
//   if (variant === "left.medium") {
//     return <LeftMedium />;
//   }
//   if (variant === "left.large") {
//     return <LeftLarge />;
//   }
//   return <TopSmall />;
// };

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  bottom: "marginBottom",
  right: "marginRight",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const positionIndex = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${positionIndex}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position = "top", size = "small", children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

// Spacer.defaultProps = {
//   position: "top",
//   size: "small",
// };
