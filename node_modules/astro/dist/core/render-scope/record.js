import { getInstalledRenderScope } from "./scope.js";
function recordContentEntryRender(filePath) {
  if (!filePath) return;
  getInstalledRenderScope()?.getStore()?.contentEntries?.add(filePath);
}
function recordStaticImage(image) {
  getInstalledRenderScope()?.getStore()?.staticImages?.push(image);
}
export {
  recordContentEntryRender,
  recordStaticImage
};
