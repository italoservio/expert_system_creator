import Sequelize from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/database/db.sqlite',
    //logging: false
});

//Remember to synchronize database in the first run:
//(async () => { await sequelize.sync(); })();

export { sequelize, Sequelize };