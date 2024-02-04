import { FC, ReactNode } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

interface PropsType {
  isShow: boolean;
  title: string;
  confirmTxt: string;
  onConfirm: () => void;
  onClose: () => void;
  children?: ReactNode;
}

const CommonModal: FC<PropsType> = ({
  title,
  isShow,
  confirmTxt,
  onConfirm,
  onClose,
  children,
}) => {
  const handleConfirm = () => {
    onConfirm && onConfirm();
  };

  const handleClose = () => {
    onClose && onClose();
  };

  return isShow ? (
    <Container>
      <Content>
        <Header>
          <Title className={"title"}>{title}</Title>
          <CloseIconBox className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </CloseIconBox>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <ConfirmBtn onClick={handleConfirm}>{confirmTxt}</ConfirmBtn>
          <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
        </Footer>
      </Content>
    </Container>
  ) : null;
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 485px;
`;

const Content = styled.div`
  padding: 15px 18px 28px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.primaryColor};
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.reverseColor};
`;

const CloseIconBox = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.sideColor};
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.reverseColor};
`;

const Main = styled.div`
  width: 100%;
  margin: 30px 0 18px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

const ConfirmBtn = styled.button`
  width: 100%;
  height: 64px;
  line-height: 64px;
  margin-bottom: 14px;
  border-radius: 6px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.reverseColor};
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelBtn = styled.a`
  text-align: center;
  color: #727d8d;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export default CommonModal;
