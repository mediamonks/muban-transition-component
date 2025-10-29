// eslint-disable-next-line import/no-extraneous-dependencies
import CoreComponent from 'muban-core/lib/CoreComponent';
import { getComponentForElement } from 'muban-core';
import mubanTransitionCoreMixin from '../../../../../src/lib/mixin/MubanTransitionCoreMixin';
import mubanTransitionMixin from '../../../../../src/lib/mixin/MubanTransitionMixin';
import DummyFooTransitionController from './DummyFooTransitionController';
import DummyFooPopup from '../../DummyFooPopup/DummyFooPopup';

export default class DummyFoo extends mubanTransitionMixin(
  mubanTransitionCoreMixin(CoreComponent),
) {
  static displayName: string = 'dummy-foo';
  public enterViewThreshold: number = 0;
  public transitionController: DummyFooTransitionController;

  private dummyFooPopup: DummyFooPopup;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new DummyFooTransitionController(this);
    this.addEventListeners();
    this.dummyFooPopup = getComponentForElement(
      this.element.querySelector(`[data-component="${DummyFooPopup.displayName}"]`),
    );
  }

  /**
   * @public
   * @method inViewProgress
   */
  public inViewProgress(progress: number): void {
    (this.element.querySelector('.js-progress') as HTMLElement).style.width = `${progress * 100}%`;
  }

  /**
   * @public
   * @method test
   */
  public test(): void {}

  /**
   * @private
   * @method addEventListeners
   */
  private addEventListeners(): void {
    this.element
      .querySelector('.js-button-open')!
      .addEventListener('click', this.handleOpenPopupClick.bind(this));
  }

  /**
   * @private
   * @method handleOpenPopupClick
   */
  private handleOpenPopupClick(): void {
    this.dummyFooPopup.transitionIn();
  }

  public dispose() {
    super.dispose();
  }
}
