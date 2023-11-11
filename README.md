# ESLint Config for Stew Eucen

* ESLint shareable config for Stew Eucen

## Installation of ESLint

### Create `.npmrc`

* Create a `.npmrc` file in the root directory of your project and add any necessary configurations. This might be required for installing certain npm packages.

* Please add the following line to your `.npmrc` file.

  ```
  @steweucen:registry=https://npm.pkg.github.com
  ```

### Command in Terminal

* Run `npm install` in your project.

  ```
  npm install --save-dev \
    eslint \
    @steweucen/eslint-config
  ```

## Usage

* Add this package to your `.eslintrc.yml` file:

  ```
  extends
    - '@steweucen'
  ```

## License

* MIT © Stew Eucen
