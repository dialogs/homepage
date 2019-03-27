import { connect } from 'react-redux';
import { openMobileMenu, closeMobileMenu } from '../../actions/app';
import { openOfferModal } from '../../actions/modals';

import { Header } from './Header';

const mapStateToProps = ({ app }) => {
  return {
    isMobileMenuOpen: app.isMobileMenuOpen,
  };
};

const mapDispatchToProps = { openMobileMenu, closeMobileMenu, openOfferModal };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
