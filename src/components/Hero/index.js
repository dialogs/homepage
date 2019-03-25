import { connect } from 'react-redux';
import { openOfferModal } from '../../actions/modals';

import { Hero } from './Hero';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = { openOfferModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
