JS-Utility-Belt
===============

Opinionated collection of JavaScript nice-to-haves.


Introduction
------------

Each and every one of us has probably had to maintain a set of general utilities for a project or
team, which was created either because its functionality wasn't covered by well-known libraries like
[lodash](https://lodash.com/), or because its authors hadn't found an appropriate package that
already covered their needs. This is that set of utilities for JavaScript at BigchainDB.

These utilities come from our experiences of building the frontends of [ascribe.io](www.ascribe.io),
[whereonthe.net](www.whereonthe.net), and various examples with BigchainDB. Consolidating them here
allows us to have better tested and more documented utilities across our projects, with less
redesigning of the wheel when a well-built package from the community meets our needs.


Usage
-----

Simply `npm install -S js-utility-belt` and start using `import { ... } from 'js-utility-belt'`!

**Recommended**: If you are using a modern module bundler, ideally with
[tree-shaking support](http://www.2ality.com/2015/12/webpack-tree-shaking.html), you should import
directly from the untranspiled files in `lib/`, for example:

* `import { ... } from `js-utility-belt/lib`
* `import { ... } from `js-utility-belt/lib/general.js`

This allows you to have full control over what's included as well as allow your bundler to
tree-shake dead exports. It also allows you to optimize some of the helpers and polyfills
introduced by babel if you're using the
[runtime transform](https://babeljs.io/docs/plugins/transform-runtime/).

Otherwise, there are a number of outputs generated by npm after installation, dependending on your
needs:

* `js-utility-belt/cjs` - Transpiled, ES5 compatible CommonJS modules (for most module bundlers)
* `js-utility-belt/es6` - Transpiled, ES5 compatible ES6 modules (for newer module bundlers that
  understand ES6 module and can provide tree-shaking; ie. [rollup](rollupjs.org), [jspm](jspm.io),
  [webpack@2](webpack.github.io/docs/))
* `js-utility-belt/bundle` - Transpiled, bundled, and minified UMD modules (for droppin' into your
  site)

**Note**: If using the `cjs` or `es6` transpiled modules, it may still be necessary to install a few
polyfills (ie. `Symbol`) as babel doesn't include them.


Style guide
-----------

See the [ascribe/javascript](https://github.com/ascribe/javascript) styleguide.


TODO
====
* [ ] Unit tests
* [ ] Add documentation on which utilities are available