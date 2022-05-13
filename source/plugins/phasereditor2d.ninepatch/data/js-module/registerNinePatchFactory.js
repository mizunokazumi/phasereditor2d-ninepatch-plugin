// version: 1.1.0-alpha
import Phaser from "phaser";
import NinePatch from "./NinePatch";
export default function registerNinePatchFactory() {
    Phaser.GameObjects.GameObjectFactory.register("ninePatch", function (x, y, width, height, key, frame) {
        return this.displayList.add(new NinePatch(this.scene, x, y, width, height, key, frame));
    });
}
