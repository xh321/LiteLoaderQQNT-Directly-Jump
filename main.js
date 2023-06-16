function onLoad(plugin) {
}

function onBrowserWindowCreated(window) {
  const original_send = window.webContents.send;
  window.webContents.send = function (channel, ...args) {
    if (args.length >= 2) {
      if (args.some((item) => item && item.checkUrlsResult != null)) {
        args[1].checkUrlsResult.forEach((i) => {
          i.result = 1;
          i.jumpResult = 11;
          i.jumpUrl = "";
        });
      }
    }
    return original_send.call(window.webContents, channel, ...args);
  };
}

module.exports = {
  onLoad,
  onBrowserWindowCreated,
};
