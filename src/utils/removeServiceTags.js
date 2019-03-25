export function removeServiceTags(tags) {
  if (!tags) {
    return null;
  }

  return tags.filter(({ name }) => name.indexOf('#') === -1);
}
