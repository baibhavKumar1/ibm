import connectToMongo from '@/libs/db'
import { NextResponse } from 'next/server'
import UserModel from '@/models/user.model'

connectToMongo()
export async function GET() {
    try {
        const user = await UserModel.find()
        return NextResponse.json({ user })
    }
    catch (err) {
        return NextResponse.json(err)
    }
}

export async function POST(req, res) {
    try {
        const { name, age, city } = await req.json();
        const newUser = await new UserModel({ name, age, city })
        newUser.save()
        return NextResponse.json({ newUser }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ err }, { status: 500 })
    }
}
