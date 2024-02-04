import styled from "styled-components";
import { MdOutlineToken } from "react-icons/md";
import { FC } from "react";

interface PropsType {
  width?: string;
  height?: string;
}

const TokenIcon: FC<PropsType> = ({ width, height }) => {
  return (
    <Box width={width} height={height}>
      <Icon></Icon>
    </Box>
  );
};

export default TokenIcon;

const Box = styled.div<PropsType>`
  position: relative;
  width: ${(props) => (props.width ? props.width : "25px")};
  height: ${(props) => (props.height ? props.height : "25px")};
  border-radius: 50%;
  background-color: #62617d;
`;

const Icon = styled(MdOutlineToken)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  color: #fff;
`;
