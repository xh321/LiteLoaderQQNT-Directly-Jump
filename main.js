const exec = require("child_process").exec;
const fs = require("fs");
var defaultBrowser = LiteLoader.api.config.get("directly_jump", {
  browser: "",
});

function onBrowserWindowCreated(window) {
  const original_send =
    (window.webContents.__qqntim_original_object &&
      window.webContents.__qqntim_original_object.send) ||
    window.webContents.send;

  const patched_send = function (channel, ...args) {
    if (args.length >= 2) {
      if (args.some((item) => item && item.checkUrlsResult != null)) {
        console.log(fs.existsSync(defaultBrowser.browser));
        if (
          (defaultBrowser?.browser ?? "") != "" &&
          fs.existsSync(defaultBrowser.browser)
        ) {
          var cmd =
            '"' +
            defaultBrowser.browser +
            '"' +
            ' "' +
            args[1].checkUrlsResult[0].url +
            '"';
          exec(cmd);
          args.pop();
        } else {
          args[1].checkUrlsResult.forEach((i) => {
            i.result = 1;
            i.jumpResult = 11;
            i.jumpUrl = "";
          });
        }
      }
    }
    return original_send.call(window.webContents, channel, ...args);
  };

  if (window.webContents.__qqntim_original_object)
    window.webContents.__qqntim_original_object.send = patched_send;
  else window.webContents.send = patched_send;
}

module.exports = {
  onBrowserWindowCreated,
};
