export const Greet = (props?: { name?: string }) => {
    return (
        <h1>Hello {props?.name}</h1>
    )
}