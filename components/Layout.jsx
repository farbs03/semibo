import Header from "./Header"

const Layout = (props) => {
    return (
        <div className="h-screen flex flex-col z-20 absolute w-full">
            <Header />
            <div className="flex-grow h-full">
                {props.children}
            </div>
        </div>
    )
}
export default Layout