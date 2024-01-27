import { NextResponse } from "next/server";
import connectToMongo from '@/libs/db'
import UserModel from '@/models/user.model'

connectToMongo()

export async function GET(req,{ params }) {
    const user = await UserModel.findById(params.id)
    return NextResponse.json( {user} );
}

export async function PATCH(req, { params }) {
    try {
        const { id } = params;
        const { ...updateData } = await req.json();
        const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
            new: true, // Return the modified document rather than the original
        });
        return NextResponse.json({ updatedUser }, { status: 200 });
    } catch (err) {
        return NextResponse.json({error: err.message }, { status: 500 });
    }
}

export async function DELETE(req, {params}) {
    try {
        const { id } = params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return NextResponse.json({ deletedUser }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
