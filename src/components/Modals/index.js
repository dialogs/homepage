import { connect } from 'react-redux';
import { closeOfferModal } from '../../actions/modals';

import { Modals } from './Modals';

const mapStateToProps = ({ modals }) => {
  return {
    isOfferModalOpen: modals.isOfferModalOpen,
  };
};

const mapDispatchToProps = { closeOfferModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modals);
