const ENV = {
  production:  {
    BASE_URL: 'https://pidough.wl.r.appspot.com/api', 
    API_KEY: ''
  },
  development: {
    BASE_URL: 'http://localhost:8000/api',
    API_KEY: ''
  },
};

const getEnvironment = () => {
  const platform = process.env.NODE_ENV === 'development' ? 'development' : 'production';
  return ENV[platform]
};

const environment = getEnvironment();

export default environment;