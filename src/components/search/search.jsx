import {Card, CardContent} from '../card/card'
import {TextField} from '../textField/textField'

export const SearchBar = (props) => {
    return (
        <Card p={props.p ? props.p : 10}
        hiddenContent={
           props.value && <div>
               Results for: {props.value}...
               <CardContent p={props.pDrawer}>
                    {props.children}
               </CardContent>
               
               </div>
        }
        openDrawer={true}
        >
            <TextField 
                 {...props} 
                //  value={props.value}
                //   onChange={(e) => setSearchText(e.value.text)}
                //   placeholderText='Find Product'
                //   adornment='Search'
                //   backgroundColour='transparent'
                //   variant='outline'
            />
     </Card>
    )
}