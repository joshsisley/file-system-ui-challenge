const Header = () => {
  const headerEl = document.createElement('div');
  headerEl.className = 'file-list-header grid';

  const headerNameEl = document.createElement('div');
  headerNameEl.className = 'col col-3';
  headerNameEl.innerHTML = 'Name';

  const headerModifiedDateEl = document.createElement('div');
  headerModifiedDateEl.className = 'col col-2';
  headerModifiedDateEl.innerHTML = 'Date Modified';

  const headerSizeEl = document.createElement('div');
  headerSizeEl.className = 'col';
  headerSizeEl.innerHTML = 'Size';

  headerEl.appendChild(headerNameEl);
  headerEl.appendChild(headerModifiedDateEl);
  headerEl.appendChild(headerSizeEl);

  return headerEl;
}

export default Header;