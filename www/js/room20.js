room20.prototype = Object.create(THREE.Object3D.prototype);
room20.prototype.constructor = room20;

function room20(scene) {
    THREE.Object3D.call(this);
    var room20 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/20.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom19 = new NavigationArrow(scene, {
        degree: 280,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room20.remove();
            // Start a new room
            new room19(scene);
        },
    });

    this.navigationArrowToroom13 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room20.remove();
            // Start a new room
            new room13(scene);
        },
    });

    this.navigationArrowToroom21= new NavigationArrow(scene, {
        degree: 15,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room20.remove();
            // Start a new room
            new room21(scene);
            scene.rotation.y -= 100 ;
        },
    });

    this.navigationArrowToroom11= new NavigationArrow(scene, {
        degree: 100,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room20.remove();
            // Start a new room
            new room11(scene);
            //scene.rotation.y -= 100 ;
        },
    });

    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom19.remove();
        this.navigationArrowToroom13.remove();
        this.navigationArrowToroom21.remove();
        this.navigationArrowToroom11.remove();


        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}