# City Names API

## Getting Started

Follow these steps to set up and start the project:

1. **Install Dependencies**
    ```sh
    npm install
    ```

2. **Create Environment File**
    Create a `.env` file in the root directory with the following content:
    ```env
    DB_PREFIX="mongodb"
    DB_USERNAME=""
    DB_PASS=""
    DB_URL="localhost:27017"
    DB_NAME="cities-db"
    DB_PARAMS=""
    ```

3. **Seed the Database**
    ```sh
    npm run db:seed
    ```

4. **Start the Development Server**
    ```sh
    npm run dev
    ```

Now your project should be up and running!