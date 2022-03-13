#!/usr/bin/env node
const _Port = require("serialport-node");
let path = "";
function handle(value) {
    console.log("handle::", value);
}
function autoWrite() {
    setInterval(function () {
        _Port.write(path, [97, 98, 99, 100]);
    }, 1000);
}
_Port.list().then((v) => {
    const size = v.length;
    if (size < 1) {
        return;
    }
    const option = v[size - 1];
    console.log("option:", option);
    path = option.path;
    _Port.createPort({ path: path, baudRate: 115200, autoOpen: true }, handle);
    if (path == "")
        return;
    autoWrite();
});
//# sourceMappingURL=index.js.map