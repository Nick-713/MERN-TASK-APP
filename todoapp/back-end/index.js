const express = require('express');
const taskRouter = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use('/todo', taskRouter);

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});