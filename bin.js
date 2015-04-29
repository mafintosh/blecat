#!/usr/bin/env node

var blecat = require('./')

process.stdin.pipe(blecat()).on('finish', process.exit).pipe(process.stdout)
