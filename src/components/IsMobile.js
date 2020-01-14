export const mobileThreshold = 800;

export function isMobile() {
  if (typeof window !== "undefined") {
    if (window.innerWidth < mobileThreshold) {
      return true;
    }
  }
  return false;
}