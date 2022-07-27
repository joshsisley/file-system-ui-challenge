import './styles.scss';
import * as DataService from "./services/data/data.service";

import LeftPane from './components/LeftPane/index';
import RightPane from './components/RightPane/index';

window.addEventListener('load', () => {
  const el = document.createElement('div');
  el.className = 'container';

  // Get the file tree from the service
  const fileTree = DataService.getFileTree();
  
  const leftPane = LeftPane(fileTree);
  const rightPane = RightPane(fileTree);

  el.appendChild(leftPane);
  el.appendChild(rightPane);

  document.body.replaceChildren(el);
});
