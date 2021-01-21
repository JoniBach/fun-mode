import { Card, CardMedia } from "../card/card";

export const ProductList = (props) => {
  return <div>{props.children}</div>;
};

export const ProductListItem = (props) => {
  return (
    // <li>
    <Card row={true}>
      <CardMedia src={props.src} height={200} width={200}></CardMedia>
      <div style={{  textAlign: props.textAlign ? props.textAlign : "left"  }}>
        {/* <CardMedia>s */}
          <div style={{paddingLeft: 10}}>{props.children}</div>
        {/* </CardMedia> */}
      </div>
    </Card>
    // </li>
  );
};
