# Contributing guide

## Cloning the repository

You can use the following steps to clone this repository:

```
git clone https://github.com/AbooMinister25/Athena.git
```

and

```
cd Athena
```

## Python

### Requirements

-   Python 3.10
-   [PDM](https://pdm.fming.dev/latest/#recommended-installation-method)
-   Git

### Development Environment

### PDM

This project uses `pdm` to manage dependencies. You can install `pdm` here - https://pdm.fming.dev/latest/#recommended-installation-method.

One installed, run `pdm install -d` to install dev dependencies.

### pre-commit

This project uses pre-commit hooks to run lints and such before commits. You can install hooks by running `pdm run pre-commit install`.

### Running the Project

The backend uses FastAPI, and you can run the app using the `uvicorn` web server -

```
pdm run uvicorn athena.__main__:app
```

## TypeScript/JavaScript

### Requirements

-   [yarn](https://classic.yarnpkg.com/lang/en/docs/install)
-   Git

### Yarn

This project uses `yarn` to manage dependencies in the client. Once you have yarn installed, you can install your dependencies with the following:

```
yarn
```

And you can run the server with the following:

```
yarn dev
```

## Making Changes
When adding features or changes to the project, never commit to the `main` branch, and rather, create a new branch, make your changes on that, and open a [Pull Request](https://github.com/AbooMinister25/Athena/pulls) on the repository, so that another developer can review and approve your changes.

This would look something like the following:

```
# create a new feature branch
git checkout -b my-feature-branch

# make your changes...

# add your changes
git add file_1_that_i_changed file_2_that_i_changed
git commit -m "a descriptive commit message"

# push changes to the remote
git push origin my-feature-branch
```

after which, if you were finished with all your changes, you'd go ahead and open a pull request.

Remember, try and keep your commits *atomic*, or simple - once you've finished making one full change, or adding a feature, that's when you commit, as opposed to just one big commit after finishing the entirety of what you were trying to do.