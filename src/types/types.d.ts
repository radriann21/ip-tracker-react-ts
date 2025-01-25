type IPApiResponse = {
  ip: string;
  location: {
    lat: number;
    lng: number;
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  isp: string;
}


