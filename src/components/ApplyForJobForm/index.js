import { connect } from 'react-redux';
import { submitApplicationForm } from '../../actions/forms';

import { ApplyForJobForm } from './ApplyForJobForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.support.error,
    pending: forms.support.pending,
    value: forms.support.value,
  };
};

const mapDispatchToProps = { onSubmit: submitApplicationForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApplyForJobForm);
