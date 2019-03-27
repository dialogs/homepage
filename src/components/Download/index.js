import { connect } from 'react-redux';
import { openOfferModal } from '../../actions/modals';

import { Download } from './Download';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { openOfferModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Download);
