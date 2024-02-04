import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import TokenIcon from "../../../components/TokenIcon";

interface PropsType {
  addressFrom: string;
  addressTo: string;
  handleAddress: (address: string) => void;
}

interface InputProps {
  $paddingRight?: string;
}

const AddressComp: FC<PropsType> = ({
  addressFrom,
  addressTo,
  handleAddress,
}) => {
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleAddress(e.target.value);
  };

  const handleOpenEdit = () => setDisabled(false);

  return (
    <Container>
      <InputControl>
        <Label htmlFor="addressFrom">From Cosmos Hub</Label>
        <Control className="control">
          <TokenIcon />
          <AddressInput
            id="addressFrom"
            type="text"
            readOnly
            value={addressFrom}
          />
        </Control>
      </InputControl>
      <Arrow />
      <InputControl>
        <Label htmlFor="addressTo">To Osmosis</Label>
        <Control className="control">
          <TokenIcon />
          <AddressInput
            id="addressTo"
            type="text"
            value={addressTo}
            onChange={handleInputChange}
            disabled={disabled}
            $paddingRight={disabled ? "20px" : "0"}
          />
          {disabled && <EditIcon onClick={handleOpenEdit} />}
        </Control>
      </InputControl>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const InputControl = styled.section`
  flex: 0 0 45%;
  overflow: hidden;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #758394;
`;

const Control = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 14px;
  padding: 12px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.secondaryColor};
`;

const AddressInput = styled.input<InputProps>`
  flex: 1;
  margin-left: 6px;
  padding-right: ${(props) => props.$paddingRight};
  outline: none;
  border: none;
  color: #758394;
  background-color: transparent;
  overflow: hidden;
`;

const EditIcon = styled(MdEdit)`
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  color: #697584;
  cursor: pointer;
`;

const Arrow = styled(FaArrowRight)`
  flex: 0 0 12px;
  width: 12px;
  height: 12px;
  margin: 30px 12px 0;
  color: #758394;
`;

export default AddressComp;
