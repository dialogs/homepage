import UAParser from 'ua-parser-js';

export function getOS() {
  const userAgent = new UAParser(navigator.userAgent);
  const os = userAgent.getOS();

  switch (os.name) {
    case 'Mint':
    case 'Mageia':
    case 'VectorLinux':
    case 'Joli':
    case 'Ubuntu':
    case 'Debian':
    case 'SUSE':
    case 'Gentoo':
    case 'Arch':
    case 'Slackware':
    case 'Fedora':
    case 'Mandriva':
    case 'CentOS':
    case 'PCLinuxOS':
    case 'RedHat':
    case 'Zenwalk':
    case 'Linpus':
    case 'Linux':
    case 'Hurd':
      return 'Linux';

    case 'Mac OS':
      return 'macOS';

    case 'Windows':
    default:
      return 'Windows';
  }
}
