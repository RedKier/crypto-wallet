import app from './app';
import config from './config';

app.listen(config.port, () => {
  console.log(`⚡️[server]: ${config.name} v${config.version}`);
  console.log(
    `⚡️[server]: Server is running at https://localhost:${config.port}`
  );
});
