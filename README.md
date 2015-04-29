# bluecat

A 1-1 pipe over bluetooth low energy

```
npm install -g bluecat
```

## Usage

On one machine with bluetooth enabled run

```
echo hello world | bluecat
```

And on another one with bluetooth enabled

```
bluecat
```

The second machine should now print out `hello world`.

## Transfer files

You can also transfer files using bluecat

To share a file from a machine do

```
bluecat < myfile.txt
```

To receive it on another

```
bluecat > myfile.txt
```

## License

[MIT](LICENSE)
