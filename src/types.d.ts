type IPApiResponse = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  isp: string;
}


