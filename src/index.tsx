import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function getTextNodes(element: HTMLElement): any[] {
  let nodes: any[] = [];
  if (!!element) {
    for (const node of Array.from(element.childNodes)) {
      if (node.nodeType === 3) {
        nodes.push(node);
      } else if (
        node.nodeType === 1 ||
        node.nodeType === 9 ||
        node.nodeType === 11
      ) {
        nodes = [...nodes, ...getTextNodes(node as any)];
      }
    }
  }

  return nodes;
}

getTextNodes(window.document.body).forEach((node: Text) => {
  const span = document.createElement('span');
  span.className = `canhighlight`;

  span.addEventListener('click', () => {
    const mark = document.createElement('mark');
    mark.className = `highlighted`;
    mark.appendChild(node.cloneNode(true));
    span.replaceWith(mark);
  });

  span.append(node.cloneNode(true));

  node.replaceWith(span);
});
