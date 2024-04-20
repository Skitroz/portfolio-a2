const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'matheobtl',
    password: 'Azerty123!',
    database: 'blog',
    connectionLimit: 5
});

async function getProjects() {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM projets');
        return rows;
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

getProjects().then(projects => {
    console.log(projects);
}).catch(err => {
    console.error(err);
});
