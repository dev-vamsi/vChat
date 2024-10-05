import dbConnect from '@/app/db/dbConnect';
import UserModel from '@/app/models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendJsonResponse } from '@/app/utils/request.utils';

export async function POST(request) {
    await dbConnect();
    const body = await request.json();
    if (!body?.email || !body?.password) {
        return sendJsonResponse({
            ok: false,
            message: 'email and password are required fields!',
            status: 400,
        });
    }
    const { email, password } = body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return sendJsonResponse({
                ok: false,
                message: 'No user exists with given email, Please create one',
                status: 404,
            });
        }
        const passwordCheck = bcrypt.compare(password, user.password);
        if (!passwordCheck) {
            return sendJsonResponse({
                ok: false,
                message: 'Invalid password!',
                status: 400,
            });
        }
        const token = jwt.sign(
            {
                userId: user._id,
                email,
            },
            'RANDOM-TOKEN-DUDE',
            { expiresIn: '24h' }
        );

        return sendJsonResponse({
            ok: true,
            message: 'Login Successful',
            status: 200,
            data: { token },
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
