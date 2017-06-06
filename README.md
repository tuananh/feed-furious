# feed-furious

> a fast XML feed parser

An example feed parser using [camaro](https://github.com/tuananh/camaro)

## Installation

```sh
npm install feed-furious
```

## Usage

```js
const xml = '<feed><title><![CDATA[Hello]]> <![CDATA[World]]></title><entry>' +
    '<link>http://example.com/1</link>' +
    '<content><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius mattis convallis. ' +
    'Praesent a massa arcu. Duis nunc erat, tincidunt nec ligula et, lacinia ultricies neque. Morbi at ' +
    'dolor sem. Sed luctus, nunc non ornare viverra, elit leo convallis ex, in lobortis velit turpis vitae ' +
    'dui. Praesent aliquam diam sed erat sodales ullamcorper.]]>' +
    '<![CDATA[Pellentesque pulvinar massa et efficitur porta. ' +
    'Aenean volutpat finibus consectetur. Integer aliquet rutrum dui, ut cursus dui suscipit eu. Nullam eu ' +
    'erat sit amet elit ultrices rhoncus. Aenean sed felis massa. Donec rutrum vehicula leo vitae dapibus. ' +
    'Donec eget placerat lacus.]]></content>' +
    '</entry></feed>'

const result = parse(xml)
```

## Licence

The MIT License

Copyright (c) 2017 Tuan Anh Tran https://tuananh.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.