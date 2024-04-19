
import addImg from '../../assets/addImg.png';


export default function AddNewTodo(){

    function handleClick() {
        console.log("vlivker");
    }

    return (
        <>
            <div className=" m-2 ">
                <button className=" hover:bg-gray-600 w-full rounded-md p-1 flex justify-center" onClick={handleClick}>
                    <img className=" invert-[.80] fill-gray-300" src={addImg} alt="img not found" />
                    <h1 className=" text-gray-300">Add new</h1>
                </button>
            </div>
        </>
    )

}