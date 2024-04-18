export const Error = ({ children, className }) => {
    return (
        <p className={'text-red-500 m-0 ' + className}>{children}</p>
    )
}
