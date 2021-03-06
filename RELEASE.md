# Release instructions

These are the minimum required steps to publish the statful browser plugin on npm.  
Must be executed in the following order

## Locally
1. ```npm run test```
2. ```npm run build```
3. update version in package.json

## GitHub

### Pull Request
1. create a new pull request
2. merge pull request by selecting "squash and merge" from the dropdown selector

### New Release
1. click in the "draft new release" button on repo homepage
2. insert the version as it is in package.json
3. Add a necessary summary for the current release (optional)
4. click the "Publish Release" button

## NPM

1. login into npm in a terminal window ```npm login```
2. run ```npm publish```

Check the [statful-browser-plugin](https://www.npmjs.com/package/statful-browser-plugin) on NPM to verify that the newly created version is available. 