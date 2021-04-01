import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/database/db.sqlite'
});

/* Remember to synchronize database in the first run
(async () => {
    await sequelize.sync();
})();
*/

export default sequelize;