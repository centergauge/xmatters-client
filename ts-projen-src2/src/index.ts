#!/usr/bin/env node

import { XMattersClientCLIMain } from './xmatters-cli';

export function main() {
  new XMattersClientCLIMain().main();
}
main();