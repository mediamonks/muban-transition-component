import gsap from 'gsap';
import TransitionDirection from '@mediamonks/transition-controller/'lib/enum/TransitionDirection';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import DummyFoo from './DummyFoo';
import PrimaryButton from '../../button/PrimaryButton/PrimaryButton';

class DummyFooTransitionController extends MubanTransitionController {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(timeline: gsap.core.Timeline, parent: any): void {
    parent.test();

    const textContent: HTMLElement = parent.getElement('.js-text-content');
    const loopingTitle: HTMLElement = parent.getElement('.js-looping-title');
    const loopingAnimation: HTMLElement = parent.getElement('.js-loop-animation');

    timeline.from(parent.getElement('.js-background'), {
      duration: 1.2,
      width: 0,
      ease: 'expo.inOut',
      clearProps: 'width',
    });
    timeline.addLabel('afterBg', '-=0.6');

    timeline.from(textContent, { opacity: 0, duration: 0.8 }, 'afterBg');
    timeline.from(
      textContent,
      {
        y: 30,
        ease: 'expo.out',
        clearProps: 'all',
        duration: 0.8,
      },
      'afterBg',
    );

    const component = <PrimaryButton>getComponentForElement(parent.getElement('.js-button-open'));

    timeline.add(this.getTimeline(component, TransitionDirection.IN), 'afterBg+=0.2');
    timeline.add(
      this.getTimeline(<HTMLElement>parent.getElement('.js-button-open-2'), TransitionDirection.IN),
      'afterBg+=0.2',
    );

    timeline.from(loopingTitle, { duration: 0.8, opacity: 0 }, 'afterBg+=0.4');
    timeline.from(loopingTitle, { duration: 0.8, y: 20, ease: 'expo.out' }, 'afterBg+=0.4');

    timeline.from(loopingAnimation, { duration: 0.8, opacity: 0 }, 'afterBg+=0.8');
    timeline.from(loopingAnimation, { duration: 0.8, y: 20, ease: 'expo.out' }, 'afterBg+=0.8');
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(timeline: gsap.core.Timeline, parent: DummyFoo): void {
    timeline.to(parent.element, { duration: 0.8, opacity: 0 });
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {IMubanTransitionMixin} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(timeline: gsap.core.Timeline, parent: DummyFoo): void {
    timeline.yoyo(true);

    timeline.to(parent.getElement('.js-loop-animation'), {
      duration: 1,
      scale: 0.9,
      yPercent: 50,
      ease: 'expo.inOut',
    });
    timeline.to(parent.getElement('.js-loop-animation'), { duration: 0.5 });
    timeline.to(parent.getElement('.js-loop-animation'), {
      duration: 0.5,
      xPercent: 50,
      ease: 'expo.inOut',
    });
    timeline.to(parent.getElement('.js-loop-animation'), {
      duration: 0.5,
      xPercent: -50,
      ease: 'expo.inOut',
    });
  }
}

export default DummyFooTransitionController;
