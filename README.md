# omega-utils

This is a private package made by and for OmegaOrSomething (Also the owner of this GitHub repository) to assist him in making his Discord Bot(s).

# Free to use?

This package, although made exclusively for Omega is absolutely free to use.

# Installation

The package can be installed like any other package using

```
npm install omega-utils
```

# Features

### formatString()

`The formatString() function formats the string in a way that the first character is in uppercase while the rest of the string is in lowercase.`

```js
formatString("fOo bAr") -> "Foo bar"
```

### formatTime()

`The formatTime() function takes in a the time in seconds and returns the time in Hours, Minutes and Seconds.`

```js
formatTime(3661) -> 1:1:1
```

### errorize()

`The errorize function takes in 3 arguments. A <Discord.Message>, <Discord.MessageEmbed>, <Discord.MessageEmbed#Description>. The Message is required to set the author tag and iconULR to the embed. The Description is the description which will be set. The description should be the error and what should be done to fix the error`

```js
errorize(message, embed, "An error occured!\nPlease contact Omega#6666 to fix the error") ->
```

![image](https://user-images.githubusercontent.com/95863526/158995029-aaa3b783-81ae-46d7-9bf3-259fbde90c89.png)

### arrayRandomize()

`The arrayRandomize function takes in an array as an argument and returns a random element from the array.`

```js
let arr = ["foo", "bar", "discord", "javascript"];
arrayRandomize(arr);
```

`discord`

### multiQueryStartsWith()

`The multiQueryStartsWith function takes in 3 arguments, namely <Discord.Message>, QueryType, Query. The Message is required to fetch the guild. The QueryType can be either of "members" or "roles" and the Query is the what the function finds. It searches through the guild's cache to find any results that starts with the Query and returns all the filtered results in an array`

```js
const results = multiQueryStartsWith(message, "members", `Om`);
results.forEach((res) => {
  console.log(`${res.user.tag} | `);
});
```

`Omega#6666 | OmegaIsCool#1952`

### multiQueryIncludes()

`Does the same as multiQueryStartsWith() function but instead of filtering by startsWith(), it filters using includes().`

```js
const results = multiQueryIncludes(message, "members", `Om`);
results.forEach((res) => {
  console.log(`${res.user.tag} | `);
});
```

`Omega#6666 | OmegaIsCool#1952 | EcoMoney#4781`

# ************************************\_\_\_\_************************************
