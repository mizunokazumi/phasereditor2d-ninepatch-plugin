// v1.1.0-beta.1


function registerNinePatchContainerFactory() {

    Phaser.GameObjects.GameObjectFactory.register("ninePatchContainer",
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, width: number, height: number, key: string, frame?: string | number) {

            return this.displayList.add(new NinePatchContainer(this.scene, x, y, width, height, key, frame));
        });
}