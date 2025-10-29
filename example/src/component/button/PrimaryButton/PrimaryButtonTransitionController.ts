import MubanTransitionController from '../../../../../src/lib/util/MubanTransitionController';
import PrimaryButton from './PrimaryButton';

class PrimaryButtonTransitionController extends MubanTransitionController {
  /**
   * Use this method to setup your transition in timeline
   *
   * @protected
   * @method setupTransitionInTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionInTimeline(timeline: gsap.core.Timeline, parent: PrimaryButton): void {
    timeline.fromTo(
      parent.element,
      {
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        clearProps: 'all',
        ease: 'expo.out',
      },
    );
  }

  /**
   * Use this method to setup your transition out timeline
   *
   * @protected
   * @method setupTransitionOutTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupTransitionOutTimeline(timeline: gsap.core.Timeline, parent: PrimaryButton): void {
    timeline.to(parent.element, { duration: 0.6, opacity: 0 });
  }

  /**
   * Use this method to setup your looping timeline
   *
   * @protected
   * @method setupLoopingAnimationTimeline
   * @param {gsap.core.Timeline} timeline The transition in timeline
   * @param {PrimaryButton} parent The reference to the parent controller
   * @param {string} id The transition id that was provided when constructing the controller
   */
  protected setupLoopingAnimationTimeline(): void {}
}

export default PrimaryButtonTransitionController;
