import { registerComponent } from 'muban-core';
import initComponents from 'muban-core/lib/utils/initComponents';
import cleanElement from 'muban-core/lib/utils/cleanElement';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import App from './App';
import ChildComponentB from './component/ChildComponentB/ChildComponentB';
import ChildComponentA from './component/ChildComponentA/ChildComponentA';
import { IMubanTransitionMixin } from '../../src/lib/interface/IMubanTransitionMixin';

export const getDocument = () => {
  const body = document.createElement('body');
  body.innerHTML = `
      <div id="app" data-component="app-root">
          <section data-component="child-component-a" data-scroll-component class="child-component-a">

            <button data-component="child-component-b"></button>

            <div class="js-loop-animation"></div>

          </section>
      </div>`;

  return <HTMLBodyElement>body;
};

const componentList = [ChildComponentB, ChildComponentA, App];

const nodeTemplate = <HTMLElement>getDocument().querySelector('#app');
let appNode: HTMLElement;

export const render = () => {
  appNode = nodeTemplate.cloneNode(true) as HTMLElement;
  cleanElement(appNode);

  // eslint-disable-next-line arrow-parens
  componentList.forEach(blockConstructor => registerComponent(blockConstructor));
  initComponents(appNode);
};

export const getComponent = (displayName: string) => {
  const componentElement = <HTMLElement>appNode.querySelector(`[data-component="${displayName}"]`);
  return <IMubanTransitionMixin>getComponentForElement(componentElement);
};

export const getApp = () => <IMubanTransitionMixin>getComponentForElement(appNode);
