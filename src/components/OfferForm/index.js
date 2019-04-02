import { connect } from 'react-redux';
import { submitOfferForm } from '../../actions/forms';

import { OfferForm } from './OfferForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.offer.error,
    pending: forms.offer.pending,
    value: forms.offer.value,
  };
};

const mapDispatchToProps = { onSubmit: submitOfferForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferForm);
