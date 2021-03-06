import { Card, CardContent } from "../card/card";

export const ProductList = (props) => {
  return <div>{props.children}</div>;
};

export const ProductListItem = (props) => {
  return (
    // <li>
    <Card row={true} p={props.p} link={props.link}>
      <CardContent src={props.src} height={props.imgHeight ? props.imgHeight : 150} width={props.imgWidth ? props.imgWidth : 150}></CardContent>
      <div style={{  textAlign: props.textAlign ? props.textAlign : "left"  }}>
        {/* <CardContent>s */}
          <div style={{paddingLeft: 10}}>{props.children}</div>
        {/* </CardContent> */}
      </div>
    </Card>
    // </li>
  );
};
