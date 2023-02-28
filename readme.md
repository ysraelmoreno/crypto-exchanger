# Crypto Exchanger

To start this project, you only need to clone it, and execute.

```bash
docker-compose up
```

To execute correctly, you **must** have docker and the docker compose installed in your machine.

You need to go at https://coinlayer.com/ and request an access key to get the data for the conversions. With the access keys in hand, you need to go to crypto-exchanger-service/.env and just add the value to the COIN_LAYER_ACCESS_KEY.

After some minutes, the application will be running on http://localhost:5173 for the front-end and http://localhost:3000 for the back-end.

## Front End

The application it's a React Application using Vite, chosen because of it's speed on compiling and how the HMR runs smoothly on any machine. You can see the reasons I choose this approach by seeing [this article](https://vitejs.dev/guide/why.html).

We have two main components, the header (crypto-exchanger-ui/src/components/crypto/Header) and the body (crypto-exchanger-ui/src/components/crypto/Body), there we have all the logic for the conversion and communication with the back-end.

### Notes

- You can switch the space of time that the application will hit the coinlayer API by switching the REFRESH_RATES on .env file
