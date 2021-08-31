## to check for outdated deps

    npm update;
    npm outdated;
    npm install package@latest;

## to publish a new version

    npm --no-git-tag-version version patch;

### update version in package-lock.json

    npm run publish-preflight;

### good to commit here, so published code is same as NPM code.

    npm publish --access public;
