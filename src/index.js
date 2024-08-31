const App = require("./app");

const app = new App();
const port = 4000;

app.getServer().listen(port, () => {
    console.log(`Server is running on port ${port}`);
});