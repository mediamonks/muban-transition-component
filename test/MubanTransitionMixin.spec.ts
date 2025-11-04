import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { TransitionDirection } from '@mediamonks/transition-controller';
import { render, getComponent } from './util/index.spec';
import { TransitionId } from './util/component/ChildComponentA/ChildComponentATransitionController';
import ChildComponentA from './util/component/ChildComponentA/ChildComponentA';

chai.use(sinonChai);

describe('MubanTransitionMixin.spec', () => {
  let component: ChildComponentA;

  before(() => {
    render();
    component = getComponent('child-component-a') as ChildComponentA;
  });

  describe('transitionOut', () => {
    it('should transitionOut the component forced', () => {
      const force = true;
      const reset = false;
      const label = TransitionId[TransitionDirection.OUT].TRANSITION_ID_1;

      const spy = sinon.spy(component.transitionController, 'transitionOut');
      expect(component.transitionOut(force, label, reset)).to.be.a('promise');
      expect(spy).to.be.calledWithExactly(force, label, reset);
      spy.restore();
    });
  });

  describe('transitionOut', () => {
    it('should transitionOut the component', () => {
      expect(component.transitionOut()).to.be.a('promise');
    });
  });

  describe('transitionIn', () => {
    it('should transitionIn the component', () => {
      expect(component.transitionIn()).to.be.a('promise');
    });
  });

  describe('transitionIn', () => {
    it('should force the transitionIn', () => {
      const force = true;
      const spy = sinon.spy(component.transitionController, 'transitionIn');

      expect(component.transitionIn(force)).to.be.a('promise');
      expect(spy).to.be.calledWithExactly(force);
      spy.restore();
    });
  });

  describe('enterView', () => {
    it('should enterView the component', () => {
      const spy = sinon.spy(component, 'transitionIn');
      expect(component.enterView()).to.be.undefined;
      expect(spy).to.be.calledOnce;
      spy.restore();
    });
  });

  describe('inViewProgress', () => {
    it('should inViewProgress the component', () => {
      expect(component.inViewProgress(1)).to.be.undefined;
    });
  });

  describe('leaveView', () => {
    it('should leaveView the component', () => {
      expect(component.leaveView()).to.be.undefined;
    });
  });

  describe('beyondView', () => {
    it('should beyondView the component 1 ', () => {
      const spy = sinon.spy(component, 'transitionIn');
      component.hasEntered = false;
      expect(component.beyondView()).to.be.undefined;
      expect(spy).to.be.calledOnce;
      spy.restore();
    });

    it('should beyondView the component 2', () => {
      const spy = sinon.spy(component, 'transitionIn');
      component.hasEntered = true;
      expect(component.beyondView()).to.be.undefined;
      expect(spy).to.be.not.called;
      spy.restore();
    });
  });

  describe('startLoopingAnimation', () => {
    it('should startLoopingAnimation the component', () => {
      expect(component.startLoopingAnimation()).to.be.undefined;
    });
  });

  // describe('startLoopingAnimation', function () {
  //   it('should startLoopingAnimation the component for specific label', () => {
  //     expect(component.startLoopingAnimation(component, TransitionId.LOOP_1, true)).to.be.undefined;
  //   });
  // });

  describe('stopLoopingAnimation', () => {
    it('should stopLoopingAnimation the component', () => {
      expect(component.stopLoopingAnimation()).to.be.undefined;
    });
  });

  describe('enterViewThreshold', () => {
    it('enterViewThreshold should be a number', () => {
      expect(component.enterViewThreshold).to.be.a('number');
    });
  });

  describe('hasEntered', () => {
    it('hasEntered should be a boolean', () => {
      expect(component.hasEntered).to.be.a('boolean');
    });
  });
});
