export const scrollToElement = (element, config) => {
  setTimeout(() => {
    element?.scrollIntoView({
      block: config?.block || "center",
      behavior: config?.behavior || "smooth",
    });
  }, config?.timeout || 0);
};
