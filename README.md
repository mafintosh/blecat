# blecat

A 1-1 pipe over bluetooth low energy

```
npm install -g blecat
```

## Usage

On one machine with bluetooth enabled run

```
echo hello world | blecat
```

An on another one with bluetooth enabled

```
blecat
```

The second machine should now print out `hello world`.

## Transfer files

You can also transfer files using blecat

To share a file from a machine do

```
blecat < myfile.txt
```

To receive it on another

```
bluecat > myfile.txt
```

## License

MIT
