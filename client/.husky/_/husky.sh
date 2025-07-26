#!/bin/sh
# internal husky script

if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ -z "$husky_skip_init" ]; then
    export PATH="$PATH:./node_modules/.bin"
    debug "PATH=$PATH"
  fi
fi