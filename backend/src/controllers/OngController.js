const crypto = require('crypto');  // pacote do node de criptografia
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {   // rota que lista as ongs
        const ongs = await connection('ongs').select('*');  // listar todas as infor. da ong

        return response.json(ongs);
    },

    async create  (request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');  // gerar o id aleatorio de 4 bytes

        await connection('ongs').insert({  // response so retorna quando o insert finalizar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};