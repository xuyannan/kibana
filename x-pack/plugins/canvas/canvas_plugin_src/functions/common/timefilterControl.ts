/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { NullContextFunction, Render } from '../types';
import { getFunctionHelp } from '../../strings';

interface Arguments {
  column: string;
  compact: boolean;
}
export function timefilterControl(): NullContextFunction<
  'timefilterControl',
  Arguments,
  Render<Arguments>
> {
  const { help, args: argHelp } = getFunctionHelp().timefilterControl;

  return {
    name: 'timefilterControl',
    aliases: [],
    type: 'render',
    context: {
      types: ['null'],
    },
    help,
    args: {
      column: {
        types: ['string'],
        aliases: ['field', 'c'],
        help: argHelp.column,
      },
      compact: {
        types: ['boolean'],
        help: argHelp.compact,
        default: true,
        options: [true, false],
      },
    },
    fn: (_context, args) => {
      return {
        type: 'render',
        as: 'time_filter',
        value: args,
      };
    },
  };
}
