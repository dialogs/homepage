import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Container } from '../Container/Container';
import links from '../../constants/links';
import './Footer.css';

export function Footer({ locale }) {
  return (
    <footer className="site__footer">
      <div className="footer__top">
        <Container>
          <div className="footer__top-content">
            <div className="footer__top-content-item footer__contacts">
              <div className="footer__contacts-item footer__contacts-item--phone">
                <a href="tel:+78007758202">+7 (800) 775-8202</a>
              </div>
              <div className="footer__contacts-item footer__contacts-item--email">
                <a
                  href={`mailto:${links.email.info}`}
                  className="link--default link--default--inverse"
                >
                  {links.email.info}
                </a>
              </div>
            </div>
            <div className="footer__top-content-item footer__nav-box">
              <div className="footer__social">
                <div className="footer__social-item" data-social="facebook">
                  <a
                    href={links.facebook}
                    className="footer__social-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      width="11"
                      height="23"
                      viewBox="0 0 11 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.19817 22.9015V11.4494H10.371L10.7915 7.50296H7.19817L7.20357 5.52772C7.20357 4.49845 7.30164 3.94695 8.78544 3.94695H10.769V0H7.59575C3.78396 0 2.44235 1.91444 2.44235 5.13395V7.50345H0.0664062V11.4498H2.44235V22.9015H7.19817Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </a>
                </div>
                <div className="footer__social-item" data-social="vkontakte">
                  <a
                    href={links.vk}
                    className="footer__social-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      width="23"
                      height="14"
                      viewBox="0 0 23 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2964 13.6523C12.2964 13.6523 12.6984 13.6075 12.9044 13.3861C13.0929 13.1832 13.0863 12.8004 13.0863 12.8004C13.0863 12.8004 13.0612 11.0126 13.8903 10.7487C14.7075 10.4891 15.7566 12.4776 16.8701 13.2422C17.7111 13.8202 18.3496 13.6937 18.3496 13.6937L21.325 13.6523C21.325 13.6523 22.8807 13.5563 22.1432 12.3313C22.0822 12.231 21.7128 11.425 19.9315 9.76912C18.0653 8.03591 18.3158 8.31628 20.5623 5.31766C21.9307 3.49172 22.4776 2.377 22.3066 1.90028C22.1443 1.44436 21.1376 1.56542 21.1376 1.56542L17.7885 1.58613C17.7885 1.58613 17.5401 1.55235 17.3559 1.66251C17.1762 1.7705 17.0597 2.02243 17.0597 2.02243C17.0597 2.02243 16.5301 3.43505 15.8231 4.63706C14.3316 7.17203 13.7356 7.30617 13.4916 7.14915C12.924 6.7815 13.0656 5.67441 13.0656 4.8879C13.0656 2.4304 13.4382 1.40622 12.3411 1.14111C11.9772 1.05274 11.7092 0.994986 10.7777 0.985178C9.58249 0.973092 8.57146 0.989537 7.99839 1.2698C7.61706 1.45635 7.32295 1.87303 7.50274 1.89701C7.7239 1.92643 8.225 2.03224 8.49084 2.39443C8.83401 2.86234 8.82206 3.91167 8.82206 3.91167C8.82206 3.91167 9.01923 6.80439 8.36117 7.16331C7.9102 7.4098 7.29138 6.90692 5.96108 4.60654C5.2802 3.42851 4.76589 2.12606 4.76589 2.12606C4.76589 2.12606 4.66682 1.88284 4.48917 1.75197C4.27461 1.59376 3.97496 1.54472 3.97496 1.54472L0.79258 1.56542C0.79258 1.56542 0.31431 1.5785 0.138893 1.78684C-0.016914 1.97121 0.126946 2.35401 0.126946 2.35401C0.126946 2.35401 2.61854 8.19076 5.44027 11.1326C8.02782 13.8291 10.965 13.6523 10.965 13.6523H12.2964Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </a>
                </div>
                <div className="footer__social-item" data-social="youtube">
                  <a
                    href={links.youtube}
                    className="footer__social-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      width="28"
                      height="21"
                      viewBox="0 0 28 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.7354 5.29742C26.7354 5.29742 26.4754 3.34318 25.6763 2.48275C24.6621 1.35488 23.5263 1.34824 23.0054 1.28429C19.2746 0.996094 13.6788 0.996094 13.6788 0.996094H13.6663C13.6663 0.996094 8.07042 0.996094 4.34042 1.28429C3.81958 1.34824 2.68458 1.35488 1.66958 2.48275C0.87125 3.34318 0.610417 5.29742 0.610417 5.29742C0.610417 5.29742 0.34375 7.59052 0.34375 9.88362V12.033C0.34375 14.3278 0.610417 16.6201 0.610417 16.6201C0.610417 16.6201 0.870417 18.5735 1.66958 19.4322C2.68458 20.5601 4.01542 20.526 4.60875 20.644C6.74125 20.8616 13.6729 20.9289 13.6729 20.9289C13.6729 20.9289 19.2746 20.9189 23.0054 20.634C23.5263 20.5676 24.6621 20.5609 25.6763 19.4331C26.4746 18.5743 26.7354 16.6209 26.7354 16.6209C26.7354 16.6209 27.0021 14.3278 27.0021 12.0339V9.88445C27.0021 7.59052 26.7354 5.29742 26.7354 5.29742Z"
                        fill="#1E1E1E"
                      />
                      <path
                        d="M10.3438 5.98047V15.9469L18.6771 10.9637L10.3438 5.98047Z"
                        fill="#b9bbfa"
                      />
                    </svg>
                  </a>
                </div>
                <div className="footer__social-item" data-social="twitter">
                  <a
                    href={links.twitter}
                    className="footer__social-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.61415 5.30177L9.65705 6.03547L8.94175 5.94562C6.33789 5.60121 4.06309 4.43325 2.13172 2.47163L1.18744 1.49827L0.944282 2.21707C0.429236 3.81929 0.758298 5.51136 1.83129 6.64943C2.40351 7.27838 2.2748 7.36823 1.28761 6.99384C0.944282 6.87411 0.643759 6.78426 0.615219 6.82913C0.515045 6.93397 0.858377 8.29662 1.13026 8.83573C1.50223 9.58441 2.26043 10.3182 3.09027 10.7525L3.7913 11.0969L2.96146 11.1118C2.16036 11.1118 2.13172 11.1268 2.21753 11.4413C2.50369 12.4146 3.63395 13.4478 4.89293 13.897L5.77994 14.2115L5.00737 14.6907C3.86284 15.3795 2.51796 15.7688 1.17317 15.7988C0.529315 15.8138 0 15.8736 0 15.9186C0 16.0683 1.74539 16.9069 2.76121 17.2363C5.80858 18.2097 9.42817 17.7904 12.1464 16.1282C14.0778 14.9453 16.0092 12.5943 16.9106 10.3182C17.397 9.10528 17.8834 6.889 17.8834 5.82588C17.8834 5.13706 17.9263 5.04721 18.7275 4.22357C19.1997 3.74443 19.6432 3.22032 19.729 3.0706C19.8721 2.78606 19.8578 2.78606 19.1281 3.04062C17.912 3.48987 17.7403 3.43 18.3412 2.75607C18.7848 2.27694 19.3141 1.40842 19.3141 1.15386C19.3141 1.10888 19.0995 1.18384 18.8562 1.31857C18.5987 1.46828 18.0265 1.69296 17.5973 1.82769L16.8247 2.08225L16.1237 1.58812C15.7374 1.31857 15.1937 1.01913 14.9076 0.929279C14.178 0.719595 13.062 0.749578 12.4039 0.989147C10.6156 1.66298 9.48534 3.40002 9.61415 5.30177Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </a>
                </div>
                <div className="footer__social-item" data-social="github">
                  <a
                    href={links.github}
                    className="footer__social-link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2606 21.9984C13.9272 21.9097 13.7992 21.606 13.7992 21.3363C13.7992 21.1855 13.8001 20.9212 13.803 20.5678C13.8068 19.856 13.8145 18.7829 13.8145 17.549C13.8145 16.2614 13.3922 15.4214 12.9175 14.9932C15.8597 14.6515 18.951 13.4843 18.951 8.18364C18.951 6.67678 18.438 5.4457 17.5916 4.47918C17.7282 4.13132 18.181 2.72788 17.4617 0.826874C17.4617 0.826874 16.3536 0.455973 13.8317 2.24154C12.7761 1.93574 11.645 1.78238 10.5216 1.77713C9.39892 1.78238 8.26864 1.93574 7.21469 2.24154C4.68981 0.455973 3.58026 0.826874 3.58026 0.826874C2.86285 2.72788 3.31508 4.13132 3.45225 4.47918C2.60703 5.4457 2.0909 6.67678 2.0909 8.18364C2.0909 13.4718 5.17595 14.6552 8.11064 15.0041C7.73283 15.3485 7.39036 15.9578 7.27181 16.8496C6.51782 17.2022 4.60536 17.8122 3.42694 15.7024C3.42694 15.7024 2.72825 14.3773 1.40148 14.2801C1.40148 14.2801 0.112337 14.2625 1.31111 15.1192C2.50988 15.9757 2.17716 15.5432 2.77821 17.1384C2.77821 17.1384 3.5538 19.6017 7.22959 18.7668C7.23265 19.3937 7.23771 20.0009 7.24163 20.4776C7.24497 20.8779 7.24755 21.1861 7.24755 21.3363C7.24755 21.608 7.11286 21.9144 6.77096 22C8.19537 21.9994 11.0948 21.9985 14.2606 21.9984ZM2.08724 14.9581C2.18134 15.0052 2.2846 14.9849 2.31374 14.916C2.34698 14.8473 2.29234 14.7529 2.19624 14.7076C2.10062 14.6608 1.99716 14.6802 1.96869 14.7509C1.93765 14.8196 1.99143 14.9131 2.08724 14.9581ZM2.57823 15.4777C2.66182 15.5742 2.78505 15.6025 2.848 15.5415C2.91391 15.4797 2.89701 15.352 2.81065 15.2546C2.72401 15.1585 2.6045 15.1299 2.53954 15.1909C2.47564 15.2528 2.49178 15.3815 2.57823 15.4777ZM3.0753 16.2188C3.15717 16.3416 3.28948 16.3967 3.37048 16.3379C3.45311 16.2778 3.45311 16.1304 3.37239 16.0059C3.28948 15.884 3.15908 15.8311 3.07702 15.89C2.9943 15.9489 2.9943 16.0961 3.0753 16.2188ZM3.74547 17.0538C3.85838 17.1677 4.01256 17.1901 4.08497 17.1066C4.16225 17.0241 4.12729 16.8651 4.01256 16.754C3.89879 16.6411 3.74365 16.6175 3.67038 16.7012C3.59778 16.7846 3.62988 16.9425 3.74547 17.0538ZM4.73734 17.6623C4.88703 17.7083 5.03557 17.6592 5.06748 17.5511C5.09862 17.4412 5.00061 17.3155 4.8514 17.2684C4.70056 17.2193 4.55135 17.2704 4.5203 17.3792C4.49011 17.4885 4.58793 17.615 4.73734 17.6623ZM5.86887 17.8416C6.02602 17.8397 6.15288 17.7454 6.14915 17.6316C6.14915 17.5185 6.02057 17.427 5.86343 17.4302C5.70543 17.4329 5.58143 17.5265 5.58143 17.6414C5.58315 17.7534 5.71097 17.8455 5.86887 17.8416ZM6.91032 17.7106C7.06632 17.6804 7.17551 17.5663 7.15669 17.4552C7.13682 17.3424 6.99697 17.2756 6.84078 17.304C6.68765 17.3334 6.57646 17.4474 6.59547 17.5613C6.61495 17.6715 6.757 17.74 6.91032 17.7106Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <nav className="footer__nav">
                <div className="footer__nav-list">
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/corporate/`}
                    >
                      <FormattedMessage id="menu_solutions" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/features/`}
                    >
                      <FormattedMessage id="menu_features" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/pricing/`}
                    >
                      <FormattedMessage id="menu_pricing" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/download/enterprise/`}
                    >
                      <FormattedMessage id="menu_download" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link className="footer__nav-link" to={`/${locale}/about/`}>
                      <FormattedMessage id="menu_about" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/career/`}
                    >
                      <FormattedMessage id="footer_career" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href="https://oss.dlg.im/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FormattedMessage id="menu_bounty" />
                    </a>
                  </div>
                </div>

                <div className="footer__nav-list">
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/support/`}
                    >
                      <FormattedMessage id="footer_support" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link className="footer__nav-link" to={`/${locale}/blog/`}>
                      <FormattedMessage id="menu_blog" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href="https://docs.dlg.im/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FormattedMessage id="footer_documentation" />
                    </a>
                  </div>
                  <div className="footer__nav-item">
                    <Link
                      className="footer__nav-link"
                      to={`/${locale}/patents/`}
                    >
                      <FormattedMessage id="menu_patents" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <Link className="footer__nav-link" to={`/${locale}/legal/`}>
                      <FormattedMessage id="menu_legal" />
                    </Link>
                  </div>
                  <div className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href={'/privacy_policy.pdf'}
                      download
                    >
                      <FormattedMessage id="footer_privacy_policy" />
                    </a>
                  </div>
                  <div className="footer__nav-item">
                    <a
                      className="footer__nav-link"
                      href={'/anti_corruption_policy.pdf'}
                      download
                    >
                      <FormattedMessage id="footer_anti_corruption_policy" />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer__bottom">
        <Container>
          <div className="footer__copyright">
            <span className="footer__copyright-text">
              <FormattedMessage id="footer_copyright" />
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
