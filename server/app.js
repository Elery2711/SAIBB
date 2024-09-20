const app = require('express')();
const PORT = 5000


app.listen(
    PORT,
    () => console.log(`Servidor corriento en http://localhost:${PORT}`)
)