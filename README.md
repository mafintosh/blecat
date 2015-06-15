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

And on another one with bluetooth enabled

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
blecat > myfile.txt
```

## Linux

This requires `bluetooth.h` headers in order to build the native component on Linux.

To install on ubuntu, `sudo apt-get install libbluetooth-dev` before `npm install blecat`

## License

[MIT](LICENSE)
