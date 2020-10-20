[![Discord](https://discordapp.com/api/guilds/240059867744698368/embed.png)](https://discord.gg/p895czC)
[![Version](https://img.shields.io/npm/v/@pepijn98/kitai.svg?maxAge=3600)](https://www.npmjs.com/package/@pepijn98/kitai)
[![Downloads](https://img.shields.io/npm/dt/@pepijn98/kitai.svg?maxAge=3600)](https://www.npmjs.com/package/@pepijn98/kitai)
[![Dependencies](https://img.shields.io/david/Pepijn98/kitai.svg?maxAge=3600)](https://david-dm.org/Pepijn98/kitai)
[![Dev Dependencies](https://img.shields.io/david/dev/Pepijn98/kitai.svg?maxAge=3600)](https://david-dm.org/Pepijn98/kitai)
[![Maintainability](https://api.codeclimate.com/v1/badges/843becfdf91e15da5b0c/maintainability)](https://codeclimate.com/github/Pepijn98/kitai/maintainability)

# kitai (期待)
This is a copy of kotlin's require function.
<br>
It validates the condition you give it and if it's false will throw an IllegalArgumentException.

# Installation
- npm i -S @pepijn98/kitai
- yarn add @pepijn98/kitai

# Examples
See [examples](./examples) for more
```ts
// You can name this anything you want, I like "expect" since it fits the package name.
// You can even name it require just like kotlin (only if you don't use node's require function)
import expect from "@pepijn98/kitai";

function test(arg: number): void {
    expect(arg >= 0, () => `"arg" cannot be a negative number, was ${arg}`);
    
    // We now know that arg will not be a negative number
    // Do your extremly complex 9000 IQ mathematical equation here
}

test(-5); // Will throw an IllegalArgumentException
test(15); // Won't throw, yaay
```

# Name
Since it's a Japanese name I guess I should explain this, even though I don't speak Japanese and use translators.
<br>
Kitai written as 期待 in kanji, roughly means "Expectations" or "Expectation"
<br>
<br>
*(directly taken from google translate and deepl, please excuse my ignorance if it's completly wrong)*
