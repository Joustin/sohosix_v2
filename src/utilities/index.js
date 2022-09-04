export const bgColorSwitch = (props) => {
  const Comp_WhiteBG = "white";

  if (Object.values(props.match.params).length) {
    document.body.classList.add(Comp_WhiteBG);
  } else {
    document.body.classList.remove(Comp_WhiteBG);
  }
};
