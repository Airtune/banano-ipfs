## to check for outdated deps

## to update to a major version update:

    npm install package@latest;

## to publish a new version

    npm run preflight;
    npm --no-git-tag-version version patch;

### good to commit here, so published code is same as NPM code.

    npm publish --access public;
