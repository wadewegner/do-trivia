digitalocean-trivia
=================

A Digital Ocean trivia game!


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/digitalocean-trivia.svg)](https://npmjs.org/package/digitalocean-trivia)
[![Downloads/week](https://img.shields.io/npm/dw/digitalocean-trivia.svg)](https://npmjs.org/package/digitalocean-trivia)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g do-trivia
$ do-trivia COMMAND
running command...
$ do-trivia (--version)
do-trivia/0.0.2 darwin-arm64 node-v20.15.0
$ do-trivia --help [COMMAND]
USAGE
  $ do-trivia COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`do-trivia hello PERSON`](#do-trivia-hello-person)
* [`do-trivia hello world`](#do-trivia-hello-world)
* [`do-trivia help [COMMAND]`](#do-trivia-help-command)
* [`do-trivia play`](#do-trivia-play)
* [`do-trivia plugins`](#do-trivia-plugins)
* [`do-trivia plugins add PLUGIN`](#do-trivia-plugins-add-plugin)
* [`do-trivia plugins:inspect PLUGIN...`](#do-trivia-pluginsinspect-plugin)
* [`do-trivia plugins install PLUGIN`](#do-trivia-plugins-install-plugin)
* [`do-trivia plugins link PATH`](#do-trivia-plugins-link-path)
* [`do-trivia plugins remove [PLUGIN]`](#do-trivia-plugins-remove-plugin)
* [`do-trivia plugins reset`](#do-trivia-plugins-reset)
* [`do-trivia plugins uninstall [PLUGIN]`](#do-trivia-plugins-uninstall-plugin)
* [`do-trivia plugins unlink [PLUGIN]`](#do-trivia-plugins-unlink-plugin)
* [`do-trivia plugins update`](#do-trivia-plugins-update)

## `do-trivia hello PERSON`

Say hello

```
USAGE
  $ do-trivia hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ do-trivia hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/WadeWegner/digitalocean-trivia/blob/v0.0.2/src/commands/hello/index.ts)_

## `do-trivia hello world`

Say hello world

```
USAGE
  $ do-trivia hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ do-trivia hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/WadeWegner/digitalocean-trivia/blob/v0.0.2/src/commands/hello/world.ts)_

## `do-trivia help [COMMAND]`

Display help for do-trivia.

```
USAGE
  $ do-trivia help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for do-trivia.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.3/src/commands/help.ts)_

## `do-trivia play`

Play the DigitalOcean Trivia Game

```
USAGE
  $ do-trivia play

DESCRIPTION
  Play the DigitalOcean Trivia Game
```

_See code: [src/commands/play.ts](https://github.com/WadeWegner/digitalocean-trivia/blob/v0.0.2/src/commands/play.ts)_

## `do-trivia plugins`

List installed plugins.

```
USAGE
  $ do-trivia plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ do-trivia plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/index.ts)_

## `do-trivia plugins add PLUGIN`

Installs a plugin into do-trivia.

```
USAGE
  $ do-trivia plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into do-trivia.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DO_TRIVIA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DO_TRIVIA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ do-trivia plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ do-trivia plugins add myplugin

  Install a plugin from a github url.

    $ do-trivia plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ do-trivia plugins add someuser/someplugin
```

## `do-trivia plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ do-trivia plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ do-trivia plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/inspect.ts)_

## `do-trivia plugins install PLUGIN`

Installs a plugin into do-trivia.

```
USAGE
  $ do-trivia plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into do-trivia.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DO_TRIVIA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DO_TRIVIA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ do-trivia plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ do-trivia plugins install myplugin

  Install a plugin from a github url.

    $ do-trivia plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ do-trivia plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/install.ts)_

## `do-trivia plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ do-trivia plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ do-trivia plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/link.ts)_

## `do-trivia plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ do-trivia plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ do-trivia plugins unlink
  $ do-trivia plugins remove

EXAMPLES
  $ do-trivia plugins remove myplugin
```

## `do-trivia plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ do-trivia plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/reset.ts)_

## `do-trivia plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ do-trivia plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ do-trivia plugins unlink
  $ do-trivia plugins remove

EXAMPLES
  $ do-trivia plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/uninstall.ts)_

## `do-trivia plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ do-trivia plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ do-trivia plugins unlink
  $ do-trivia plugins remove

EXAMPLES
  $ do-trivia plugins unlink myplugin
```

## `do-trivia plugins update`

Update installed plugins.

```
USAGE
  $ do-trivia plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
