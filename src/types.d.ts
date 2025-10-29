// Global type declarations for the project

type Constructor<T = {}> = new (...args: any[]) => T;

// GSAP namespace extension for backward compatibility
declare namespace gsap {
  namespace core {
    type Timeline = gsap.core.Timeline;
  }
}
