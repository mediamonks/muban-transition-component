import { expect } from 'chai';
import { TransitionDirection } from 'transition-controller';
import { render, getComponent, getApp } from './util/index.spec';
import ChildComponentA from './util/component/ChildComponentA/ChildComponentA';
import App from './util/App';

describe('MubanTransitionController.spec', () => {
  let component: ChildComponentA;
  let app: App;

  before(() => {
    render();
    app = getApp() as App;
    component = getComponent('child-component-a') as ChildComponentA;
  });

  // describe('getTimelineForComponent', () => {
  it('should try to get a component by string', () => {
    // @ts-expect-error
    expect(app.transitionController.getComponent('[data-component="child-component-a"]')).to.be.a(
      'object',
    );
  });

  it('should try to get a  component by Component', () => {
    // @ts-expect-error
    expect(component.transitionController.getComponent(component)).to.be.a('object');
  });

  it('should try to get a  component by Element', () => {
    // @ts-expect-error
    expect(component.transitionController.getComponent(component.element)).to.be.a('object');
  });

  it('should throw error for getComponent ', () => {
    expect(
      // @ts-expect-error
      component.transitionController.getComponent.bind(component.transitionController),
      // eslint-disable-next-line no-useless-concat
    ).to.throw('The requested component [undefined]' + ' does not exist');
  });

  // describe('getTimelineForComponent', () => {
  it('should try to get a transitionOUTt timeline by Component', () => {
    expect(component.transitionController.getTimeline(component, TransitionDirection.OUT)).to.be.a(
      'object',
    );
  });

  it('should try to get a transitionIN timeline by Component', () => {
    expect(component.transitionController.getTimeline(component, TransitionDirection.IN)).to.be.a(
      'object',
    );
  });

  it('should try to get a transition timeline by Element', () => {
    expect(component.transitionController.getTimeline(component.element)).to.be.a('object');
  });
});
