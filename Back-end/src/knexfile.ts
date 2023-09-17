import * as path from 'path';

const knexConfig: any = {
  development: {
    client: 'pg',
    connection: {
      database: 'verysimple',
      user: 'postgres',
      password: 'admin',
      host: 'localhost',
      port: 5432,
      ssl: false,
    },
    migrations: {
      directory: path.join(__dirname, './migrations'),
    },
    useNullAsDefault: true,
  },
};

export default knexConfig;
