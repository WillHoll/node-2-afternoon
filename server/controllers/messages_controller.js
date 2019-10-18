let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        messages.push({id: +id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text, time} = req.body;
        const {id} = req.params;
        const index = messages.findIndex((message) => message.id === +id);
        messages[index] = {id, text, time};
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const {id} = req.params;
        const index = messages.findIndex((message) => message.id === +id);
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}