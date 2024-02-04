import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import TokenIcon from "../../../components/TokenIcon";

interface PropsType {
  amount: string;
  handleAmountChange: (amount: string) => void;
}

const AmountComp: FC<PropsType> = ({ amount, handleAmountChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleAmountChange(e.target.value);
  };

  return (
    <InputControl>
      <LabelBox>
        <Label htmlFor="amount">Select amount</Label>
        <Balance>
          Available <b>2 ATOM</b>
        </Balance>
      </LabelBox>
      <Control className="control">
        <IconBox>
          <TokenIcon width="40px" height="40px" />
        </IconBox>
        <AmountInput
          id="amount"
          type="text"
          value={amount}
          maxLength={10}
          onChange={handleInputChange}
        />
        <TipsBox>
          <Unit>ATOM</Unit>
          <Num>≈ $1,013</Num>
        </TipsBox>
      </Control>
      <OperationsBox>
        <Operation>Max</Operation>
        <Operation>1/2</Operation>
        <Operation>1/3</Operation>
      </OperationsBox>
    </InputControl>
  );
};

const InputControl = styled.section`
  margin-bottom: 20px;
`;

const LabelBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #758394;
`;

const Balance = styled.span`
  font-size: 14px;
  color: #758394;
`;

const Control = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 70px;
  margin-top: 14px;
  border: 1px solid #5e656f;
  border-radius: 10px;
  box-sizing: border-box;
`;

const IconBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 68px;
  width: 68px;
  height: 68px;
  line-height: 68px;
  margin-right: 5px;
  border-right: 1px solid #5e656f;
  text-align: center;
`;

const AmountInput = styled.input`
  flex: 1;
  margin-left: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.reverseColor};
  background-color: transparent;
`;

const TipsBox = styled.div`
  margin: 0 20px;
  vertical-align: middle;
`;

const Unit = styled.span`
  margin-right: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.reverseColor};
  vertical-align: middle;
`;

const Num = styled.span`
  font-size: 12px;
  color: #758394;
  vertical-align: middle;
`;

const OperationsBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`;

const Operation = styled.span`
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #758394;
  background-color: ${(props) => props.theme.sideColor};
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export default AmountComp;
