# with-hooks

>

[![NPM](https://img.shields.io/npm/v/with-hooks.svg)](https://www.npmjs.com/package/with-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save thiskevinwang/with-hooks#v<x.x.x>
```

## Usage

```tsx
import MyComponent, { withState } from "with-hooks"

const Example = () => {
  return <MyComponent />
}

const ExampleWithState = withState("foo", "setFoo", "bar")(Example)
```

## License

MIT © [thiskevinwang](https://github.com/thiskevinwang)
