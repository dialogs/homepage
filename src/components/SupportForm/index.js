import { connect } from 'react-redux';
import { submitSupportForm } from '../../actions/forms';

import { SupportForm } from './SupportForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.support.error,
    pending: forms.support.pending,
    value: forms.support.value,
  };
};

const mapDispatchToProps = { onSubmit: submitSupportForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportForm);
