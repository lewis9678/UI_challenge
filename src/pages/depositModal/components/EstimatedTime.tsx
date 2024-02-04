import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";

const EstimatedTime = () => {
  return (
    <Box>
      <ClockIcon />
      <Time>
        Estimated time: <b>20 seconds</b>
      </Time>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${(props) => props.theme.secondaryColor};
`;

const ClockIcon = styled(FaRegClock)`
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.reverseColor};
`;

const Time = styled.div`
  flex: 1;
  margin-left: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.reverseColor};
`;

export default EstimatedTime;
