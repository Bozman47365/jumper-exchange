import React from 'react';
import { Modal, Typography } from '@mui/material';

import { ButtonPrimary } from '@transferto/shared';
import { useTranslation } from 'react-i18next';
import {
  MultisigConfirmationModalContainer,
  MultisigConfirmationModalIconContainer,
  MultisigConfirmationModalIcon,
} from './MultiSigConfirmationModal.styles';

export const MultisigConfirmationModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const i18Path = 'multisig.transactionInitiated';

  const { t: translate } = useTranslation();

  return (
    <Modal open={open} onClose={onClose}>
      <MultisigConfirmationModalContainer>
        <MultisigConfirmationModalIconContainer>
          <MultisigConfirmationModalIcon />
        </MultisigConfirmationModalIconContainer>
        <Typography
          fontWeight={700}
          textAlign={'center'}
          marginY={4}
          style={{
            fontSize: '1.125rem',
          }}
        >
          {translate(`${i18Path}.title`)}
        </Typography>
        <Typography fontSize={'1.125 rem'} marginY={4}>
          {translate(`${i18Path}.description`)}
        </Typography>
        <ButtonPrimary
          style={{
            width: '100%',
          }}
          variant="contained"
          onClick={onClose}
        >
          {translate(`multisig.button.cta`)}
        </ButtonPrimary>
      </MultisigConfirmationModalContainer>
    </Modal>
  );
};
