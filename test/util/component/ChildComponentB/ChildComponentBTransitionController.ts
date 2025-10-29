import MubanTransitionController from '../../../../src/lib/util/MubanTransitionController';
import ChildComponentB from './ChildComponentB';

class ChildComponentBTransitionController extends MubanTransitionController {
  /**
   * @public
   * @method setupTransitionInTimeline
   * @description Use this method to setup your transition in timeline
   * */
  protected setupTransitionInTimeline(timeline: gsap.core.Timeline, parent: ChildComponentB): void {
    timeline.fromTo(parent.element, { opacity: 0 }, { opacity: 1, duration: 0.2 });
  }

  /**
   * @public
   * @method setupTransitionOutTimeline
   * @description Use this method to setup your transition out timeline
   * */
  protected setupTransitionOutTimeline(
    timeline: gsap.core.Timeline,
    parent: ChildComponentB,
  ): void {
    timeline.to(parent.element, { opacity: 0, duration: 1 });
  }

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {}
}

export default ChildComponentBTransitionController;
