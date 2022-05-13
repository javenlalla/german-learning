# Create React App With Redux Testing App

## Deployment

```bash
docker build -f=Dockerfile.production --tag=german-learning:production --no-cache .
# docker run -it --rm -v //${PWD}/tmp://build german-learning:production bash -c "ls -l /app/build"
docker run -it --rm -v ${PWD}/prod-build:/build german-learning:production  bash -c "cp -R /app/build/* /build"
```

## Commands

### Build Docker Image

```bash
docker build . --tag=react-redux:testing
```

### Spin Up Container

```bash
docker-compose up -d
```

Alternatively, spin up the `Storybook` container instead:

```bash
docker-compose up -d react-redux-storybook
```

### Hook Into The Container

```bash
docker exec -it react-redux bash
```

### Misc Commands

```bash
docker-compose up --force-recreate --build --remove-orphans
docker exec -it create-react-app bash
```

## Redux Toolkit

1. Create a `store`
2. Enable the `store` in the root element in `index.js` with `Provider`
