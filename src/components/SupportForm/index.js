import { connect } from 'react-redux';
import { submitSupportForm } from '../../actions/forms';

import { SupportForm } from './SupportForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { onSubmit: submitSupportForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportForm);
