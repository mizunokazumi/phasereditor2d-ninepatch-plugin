// version: 1.0.1
function registerNinePatchFactory() {
    Phaser.GameObjects.GameObjectFactory.register("ninePatch", function (x, y, width, height, key, frame) {
        return this.displayList.add(new NinePatch(this.scene, x, y, width, height, key, frame));
    });
}
