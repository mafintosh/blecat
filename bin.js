#!/usr/bin/env node

var blecat = require('blecat')

process.stdin.pipe(blecat()).on('finish', process.exit).pipe(process.stdout)
