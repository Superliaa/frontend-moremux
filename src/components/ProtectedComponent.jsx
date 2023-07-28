// eslint-disable-next-line react/prop-types
const ProtectedComponent = ({isAllowedIf, children,}) => {
    if (isAllowedIf) {
        return children ? children : <></>;
    }else{
        return <></>;
    }

};

export default ProtectedComponent;