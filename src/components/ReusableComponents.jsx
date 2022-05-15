export const ConditionalWrapper = ({ condition, children, wrapper }) => condition ? wrapper(children) : children;

export const ConditionalRender = ({ condition, children }) => condition ? children : <></>