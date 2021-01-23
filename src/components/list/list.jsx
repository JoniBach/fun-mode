import { Card, CardMedia } from "../card/card";

export const ProductList = (props) => {
  return <div>{props.children}</div>;
};

export const ProductListItem = (props) => {
  return (
    // <li>
    <Card row={true} p={props.p} link={props.link}>
      <CardMedia src={props.src} height={150} width={150}></CardMedia>
      <div style={{  textAlign: props.textAlign ? props.textAlign : "left"  }}>
        {/* <CardMedia>s */}
          <div style={{paddingLeft: 10}}>{props.children}</div>
        {/* </CardMedia> */}
      </div>
    </Card>
    // </li>
  );
};
