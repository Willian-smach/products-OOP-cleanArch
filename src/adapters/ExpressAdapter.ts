export class ExpressAdapter {
    static create (fn) {
        return async function(req, res) {
            const obj = await fn(req.params, req.body);
            if(obj.status && obj.message) {
                res.status(obj.status).json({msg: obj.message});
            } else {
                res.json(obj);
            }
        }
    }
}