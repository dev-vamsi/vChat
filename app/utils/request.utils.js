export const sendJsonResponse = ({ ok, message, status, data = {} }) => {
    const res = { ok, message };
    if (Object.keys(data).length > 0) {
        res.data = data;
    }
    return Response.json(res, { status });
};
