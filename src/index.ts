import { App } from "./app";

const app = new App();
const port = 18000;

app.getServer().listen(port, () => {
    console.log(`Server is running on port ${port} `);
});