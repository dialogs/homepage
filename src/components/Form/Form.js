import React from 'react';
import { styled } from 'astroturf';
import { FormattedHTMLMessage } from 'react-intl';

export const Form = styled.form``;

export const FormBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;

  & :global(.input),
  & :global(.select),
  & :global(.checkbox) {
    flex: 0 0 100%;
    margin-bottom: 8px;

    @media (--tablet-viewport) {
      margin-bottom: 32px;
      flex-basis: calc(50% - var(--padding-side-columns) / 2);
    }
  }

  & :global(.input) {
    @media (--tablet-landscape-viewport) {
      margin-bottom: 15px;
    }
  }

  & :global(.checkbox) {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;

    @media (--tablet-viewport) {
      margin-bottom: 32px;
    }
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;

  @media (--mobile-viewport) {
    & :global(.button) {
      width: 100%;
    }
  }

  @media (--tablet-viewport) {
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  @media (--tablet-landscape-viewport) {
    margin-top: 30px;
  }
`;

export const FormInfo = styled.div`
  flex: 1 1 auto;
  min-width: 0px;
  min-height: 0px;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-color-main-03);

  @media (--mobile-viewport) {
    padding-left: 0;
    margin-top: 40px;
  }

  @media (--tablet-viewport) {
    padding-left: 40px;
    margin-top: 0;
  }
`;

export const FormError = styled.div``;

export function FormErrorMessage({ id = 'form_error_message' }) {
  return (
    <FormError>
      <FormattedHTMLMessage id={id} />
    </FormError>
  );
}

export const FormSuccess = styled.div``;

export function FormSuccessMessage({ id = 'form_success_message' }) {
  return (
    <FormSuccess>
      <FormattedHTMLMessage id={id} />
    </FormSuccess>
  );
}

export const FormPending = styled.div``;

export function FormPendingMessage({ id = 'form_pending' }) {
  return (
    <FormPending>
      <FormattedHTMLMessage id={id} />
    </FormPending>
  );
}
