

const utils = {
    
    SetDefaultStyles: (props) => {
        return {
            ...props,
            style: {
                ...props.style,
            }
        }
    }
}

export default utils;