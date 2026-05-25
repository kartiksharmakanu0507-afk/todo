export default function TodoList({tasks , deleteTask , editTask}:any){

    return(

        <div>

            {
                tasks.map((item:any , index:number)=>(

                    <div className="task-card" key={item._id}>

                        <p>{item.text}</p>

                        <button
                        onClick={()=>deleteTask(item._id)}
                        >
                            Delete
                        </button>

                        <button
                        onClick={()=>editTask(item)}
                        >
                            Edit
                        </button>
                    </div>
                ))
            }

        </div>
    )
}