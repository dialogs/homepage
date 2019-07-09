import { connect } from 'react-redux';
import { openOfferModal } from '../../actions/modals';

import { DownloadHeader as DownloadHeaderComponent } from './DownloadHeader';

export const DownloadHeader = connect(
  () => ({}),
  { openOfferModal },
)(DownloadHeaderComponent);

export * from './DownloadEnterpriseHeader';
export * from './DownloadDesktop';
export * from './DownloadMobile';
export * from './DownloadWeb';
