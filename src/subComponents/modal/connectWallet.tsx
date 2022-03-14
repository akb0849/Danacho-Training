import * as React from 'react';

import Modal from '@mui/material/Modal';
import { ButtonContainer, ButtonTitle, ConnectButton, ConnectWalletButton, Container, Logo} from './connectWalletElements';
import MetamaskLogo from '../../assets/metamask.png'
import WalletConnectLogo from '../../assets/wallet.png'

export default function ConnectWallet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ConnectWalletButton onClick={handleOpen}>Connect Wallet</ConnectWalletButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <ButtonContainer>
            <ConnectButton>
              <Logo src={MetamaskLogo} alt="" />
              <ButtonTitle>Metamask</ButtonTitle>
            </ConnectButton>
            <ConnectButton>
              <Logo src={WalletConnectLogo} alt="" />
              <ButtonTitle>Wallet Connect</ButtonTitle>
            </ConnectButton>
          </ButtonContainer>
        </Container>
      </Modal>
    </div>
  );
}