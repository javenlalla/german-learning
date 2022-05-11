# Create React App With Redux Testing App

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
