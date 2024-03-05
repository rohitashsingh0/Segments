import { NextResponse } from "next/server";

 export async function GET(){
    return NextResponse.json({
        name:'hello'
    })
}

 export async function POST(){
    return NextResponse.json({
        name:'World'
    })
}

 export async function PUT(){
    return NextResponse.json({
        name:'Rohitash Singh'
    })
}
