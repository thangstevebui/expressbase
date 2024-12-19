import { DataSource } from 'typeorm';
export const ormConfig = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_DB || 'postgres',
    password: process.env.DATABASE_USER || 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    schema: process.env.DATABASE_SCHEMA || 'wns',
    synchronize: true,
    logging: false,
    entities: ['src/modules/**/entity/*.entity.{js,ts}'],
    subscribers: [],
    migrations: ['src/db/migrations/**/*{.js,.ts}'],
};
export const CoreDataSource = new DataSource(ormConfig);
