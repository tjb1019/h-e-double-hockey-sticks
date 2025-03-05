import cors, { CorsOptions } from 'cors';

const originWhitelist = ['http://localhost:5173'];

const corsConfig: CorsOptions = {
  origin: originWhitelist,
};

export default cors(corsConfig);
