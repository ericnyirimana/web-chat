import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const PORT = process.env.PORT || 3400;
app.listen(PORT, () => console.log('Server is listening on port 3400'));
app.use(
  bodyParser.urlencoded({
    limit: '500mb',
    extended: false,
    parameterLimit: 500000
  })
);
app.use(bodyParser.json({ limit: '500mb' }));
app.use(routes);
// / catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  let error = {};
  if (!isProduction) {
    error = err;
  }
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error
    }
  });
});
