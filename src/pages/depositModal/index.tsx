import CommonModal from "../../components/Modal";
import { useState } from "react";
import AddressComp from "./components/Address";
import AmountComp from "./components/Amount";
import EstimatedTime from "./components/EstimatedTime";
import transferData from "../../mockData/transferInfo.json";

const DepositModal = () => {
  const [visible, setVisible] = useState(true);
  const [addressTo, setAddressTo] = useState(transferData.addressTo);
  const [amount, setAmount] = useState(transferData.balance);

  const handleAddressTo = (address: string) => {
    setAddressTo(address);
  };

  const handleConfirm = () => {};

  const handleChangeAmount = (amount: string) => {
    setAmount(amount);
  };

  const handleClose = () => {};
  return (
    <CommonModal
      title="Deposit ATOM"
      confirmTxt="Transfer"
      onConfirm={handleConfirm}
      onClose={handleClose}
      isShow={visible}
    >
      <AddressComp
        addressFrom={transferData.addressFrom}
        addressTo={addressTo}
        handleAddress={handleAddressTo}
      />
      <AmountComp amount={amount} handleAmountChange={handleChangeAmount} />
      <EstimatedTime />
    </CommonModal>
  );
};

export default DepositModal;
