import packageJson from '../package.json';

export function getVersion() {
  return `${packageJson.version}:${process.env.BUILD_NUM || 'DEV'}`;
}
