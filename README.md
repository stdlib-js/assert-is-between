<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isBetween

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is between two values.



<section class="usage">

## Usage

```javascript
import isBetween from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-between@esm/index.mjs';
```

#### isBetween( value, a, b\[, left, right] )

Tests if a `value` is between two values `a` (left comparison value) and `b` (right comparison value).

```javascript
var bool = isBetween( 4, 3, 5 );
// returns true

bool = isBetween( 2, 3, 5 );
// returns false

bool = isBetween( 6, 3, 5 );
// returns false
```

By default, the function assumes that `a` and `b` are inclusive.

```javascript
var bool = isBetween( 3, 3, 5 );
// returns true

bool = isBetween( 3, 3, 5, 'closed', 'closed' );
// returns true

bool = isBetween( 5, 3, 5 );
// returns true

bool = isBetween( 5, 3, 5, 'closed', 'closed' );
// returns true
```

To make `a` and/or `b` exclusive, set the respective arguments to `'open'`.

```javascript
var bool = isBetween( 3, 3, 5, 'open', 'closed' );
// returns false

bool = isBetween( 5, 3, 5, 'closed', 'open' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `a` and `b` are inclusive, the comparison is equivalent to

    ```text
    a <= v <= b
    ```

-   If `a` is exclusive and `b` is inclusive, the comparison is equivalent to

    ```text
    a < v <= b
    ```

-   If `a` is inclusive and `b` is exclusive, the comparison is equivalent to

    ```text
    a <= v < b
    ```

-   If `a` and `b` are exclusive, the comparison is equivalent to

    ```text
    a < v < b
    ```

-   If provided non-numeric values, comparisons are performed according to lexicographic order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import isBetween from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-between@esm/index.mjs';

var bool;
var a;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    a = round( (randu()*10.0) + 5.0 );
    b = round( (randu()*10.0) + 15.0 );
    v = round( randu()*25.0 );
    bool = isBetween( v, a, b, 'open', 'closed' );
    console.log( '%d < %d <= %d: %s', a, v, b, bool.toString() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-between-array`][@stdlib/assert/is-between-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object where every element is between two values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-between.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-between

[test-image]: https://github.com/stdlib-js/assert-is-between/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-between/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-between/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-between?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-between.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-between/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-between/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-between/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-between/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-between/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-between/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-between-array]: https://github.com/stdlib-js/assert-is-between-array/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
