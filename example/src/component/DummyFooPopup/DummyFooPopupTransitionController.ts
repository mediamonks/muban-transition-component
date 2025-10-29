import MubanTransitionController from '../../../../src/lib/util/MubanTransitionController';
import DummyFooPopup from './DummyFooPopup';

class DummyFooPopupTransitionController extends MubanTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(timeline: gsap.core.Timeline, parent: DummyFooPopup): void {
    const title: HTMLElement = parent.getElement('.js-title');

    timeline.fromTo(
      this.parentController.element,
      {
        duration: 0.2,
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        duration: 0.2,
        opacity: 1,
        scale: 1,
        pointerEvents: 'all',
        clearProps: 'all',
        ease: 'back.out',
      },
    );
    timeline.from(title, { duration: 0.8, opacity: 0 }, 0.4);
    timeline.from(
      title,
      {
        duration: 0.8,
        y: 30,
        ease: 'expo.out',
        clearProps: 'all',
      },
      0.4,
    );
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(timeline: gsap.core.Timeline, parent: DummyFooPopup): void {
    timeline.to(parent.element, {
      duration: 0.2,
      scale: 0,
      opacity: 0,
      pointerEvents: 'none',
      clearProps: 'scale',
      ease: 'back.in',
    });
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {}
}

export default DummyFooPopupTransitionController;
