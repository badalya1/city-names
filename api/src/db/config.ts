interface MongoConfig {
  connectionString: string;
  options: {
    dbName: string;
  };
}

export const getMongoConfig = (): MongoConfig => {
  const {
    DB_PREFIX = "mongodb",
    DB_USERNAME = "",
    DB_PASS = "",
    DB_URL = "localhost:27017",
    DB_NAME = "cities-db",
    DB_PARAMS = "",
  } = process.env;

  const auth =
    DB_USERNAME && DB_PASS
      ? `${encodeURIComponent(DB_USERNAME)}:${encodeURIComponent(DB_PASS)}@`
      : "";

  const params = DB_PARAMS ? `?${DB_PARAMS}` : "";

  const connectionString = `${DB_PREFIX}://${auth}${DB_URL}/${params}`;

  return {
    connectionString,
    options: {
      dbName: DB_NAME,
    },
  };
};
