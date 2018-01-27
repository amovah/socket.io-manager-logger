# socket.io-manager-logger

A logger plugin for socket.io-manager

## Install

```bash
npm install socket.io-manager-logger

# or

yarn add socket.io-manager-logger
```

## Usage

```javascript
import { applyMiddleware } from 'socket.io-manager';
import logger from 'socket.io-manager-logger';
import sockets from './sockets';

sockets = applyMiddleware([logger], sockets);
```
