//response.json
import {connectDB} from "@/lib/db"
import Task from "@/Model/task"

//POST
export async function POST(req) {

    try {

        const { text } = await req.json();

        if (!text) {
            return Response.json(
                { error: "Text required" },
                { status: 400 }
            );
        }
        
        await connectDB();

        const task = await Task.create({ text });

        return Response.json(task);

    } catch (error) {

        console.log(error);

        return Response.json(
            { error: "Server Error" },
            { status: 500 }
        );
    }
}

//GET
export async function GET(){

    try {

        await connectDB()

        const tasks = await Task.find()

        return Response.json(tasks)

    } catch (error) {

        console.log(error)

        return Response.json(
            { error:"GET Error" },
            { status:500 }
        )
    }
}

//DELETE
export async function DELETE(req){

    const { id } = await req.json()

    await connectDB()

    await Task.findByIdAndDelete(id)

    return Response.json({
        message:"Task Deleted"
    })
}

//PATCH
export async function PATCH(req){

    const { id , text } = await req.json()

    await connectDB()

    const updatedTask = await Task.findByIdAndUpdate(

        id,
        { text },
        { new:true }

    )
    return Response.json(updatedTask)
}