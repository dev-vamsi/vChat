import dbConnect from '@/app/db/dbConnect';
import UserModel from '@/app/models/user.model';
import bcrypt from 'bcrypt';
import { sendJsonResponse } from '@/app/utils/request.utils';

export async function POST(request) {
    await dbConnect();
    const body = await request.json();
    if (!body?.name || !body?.email || !body?.password) {
        return sendJsonResponse({
            ok: false,
            message: 'name, email and password are required fields!',
            status: 400,
        });
    }
    const { name, email, password } = body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            name,
            email,
            password: hashedPassword,
        });
        const result = await user.save();

        return sendJsonResponse({
            ok: true,
            message: 'Sign Up Successful, Please Login',
            status: 201,
        });
    } catch (error) {
        return sendJsonResponse({
            ok: false,
            message: 'Internal Server Error',
            status: 500,
            data: { error },
        });
    }
}
