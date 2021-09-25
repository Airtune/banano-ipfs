## to check for outdated deps

## to update to a major version update:

    npm install package@latest;

## to publish a new version

    npm update;
    npm outdated;
    npm audit fix;
    npm --no-git-tag-version version patch;
    npm run publish-preflight;

### good to commit here, so published code is same as NPM code.

    npm publish --access public;
