import express from "express";
import axios from 'axios'

const PORT = 3000;
const app = express();

app.use(express.json()) // Make sure it returns as json


app.get('/', async (req, res) => {
    const data = await axios.get('https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=7f1d4ae9-1a12-46d7-953e-6b9c18c78680')
        .then(response => {
            var fields = response.data.result.records
            return fields
        })
        .catch(err => {
            return "ERR"
        })
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

