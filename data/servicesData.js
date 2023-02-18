export const scrollToContact = (e) => {
  e.preventDefault();
  const element = document.getElementById("form");
  element.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};
