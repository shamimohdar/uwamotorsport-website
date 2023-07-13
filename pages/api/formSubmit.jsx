const { log } = console;

export default function formSubmit(req, res) {
    if (req.method === "POST") {
        const reqPayload = req?.body;

        log("Req Payload: ", reqPayload);

        res.json({ msg: "Hello World!" });
    }

    return res.status(500).json ({
        msg: "This needs to be a post request"
    })
    

}