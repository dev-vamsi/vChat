import mongoose from 'mongoose';

const connection = {};

const dbConnect = () => {
    if (connection.isConnected) {
        return Promise.resolve();
    }
    return new Promise(async (resolve, reject) => {
        try {
            const _conn = await mongoose.connect(process.env.DB_URL, {
                dbName: 'vChat',
            });
            if (_conn.connection.readyState) {
                connection.isConnected = true;
            }
            console.log('Successfully connected to Mongo Database...');
            resolve('Success');
        } catch (error) {
            console.log('Unable to connect to Mongo Database...');
            reject(error);
        }
    });
};

export default dbConnect;
