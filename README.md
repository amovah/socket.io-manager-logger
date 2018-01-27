# socketlogger

A logger plugin for socket.io-manager

## Install

```bash
npm install socketlogger

# or

yarn add socketlogger
```

## Usage

```javascript
import { applyMiddleware } from 'socket.io-manager';
import socketlogger from 'socketlogger';
import sockets from './sockets';

sockets = applyMiddleware([socketlogger], sockets);
```
