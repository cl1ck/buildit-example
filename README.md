buildit
============

Starter project for my personal frontend development projects.
Based on [gulp-starter](https://github.com/greypants/gulp-starter/wiki) by [greypants](https://github.com/greypants/).

Includes the following tools, tasks, and workflows:

- [JSPM](https://jspm.io) (modern package manager for the frontend)
- ES6 Harmony support using 6to5 transpiler
- [SASS](http://sass-lang.com/) (super fast libsass with [source maps](https://github.com/sindresorhus/gulp-ruby-sass#sourcemap), and [autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer))
- [Jade](http://jade-lang.com) for templates
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Linting for all source files
- Image optimization
- Error Notifications in Notification Center

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install jspm, gulp & styledoccoe globally

JSPM, Gulp and Styledoccy must be installed globally in order to use the command line tools. *You may need to use `sudo`*

```
npm install gulp jspm styledocco -g
```

### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Initialize JSPM

```
jspm init
```

### Install required ruby gems

```
gem install bundler
```

You'll need to install [bundler](http://bundler.io) first. This will enable you to install the required ruby gems. *You may need to use `sudo`*

```
bundle install
```

This will install all gems listed in `Gemfile`. *You may need to use `sudo`*

### Run gulp and be amazed.

```
gulp
```

__todo__

### Configuration

All paths and plugin settings have been abstracted into a centralized config object in `gulp/config.js`. Adapt the paths and settings to the structure and needs of your project.

## Disable 'gulp-notify'

If you are running on a system that does not support notifications by `gulp-notify`, you can disable it by using enviroment variable `DISABLE_NOTIFIER`:

```
export DISABLE_NOTIFIER=true;
```
