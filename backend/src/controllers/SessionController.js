const connection = require('../database/connection');

module.exports = {  // rota de login (verificar se a ONG existe)
    async create(request, response) {
        const { id } = request.body;
        console.log(id);

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return response.json(ong);
    }
};