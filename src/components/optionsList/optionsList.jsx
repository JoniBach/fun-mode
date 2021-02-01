import "./optionsList.css";
export const OptionsList = (props) => {
  return <div className="list-container">{props.children}</div>;
};
export const OptionsListItem = (props) => {
  return (
    <div className="item-root" >
      <div className="item-container">{props.children}</div>
    </div>
  );
};
