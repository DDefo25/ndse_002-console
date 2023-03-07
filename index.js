#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const getTime = require('./getTime');

yargs(hideBin(process.argv))
    .command(
      'current',
      'Получение текущей даты',
      (yargs) => {
        return yargs.options({
            'y': {
            alias: 'year',
            type: 'boolean',
            describe: 'Текущий год'
            },
            'm': {
                alias: 'month',
                type: 'boolean',
                describe: 'Текущий месяц'
            },
            'd': {
                alias: 'date',
                type: 'boolean',
                describe: 'Текущее число'
            },
        })
      },
      (argv) => {
        console.log(getTime(argv))
      }
    )
    .command(
        'add',
        'Прибавление к текущей дате',
        (yargs) => {
          return yargs.options({
              'y': {
              alias: 'year',
              type: 'number',
              describe: 'Прибавить год'
              },
              'm': {
                  alias: 'month',
                  type: 'number',
                  describe: 'Прибавить месяц'
              },
              'd': {
                  alias: 'date',
                  type: 'number',
                  describe: 'Прибавить число'
              },
          })
        },
        (argv) => {
          console.log(getTime(argv))
        }
    )
    .command(
        'sub',
        'Вычитание из текущей даты',
        (yargs) => {
          return yargs.options({
              'y': {
              alias: 'year',
              type: 'number',
              describe: 'Вычесть год'
              },
              'm': {
                  alias: 'month',
                  type: 'number',
                  describe: 'Вычесть месяц'
              },
              'd': {
                  alias: 'date',
                  type: 'number',
                  describe: 'Вычесть число'
              },
          })
        },
        (argv) => {
          console.log(getTime(argv))
        }
    )
    .help()
    .argv

