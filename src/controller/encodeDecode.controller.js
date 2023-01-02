async function encode(req, res){    
    const { link } = req.body;

    try{
        const codifiedLink = Buffer.from(link).toString('base64url');
        res.status(200).send({
            code: 200,
            message: codifiedLink,
            timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })
        });
    }
    catch(e){
        res.status(500).send({
            code: 500,
            message: 'Erro Interno :/',
            timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })
        })
    }
}

async function decode(req,res){
    const {base64Link} = req.query;
    try{
        const uncodifiedLink = Buffer.from(base64Link, 'base64url').toString('ascii');
        res.status(200).send({
            code: 200,
            message: uncodifiedLink,
            timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })
        });
    }
    catch(e){
        res.status(500).send({
            code: 500,
            message: 'Erro Interno :/',
            timestamp: new Date(Date.now()).toLocaleString("pt-BR", { timeZone: "America/Fortaleza" })
        })
    }
}

export {encode, decode}