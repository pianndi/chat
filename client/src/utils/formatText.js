
const isUrl = word => {
  const urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
  return word.match(urlPattern)
}
const addMarkup = word => {
  return isUrl(word) ?
    `<a href="${word}" target="_blank" class="link">${word}</a>` :
    word
}
export const escapeHtml = (text) => {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }

  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}
export const formatText = (text) => {
  return escapeHtml(text)
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')

    .replace(/~([^~]+)~/g, '<strike>$1</strike>').split(' ').map(addMarkup).join(' ')
}

export const formatTextPreview = (text) => {
  return escapeHtml(text)
    .replace(/\*([^*]+)\*/g, '<span class="text-transparent">*</span><span style="text-shadow: 0px 0px 1px black;">$1</span ><span class="text-transparent">*</span>')
    .replace(/_([^_]+)_/g, '<span class="text-transparent">_</span><em>$1</em><span class="text-transparent">_</span>')
    .replace(/`([^`]+)`/g, '<span class="text-transparent">`</span><code>$1</code><span class="text-transparent">`</span>')

    .replace(/~([^~]+)~/g, '<span class="text-transparent">~</span><strike>$1</strike><span class="text-transparent">~</span>').split(' ').map(addMarkup).join(' ')
}