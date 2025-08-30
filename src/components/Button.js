

import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./Button.scss";
import Icon from "./Icon";


export default Button;
function Button(props){
    let {label, children, onClick, id, className, type, size, name, icon, iconColor, isSubmit, mobileBottom, shadow, to} = props;
    const nav = useNavigate();

    // nav
    if(to) onClick = (e) => {
        e.preventDefault();
        // nav(to);
        // utils.nav(nav, to);
    };

    const css = classNames("lds-button is-text-md", className, type && `is-type-${type}`, size && `is-size-${size}`, name && `is-name-${name}`, mobileBottom && 'is-mobilebottom', shadow && 'is-shadow');
    const props2 = {onClick, id, type: isSubmit && "submit"};
    if(typeof props2.type !== 'string') delete props2.type; // NOTE: was getting warnings
    if(!iconColor) iconColor = "dark";
    

    return <button className={css} {...props2}>{icon && <Icon type={icon} color={iconColor} />}{label || children}</button>
}
