const express =require("express") ;
const cors = require("cors")
const collection = require("./mongo.js") ;


const app = express();
const PORT = process.env.PORT || 5000
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.post("/", async (req, res) => {
    const { formValues } = req.body;
    if (!formValues) {
      return res.status(400).json({ message: "formValues is required" });
    }
    const data = {
      formValues: JSON.stringify(formValues),
    };
    await collection.insertMany([data]);
    res.status(201).json({ message: "Data inserted successfully" });
  });
  
  
  
  

app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`)
})