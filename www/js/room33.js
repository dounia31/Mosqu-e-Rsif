room33.prototype = Object.create(THREE.Object3D.prototype);
room33.prototype.constructor = room33;

function room33(scene) {
    THREE.Object3D.call(this);
    var room33 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/33.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom32 = new NavigationArrow(scene, {
        degree: 100,//50
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room33.remove();
            // Start a new room
            new room32(scene);
            scene.rotation.y -= 300 ;
        },
    });
    /*this.navigationArrowToroom29= new NavigationArrow(scene, {
        degree: 290,//250
        verticalOffset: 10,
        onFocus: function () {
            // remove the room
            room33.remove();
            // Start a new room
            new room29(scene);
        },
    });*/

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom32.remove();
        //this.navigationArrowToroom29.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}