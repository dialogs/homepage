import { connect } from 'react-redux';
import { submitPartnerForm } from '../../actions/forms';

import { PartnerForm } from './PartnerForm';

const mapStateToProps = ({ forms }) => {
  return {
    error: forms.partner.error,
    pending: forms.partner.pending,
    value: forms.partner.value,
  };
};

const mapDispatchToProps = { onSubmit: submitPartnerForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PartnerForm);
