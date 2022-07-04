// eslint-disable-next-line import/prefer-default-export
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
