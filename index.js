import express from 'express'
const app = express()
app.listen(3400,()=>
console.log(`Server is listening on port 3400`))
export default app;