// version: 1.0.3

function registerNinePatchImageFactory() {

    Phaser.GameObjects.GameObjectFactory.register("ninePatchImage",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height: number, key: string, frame?: string | number) {

            return this.displayList.add(new NinePatchImage(this.scene, x, y, width, height, key, frame));
        });
}