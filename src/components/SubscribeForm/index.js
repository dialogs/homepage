import { connect } from 'react-redux';
import { submitSubscribeForm } from '../../actions/forms';

import { SubscribeForm } from './SubscribeForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { onSubmit: submitSubscribeForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscribeForm);
