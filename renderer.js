export function onLoad() {
  //另一种方案，直接劫持addEventListener，修改click事件，但这会导致右键失灵，不知原因
  // (() => {
  //   const origin_addEventListener = Element.prototype.addEventListener;
  //   Element.prototype.addEventListener = function (type, listener) {
  //     // if (type == "click") {
  //     //   console.log("LISTEN:CLICK",this)
  //     //   if (this.classList.contains("text-link")) {
  //     //     console.log("LINK DETECTED");
  //     //     addEventListener.call(this, "click", (event) => {
  //     //       alert(this.innerText);
  //     //     });
  //     //     return;
  //     //   }
  //     // }
  //     origin_addEventListener.call(this, type, listener);
  //   };
  // })();
}
