import classNames from "classnames";
import "./Sprite.scss";
// import utils from "../functions/utils";


export default Sprite;


function Sprite(props){
    // utils.SetDefaultStyles(props, {});
    const {id, style, className, type} = props;
    const props2 = {id, style};
    const css = classNames("lds-sprite", className, type && `is-type-${type}`);

    // render
    return <div className={css} {...props2} />
}





// Sprite.Sidenav = (props) => {
//     return <Sprite baseClass="" props />
// }

