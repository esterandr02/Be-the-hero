const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        // PAGINACAO de 5 em 5 incidentes por pagina
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();  // total de casos registrados

        const incidents = await connection('incidents')
        .join('ongs', 'ong_id', '=', 'incidents.ong_id')   // relaciona dados de varias tabelas do BD
        .limit(5)
        .offset((page - 1) * 5)
        .select([           //  listar dados a serem mostrados
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
      
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;        
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permited.' });  // usuario nao autorizado para a ação
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();  // 204 resposta sem conteúdo, mas que deu certo
    }
};