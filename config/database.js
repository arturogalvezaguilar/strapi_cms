module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
/*
 module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "mysql",
        "host": "cicd.clyd3qcv4a9d.us-east-1.rds.amazonaws.com",
        "port": "3306",
        "database": "strapi_2",
        "username": "MS_EVENT_USER_CI",
        "password": "lamark"
      },
      "options": {
        "ssl": false
      }
    }
  }
});
*/

