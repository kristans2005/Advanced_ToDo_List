


export default function TodoBordTitle(props) {

    return(
        <>
            <button className=" p-1 hover:bg-gray-800">
                <h1 className=" font-bold text-2xl  text-white ">{props.title}</h1>
            </button>   
        </>
    )
}