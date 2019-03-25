import { connect } from 'react-redux';
import { submitOfferForm } from '../../actions/forms';

import { OfferForm } from './OfferForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { onSubmit: submitOfferForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OfferForm);
