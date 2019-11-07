import packageJson from '../package.json';

export function getVersion({
  platformVersion = packageJson.version,
  buildNum = process.env.BUILD_NUM,
}) {
  return [appVersion, platformVersion, buildNum].filter(Boolean).join('.');
}
