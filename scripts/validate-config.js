import fs from 'fs';
import path from 'path';
import schema from '../src/config/schema.js';

const readFile = (filename, encoding = 'utf-8') => {
    try {
        const file = fs.readFileSync(filename, encoding);
        return file;
    } catch (error) {
        throw new Error('Wrong filepath specified');
    }
};

const parseConfig = (file) => {
    try {
        const config = JSON.parse(file);
        return config;
    } catch {
        throw new Error('Wrong config format');
    }
};

const validateEntity = (schema, entity) => {
    const { error } = schema.validate(entity);

    if (error) {
        throw new Error(error.annotate());
    }
};

function init() {
    const filepath = path.resolve('src/config/data.json');
    const file = readFile(filepath);
    const config = parseConfig(file);

    validateEntity(schema, config);
}

init();
